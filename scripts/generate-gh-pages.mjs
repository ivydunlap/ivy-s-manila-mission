#!/usr/bin/env node
/**
 * Generates index.html and 404.html for GitHub Pages static deployment.
 * TanStack Start requires a $tsr-stream-barrier script with the router manifest
 * to initialise the client. This script reads the manifest from the build
 * output and produces a correct HTML shell.
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const BASE = process.env.VITE_BASE?.replace(/\/$/, "") ?? "";
const assetsDir = ".output/public/assets";
const serverDir = ".output/server";

// ── find hashed asset names ──────────────────────────────────────────
const assetFiles = readdirSync(assetsDir);
const css = assetFiles.find((f) => /^styles-.*\.css$/.test(f));
const mainJs = assetFiles.find((f) => /^index-.*\.js$/.test(f));
if (!css || !mainJs) {
  console.error("Could not find styles or index JS in", assetsDir);
  process.exit(1);
}

// ── read the TanStack Start router manifest ──────────────────────────
const manifestFile = readdirSync(serverDir).find((f) =>
  f.startsWith("_tanstack-start-manifest_v-")
);
if (!manifestFile) {
  console.error("Could not find TanStack Start manifest in", serverDir);
  process.exit(1);
}

const manifestSrc = readFileSync(`${serverDir}/${manifestFile}`, "utf-8");

// Extract the routes object from:
//   var tsrStartManifest = () => ({ routes: { ... } });
// We use a quick Function-based eval on just the routes value.
const routesMatch = manifestSrc.match(
  /var tsrStartManifest = \(\) => \(\{([\s\S]*)\}\);/
);
if (!routesMatch) {
  console.error("Could not parse manifest content");
  process.exit(1);
}

// Evaluate the manifest body to get the plain object
let manifestObj;
try {
  manifestObj = new Function(`return ({${routesMatch[1]}})`)();
} catch (e) {
  console.error("Could not evaluate manifest:", e.message);
  process.exit(1);
}

const routes = manifestObj.routes ?? {};

// ── build the $tsr-stream-barrier script ─────────────────────────────
// Replaces any SSR preloads/assets with our local build paths.
// `matches: []` tells TanStack Start there is no SSR state to hydrate —
// it will do a fresh client-side render for whatever route is active.
const routesJson = JSON.stringify(routes, (_k, v) => {
  // strip filePath — not needed on the client
  if (_k === "filePath") return undefined;
  return v;
});

const tsrScript = [
  `(self.$R=self.$R||{})["tsr"]=[];`,
  `self.$_TSR={`,
  `  h(){this.hydrated=!0,this.c()},`,
  `  e(){this.streamEnded=!0,this.c()},`,
  `  c(){this.hydrated&&this.streamEnded&&(delete self.$_TSR,delete self.$R.tsr)},`,
  `  p(e){this.initialized?e():this.buffer.push(e)},`,
  `  buffer:[]`,
  `};`,
  `$_TSR.router={manifest:{routes:${routesJson}},matches:[],lastMatchId:""};`,
  `$_TSR.e();`,
  `document.currentScript.remove();`,
].join("\n");

// ── compose HTML ─────────────────────────────────────────────────────
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ivy Dunlap \u2014 Missionary to Manila</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..600;1,400..600&family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400..600&display=swap">
  <link rel="stylesheet" href="${BASE}/assets/${css}">
</head>
<body>
  <script class="$tsr" id="$tsr-stream-barrier">${tsrScript}</script>
  <script type="module" async>import("${BASE}/assets/${mainJs}")</script>
</body>
</html>`;

writeFileSync(".output/public/index.html", html);
// 404.html lets GitHub Pages serve the SPA shell for every unknown path
writeFileSync(".output/public/404.html", html);

console.log(`Generated index.html + 404.html`);
console.log(`  CSS : ${BASE}/assets/${css}`);
console.log(`  JS  : ${BASE}/assets/${mainJs}`);
console.log(`  Routes in manifest: ${Object.keys(routes).join(", ")}`);
