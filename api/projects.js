import { DB, queryPublished, getText, getUrl, getSelect, getFile, getRelationIds, send, fail } from "./_notion.js"

export default async function handler(req, res) {
  try {
    const [projects, team] = await Promise.all([queryPublished(DB.projects), queryPublished(DB.team)])
    const people = Object.fromEntries(
      team.map((p) => [p.id, { name: getText(p.properties.Name), role: getText(p.properties.Role) }])
    )
    const items = projects.map((p) => {
      const pr = p.properties
      return {
        id: p.id,
        title: getText(pr.Title),
        slug: getText(pr.Slug),
        description: getText(pr.Description),
        image: getFile(pr.Image),
        link: getUrl(pr.Link),
        status: getSelect(pr.Status),
        team: getRelationIds(pr["Team Members"]).map((id) => people[id]).filter(Boolean),
      }
    })
    send(res, items)
  } catch (e) {
    fail(res, e)
  }
}
