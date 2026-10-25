import { DB, listEndpoint, getText, getSelect, getDate } from "./_notion.js"

export default listEndpoint(DB.resume, (p) => ({
  title: getText(p.Title),
  section: getSelect(p.Section),
  organization: getText(p.Organization),
  start: getDate(p["Start Date"]),
  end: getDate(p["End Date"]),
  details: getText(p.Details),
}))
