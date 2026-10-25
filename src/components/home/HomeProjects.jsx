import SectionHead from "../ui/SectionHead.jsx"
import ProjectCard from "../projects/ProjectCard.jsx"
import { useNotion } from "../../data/useNotion.js"

// Up to three projects: one large card and two small ones. Hidden until there is something to show.
export default function HomeProjects() {
  const { data } = useNotion("/api/projects")
  if (!data || data.length === 0) return null
  const items = data.slice(0, 3)
  return (
    <section className="block">
      <SectionHead path="projects" title="Selected projects" to="/projects" />
      <div className={`bento bento--${items.length}`}>
        {items.map((p, i) => <ProjectCard key={p.id} {...p} featured={items.length === 3 && i === 0} />)}
      </div>
    </section>
  )
}
