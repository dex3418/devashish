import Prompt from "../ui/Prompt.jsx"
import { monthYear } from "../../data/format.js"

// Entries hang off one vertical line, like parts on a bus.
export default function ResumeSection({ name, items }) {
  return (
    <section className="tl" id={`resume-${name.toLowerCase()}`}>
      <Prompt path={`resume/${name.toLowerCase()}`} />
      <ol className="tl__list">
        {items.map((it) => {
          const dates = it.start ? `${monthYear(it.start)} to ${it.end ? monthYear(it.end) : "Present"}` : ""
          return (
            <li className="tl__item" key={it.id}>
              {dates && <p className="tl__date">{dates}</p>}
              <h3 className="tl__title">{it.title}</h3>
              {it.organization && <p className="tl__org">{it.organization}</p>}
              {it.details && <p className="tl__text">{it.details}</p>}
            </li>
          )
        })}
      </ol>
    </section>
  )
}
