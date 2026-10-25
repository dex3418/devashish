import { DB, listEndpoint, getText, getSelect, getDate, getFile } from "./_notion.js"

export default listEndpoint(
  DB.articles,
  (p) => ({
    title: getText(p.Title),
    slug: getText(p.Slug),
    type: getSelect(p.Type),
    cover: getFile(p["Cover Image"]),
    summary: getText(p.Summary),
    date: getDate(p.Date),
  }),
  [{ property: "Date", direction: "descending" }]
)
