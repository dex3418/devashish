import { DB, listEndpoint, getText, getSelect, getFile } from "./_notion.js"

// The destination URL is not sent to the browser. Buttons go through /go/:slug.
export default listEndpoint(
  DB.links,
  (p) => ({
    title: getText(p.Title),
    slug: getText(p.Slug),
    image: getFile(p.Image),
    category: getSelect(p.Category),
  }),
  [{ property: "Title", direction: "ascending" }]
)
