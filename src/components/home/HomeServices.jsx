import SectionHead from "../ui/SectionHead.jsx"
import ServiceRow from "../services/ServiceRow.jsx"
import { useNotion } from "../../data/useNotion.js"

export default function HomeServices() {
  const { data } = useNotion("/api/services")
  if (!data || data.length === 0) return null
  return (
    <section className="block">
      <SectionHead path="services" title="What I can do for you" to="/services" />
      <div className="rows glass">
        {data.slice(0, 4).map((s) => <ServiceRow key={s.id} {...s} />)}
      </div>
    </section>
  )
}
