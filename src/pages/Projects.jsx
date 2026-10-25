import Seo from "../components/seo/Seo.jsx"
import { useState } from "react"
import PageHeader from "../components/ui/PageHeader.jsx"
import StateMessage from "../components/ui/StateMessage.jsx"
import PageLayout from "../components/layout/PageLayout.jsx"
import { Aside, AsideSection } from "../components/ui/Aside.jsx"
import FilterList from "../components/ui/FilterList.jsx"
import RelatedLinks from "../components/ui/RelatedLinks.jsx"
import SocialLinks from "../components/ui/SocialLinks.jsx"
import ProjectCard from "../components/projects/ProjectCard.jsx"
import { useNotion } from "../data/useNotion.js"

const ORDER = ["Live", "In Progress", "Planned"]

export default function Projects() {
  const { data, loading, error } = useNotion("/api/projects")
  const [status, setStatus] = useState("All")

  const list = data || []
  const statuses = [...new Set(list.map((p) => p.status).filter(Boolean))].sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b))
  const options = [{ label: "All", count: list.length }, ...statuses.map((s) => ({ label: s, count: list.filter((p) => p.status === s).length }))]
  const shown = list.filter((p) => status === "All" || p.status === status)

  const aside = (
    <Aside mobile>
      {statuses.length > 0 && (
        <AsideSection title="Filter by status">
          <FilterList options={options} value={status} onChange={setStatus} />
        </AsideSection>
      )}
      <AsideSection title="More pages" extra>
        <RelatedLinks links={[{ to: "/initiatives", label: "Initiatives" }, { to: "/articles", label: "Articles" }, { to: "/services", label: "Services" }]} />
      </AsideSection>
      <AsideSection title="Elsewhere" extra>
        <SocialLinks />
      </AsideSection>
    </Aside>
  )

  return (
    <>
      <Seo title="Projects" description="Projects by Devashish Markam, a grassroots builder in Dantewada, Chhattisgarh, including Vouchr and Novaforge Labs." />
      <PageHeader path="projects" title="Projects" text="Things shipped and in progress." />
      <PageLayout aside={aside}>
        <StateMessage loading={loading} error={error} empty={data && data.length === 0} emptyText="No projects published yet." />
        {shown.length > 0 && (
          <div className="projects">
            {shown.map((p, i) => <ProjectCard key={p.id} {...p} featured={i === 0 && shown.length > 2} />)}
          </div>
        )}
      </PageLayout>
    </>
  )
}
