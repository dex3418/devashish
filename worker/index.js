// Cloudflare Worker entry. Static files and the SPA fallback are served by the assets binding.
// Only /api/* and /go/* reach this Worker (see run_worker_first in wrangler.jsonc).
// The handlers in /api were written for Vercel (req, res), so a tiny shim adapts them.
import article from "../api/article.js"
import articles from "../api/articles.js"
import go from "../api/go.js"
import initiatives from "../api/initiatives.js"
import links from "../api/links.js"
import projects from "../api/projects.js"
import resume from "../api/resume.js"
import services from "../api/services.js"
import socials from "../api/socials.js"
import team from "../api/team.js"

const ROUTES = { article, articles, initiatives, links, projects, resume, services, socials, team }

function run(handler, query) {
  return new Promise((resolve) => {
    const headers = new Headers()
    let status = 200
    const done = (body) => resolve(new Response(body, { status, headers }))
    const res = {
      setHeader: (k, v) => headers.set(k, v),
      status(code) {
        status = code
        return res
      },
      json(data) {
        headers.set("Content-Type", "application/json")
        done(JSON.stringify(data))
      },
      redirect(code, location) {
        status = code
        headers.set("Location", location)
        done(null)
      },
    }
    Promise.resolve(handler({ query }, res)).catch((e) => {
      console.error(e)
      status = 500
      res.json({ error: "Could not load content" })
    })
  })
}

export default {
  async fetch(request, env) {
    // Secrets and vars also reach process.env (nodejs_compat), which api/_notion.js reads.
    if (env?.NOTION_TOKEN && !process.env.NOTION_TOKEN) process.env.NOTION_TOKEN = env.NOTION_TOKEN

    const url = new URL(request.url)
    const query = Object.fromEntries(url.searchParams)

    if (url.pathname.startsWith("/go/")) {
      query.slug = decodeURIComponent(url.pathname.slice(4).replace(/\/$/, ""))
      return run(go, query)
    }

    const name = url.pathname.replace(/^\/api\//, "").replace(/\/$/, "")
    if (url.pathname.startsWith("/api/") && ROUTES[name]) return run(ROUTES[name], query)

    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    })
  },
}
