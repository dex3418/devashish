import { DB, listEndpoint, getText, getUrl, getFile } from "./_notion.js"

export default listEndpoint(DB.initiatives, (p) => ({
  title: getText(p.Title),
  description: getText(p.Description),
  image: getFile(p.Image),
  link: getUrl(p.Link),
}))
