import { DB, listEndpoint, getText, getUrl, getFile } from "./_notion.js"

export default listEndpoint(DB.team, (p) => ({
  name: getText(p.Name),
  role: getText(p.Role),
  photo: getFile(p.Photo),
  bio: getText(p.Bio),
  social: getUrl(p["Social Link"]),
}))
