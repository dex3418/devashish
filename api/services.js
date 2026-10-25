import { DB, listEndpoint, getText } from "./_notion.js"

export default listEndpoint(DB.services, (p) => ({
  title: getText(p.Title),
  description: getText(p.Description),
  price: getText(p.Price),
}))
