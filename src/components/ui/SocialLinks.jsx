import { useNotion } from "../../data/useNotion.js"
import { FALLBACK_SOCIALS } from "../../data/socials.js"

// Reads the Socials database. Falls back to GitHub and the Novaforge site when nothing is published.
export default function SocialLinks() {
  const { data } = useNotion("/api/socials")
  const list = (data && data.length ? data : FALLBACK_SOCIALS).filter((s) => s.url)
  return (
    <ul className="socials">
      {list.map((s) => (
        <li key={s.id}>
          <a href={s.url} target="_blank" rel="noopener noreferrer me">{s.name} <span aria-hidden="true">↗</span></a>
        </li>
      ))}
    </ul>
  )
}
