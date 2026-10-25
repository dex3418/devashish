import { DB, queryPublished, getUrl } from "./_notion.js"

// /go/:slug redirects to the affiliate URL. Click tracking can be added here later.
export default async function handler(req, res) {
  const slug = String(req.query.slug || "")
  try {
    const rows = await queryPublished(DB.links, [], { property: "Slug", rich_text: { equals: slug } })
    const url = rows[0] ? getUrl(rows[0].properties.URL) : ""
    res.setHeader("Cache-Control", "no-store")
    if (/^https?:\/\//.test(url)) return res.redirect(302, url)
  } catch (e) {
    console.error(e)
  }
  res.redirect(302, "/links")
}
