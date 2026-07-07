// ── Newsletter → email HTML ───────────────────────────────────────────────
// Turns a NewsletterPost (the same content shown on the website) into an
// email-ready HTML document you can paste into a Mailchimp "Code your own"
// campaign and send. Email HTML has to be old-school: table layout, inline
// styles, web-safe fonts, and ABSOLUTE image URLs — so this file deliberately
// looks nothing like the React site.
//
// Used by the /newsletter/email tool page (the "Copy for Mailchimp" button).

import type { NewsletterPost, PostBlock } from "@/lib/newsletter-posts";

// Live site origin — email images/links must be absolute (email clients can't
// resolve "/assets/…"). Update this if the domain ever changes.
export const SITE_ORIGIN = "https://ivydunlap.com";

// Brand colors (converted from the site's oklch tokens in styles.css).
const C = {
  base: "#fdf9f2",
  paper: "#f7f0e7",
  clay: "#cc845b",
  ink: "#202a35",
  muted: "#6d7277",
  claySoft: "#f5e6da",
  hair: "#eaddcd",
};

const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "Arial, Helvetica, sans-serif";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Make a URL absolute against the live site (email clients need full URLs).
function abs(url: string): string {
  if (!url) return url;
  if (/^https?:\/\//i.test(url)) return url;
  return SITE_ORIGIN + (url.startsWith("/") ? url : "/" + url);
}

function row(inner: string): string {
  return `<tr><td>${inner}</td></tr>`;
}

function renderBlock(block: PostBlock): string {
  switch (block.type) {
    case "p":
      return row(
        `<div style="padding:8px 32px;font-family:${SANS};font-size:16px;line-height:1.7;color:${C.ink};">${esc(
          block.text,
        )}</div>`,
      );
    case "h":
      return row(
        `<div style="padding:22px 32px 4px;font-family:${SERIF};font-size:21px;line-height:1.3;color:${C.ink};">${esc(
          block.text,
        )}</div>`,
      );
    case "img": {
      const caption = block.caption
        ? `<div style="font-family:${SANS};font-size:13px;font-style:italic;color:${C.muted};padding:6px 0 0;">${esc(
            block.caption,
          )}</div>`
        : "";
      return row(
        `<div style="padding:14px 32px;"><img src="${abs(block.src)}" alt="${esc(
          block.alt,
        )}" width="536" style="width:100%;max-width:536px;height:auto;display:block;border-radius:8px;" />${caption}</div>`,
      );
    }
    case "quote":
      return row(
        `<div style="padding:16px 32px;"><div style="border-left:3px solid ${C.clay};padding:4px 0 4px 18px;font-family:${SERIF};font-size:19px;font-style:italic;line-height:1.5;color:${C.ink};">${esc(
          block.text,
        )}</div></div>`,
      );
    case "prayer": {
      const items = block.items
        .map(
          (i) =>
            `<div style="padding:3px 0;font-family:${SANS};font-size:15px;line-height:1.6;color:${C.ink};"><span style="color:${C.clay};">&bull;</span>&nbsp;&nbsp;${esc(
              i,
            )}</div>`,
        )
        .join("");
      return row(
        `<div style="padding:14px 32px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.claySoft};border-radius:10px;"><tr><td style="padding:16px 20px;"><div style="font-family:${SANS};font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${C.clay};font-weight:bold;padding-bottom:8px;">How you can pray</div>${items}</td></tr></table></div>`,
      );
    }
    default:
      return "";
  }
}

/** Renders a complete, paste-ready HTML email for one newsletter post. */
export function renderPostEmail(post: NewsletterPost): string {
  const postUrl = `${SITE_ORIGIN}/newsletter/${post.slug}`;
  const blocks = post.blocks.map(renderBlock).join("\n");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>${esc(post.title)}</title>
</head>
<body style="margin:0;padding:0;background:${C.paper};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(post.excerpt)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.paper};">
<tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:${C.base};border-radius:14px;overflow:hidden;">
<tr><td style="padding:26px 32px 0;font-family:${SANS};font-size:12px;letter-spacing:2px;text-transform:uppercase;color:${C.clay};font-weight:bold;">${esc(
    post.date,
  )} &middot; Newsletter</td></tr>
<tr><td style="padding:8px 32px 4px;font-family:${SERIF};font-size:30px;line-height:1.2;color:${C.ink};">${esc(
    post.title,
  )}</td></tr>
<tr><td style="padding:14px 0 6px;"><img src="${abs(post.cover)}" alt="${esc(
    post.title,
  )}" width="600" style="width:100%;max-width:600px;height:auto;display:block;" /></td></tr>
${blocks}
<tr><td style="padding:28px 32px;border-top:1px solid ${C.hair};font-family:${SANS};font-size:13px;line-height:1.7;color:${C.muted};">
<a href="${postUrl}" style="color:${C.clay};text-decoration:none;font-weight:bold;">Read this letter on the website &rarr;</a><br><br>
You're receiving this because you subscribed at <a href="${SITE_ORIGIN}" style="color:${C.muted};">ivydunlap.com</a>.<br>
<a href="*|UNSUB|*" style="color:${C.muted};">Unsubscribe</a> &nbsp;&middot;&nbsp; *|LIST:ADDRESS|*
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}
