import { Link } from "react-router-dom"

export default function RelatedLinks({ links }) {
  return (
    <ul className="aside__links">
      {links.map((l) => <li key={l.to}><Link to={l.to}>{l.label} <span aria-hidden="true">→</span></Link></li>)}
    </ul>
  )
}
