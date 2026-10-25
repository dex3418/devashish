import Prompt from "../ui/Prompt.jsx"
import { ventures } from "../../data/home.js"

// Both ventures in one joined panel instead of two separate cards.
export default function VentureSplit() {
  return (
    <section className="block">
      <Prompt path="ventures" cmd="cat" />
      <div className="split glass">
        {ventures.map((v) => (
          <a className="split__half" href={v.href} target="_blank" rel="noreferrer" key={v.name}>
            <span className="split__bar" style={{ background: v.accent }} />
            <h3 className="split__name">{v.name}</h3>
            <p className="split__text">{v.text}</p>
            <span className="split__visit">Visit site</span>
          </a>
        ))}
      </div>
    </section>
  )
}
