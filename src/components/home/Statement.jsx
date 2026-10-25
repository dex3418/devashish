import { Link } from "react-router-dom"
import { hero } from "../../data/home.js"

// Second section: the headline and the two main buttons.
export default function Statement() {
  return (
    <section className="statement">
      <h1 className="statement__title">{hero.headline}</h1>
      <p className="statement__lead">{hero.lead}</p>
      <div className="statement__actions">
        <Link to="/projects" className="btn btn--primary">See projects</Link>
        <Link to="/services" className="btn btn--ghost">View services</Link>
      </div>
    </section>
  )
}
