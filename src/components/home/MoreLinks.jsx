import { Link } from "react-router-dom"
import Prompt from "../ui/Prompt.jsx"
import { more } from "../../data/home.js"

export default function MoreLinks() {
  return (
    <section className="block block--last">
      <Prompt path="" cmd="ls more/" />
      <div className="morelinks">
        {more.map((m) => <Link key={m.to} to={m.to} className="morelinks__item">{m.label}</Link>)}
      </div>
    </section>
  )
}
