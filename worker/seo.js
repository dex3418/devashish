// Live /sitemap.xml and /robots.txt for the portfolio. Article pages are read from Notion on each request.
const ARTICLES_DB = "aef755f27f7d43d1be2f88d4e360731d"
const PAGES = ["/", "/projects", "/services", "/articles", "/resume", "/initiatives", "/team", "/links"]

async function articleSlugs(env) {
  const token = env.NOTION_TOKEN || process.env.NOTION_TOKEN
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

export async function seoResponse(url, env) {
  const site = (env.SITE_URL || url.origin).replace(/\/$/, "")
  const headers = { "Cache-Control": "public, max-age=3600" }
  if (url.pathname === "/robots.txt")
    return new Response(`User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /go/\n\nSitemap: ${site}/sitemap.xml\n`, { headers: { ...headers, "Content-Type": "text/plain; charset=utf-8" } })
  if (url.pathname === "/sitemap.xml") {
    const paths = [...PAGES, ...(await articleSlugs(env)).map((s) => `/articles/${encodeURIComponent(s)}`)]
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${site}${p}</loc></url>`).join("\n")}\n</urlset>\n`
    return new Response(xml, { headers: { ...headers, "Content-Type": "application/xml; charset=utf-8" } })
  }
  return null
}
