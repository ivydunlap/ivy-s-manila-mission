import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Resolves an asset URL relative to Vite's configured base path.
 * Works correctly on localhost, Lovable, and GitHub Pages (subpath deployments).
 */
export function assetUrl(url: string): string {
  if (!url) return url;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  return base + (url.startsWith("/") ? url : "/" + url);
}
