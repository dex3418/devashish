import { DB, listEndpoint, getText, getUrl } from "./_notion.js"

// Social links come from the Socials database. Rows with no URL are skipped on the page.
export default listEndpoint(DB.socials, (p) => ({
  name: getText(p.Name),
  url: getUrl(p.URL),
}))
