import { Link } from "react-router-dom"
import Prompt from "./Prompt.jsx"

export default function SectionHead({ path, title, to, cmd }) {
  return (
    <div className="sec-head">
      <div>
        <Prompt path={path} cmd={cmd} />
        <h2 className="sec-head__title">{title}</h2>
      </div>
      {to && <Link to={to} className="sec-head__all">View all</Link>}
    </div>
  )
}
