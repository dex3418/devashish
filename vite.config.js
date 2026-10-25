import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

const ROUTES = ["/", "/projects", "/services", "/articles", "/resume", "/initiatives", "/team", "/links"]
const ARTICLES_DB = "aef755f27f7d43d1be2f88d4e360731d"

// SITE_URL (build env var) is the site's public address, used for the sitemap and meta tags.
const siteUrl = () => (process.env.SITE_URL || "").replace(/\/$/, "")

// Published article slugs for the sitemap. Best effort: skipped if Notion is not reachable at build time.
async function articleSlugs() {
  const token = process.env.NOTION_TOKEN
  if (!token) return []
  try {
    const res = await fetch(`https://api.notion.com/v1/databases/${ARTICLES_DB}/query`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Notion-Version": "2022-06-28", "Content-Type": "application/json" },
      body: JSON.stringify({ filter: { property: "Published", checkbox: { equals: true } }, page_size: 100 }),
    })
    if (!res.ok) return []
    const data = await res.json()
    return data.results.map((r) => (r.properties.Slug?.rich_text || []).map((t) => t.plain_text).join("")).filter(Boolean)
  } catch {
    return []
  }
}

// Fills __SITE_URL__ in index.html and writes robots.txt and sitemap.xml at build time.
function seoFiles() {
  return {
    name: "seo-files",
    transformIndexHtml: { order: "pre", handler: (html) => html.replaceAll("__SITE_URL__", siteUrl()) },
    async generateBundle() {
      const site = siteUrl()
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /go/\n${site ? `\nSitemap: ${site}/sitemap.xml\n` : ""}`,
      })
      if (!site) return
      const urls = [...ROUTES, ...(await articleSlugs()).map((s) => `/articles/${s}`)]
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${site}${u}</loc></url>`).join("\n")}\n</urlset>\n`,
      })
    },
  }
}

export default defineConfig({ plugins: [react(), seoFiles()] })
