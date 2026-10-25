import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const NAME = "Devashish Markam"
const DEFAULT_TITLE = "Devashish Markam | Builder from Dantewada, Chhattisgarh"
const DEFAULT_DESC = "Grassroots builder from Dantewada, Chhattisgarh. Founder of Novaforge Labs (hands-on AI and embedded systems education) and Vouchr (local talent network)."

function meta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", value)
}

// Updates the tab title and meta tags for the current page. With no props it restores the Home defaults.
export default function Seo({ title, description, type = "website", noindex = false, jsonLd }) {
  const { pathname } = useLocation()
  const ld = jsonLd ? JSON.stringify(jsonLd) : ""

  useEffect(() => {
    const fullTitle = title ? `${title} | ${NAME}` : DEFAULT_TITLE
    const desc = description || DEFAULT_DESC
    const url = window.location.origin + pathname

    document.title = fullTitle
    meta("name", "description", desc)
    meta("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large")
    meta("property", "og:title", fullTitle)
    meta("property", "og:description", desc)
    meta("property", "og:type", type)
    meta("property", "og:url", url)
    meta("name", "twitter:title", fullTitle)
    meta("name", "twitter:description", desc)

    let canonical = document.head.querySelector("link[rel=canonical]")
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.setAttribute("rel", "canonical")
      document.head.appendChild(canonical)
    }
    canonical.setAttribute("href", url)

    let script = document.getElementById("page-jsonld")
    if (ld) {
      if (!script) {
        script = document.createElement("script")
        script.id = "page-jsonld"
        script.type = "application/ld+json"
        document.head.appendChild(script)
      }
      script.textContent = ld
    } else if (script) {
      script.remove()
    }
    return () => document.getElementById("page-jsonld")?.remove()
  }, [title, description, type, noindex, pathname, ld])

  return null
}
