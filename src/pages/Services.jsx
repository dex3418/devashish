import Seo from "../components/seo/Seo.jsx"
import PageHeader from "../components/ui/PageHeader.jsx"
import StateMessage from "../components/ui/StateMessage.jsx"
import PageLayout from "../components/layout/PageLayout.jsx"
import SimpleAside from "../components/ui/SimpleAside.jsx"
import ServiceRow from "../components/services/ServiceRow.jsx"
import { useNotion } from "../data/useNotion.js"

export default function Services() {
  const { data, loading, error } = useNotion("/api/services")
  return (
    <>
      <Seo title="Services" description="Services offered by Devashish Markam, a grassroots builder from Dantewada, Chhattisgarh." />
      <PageHeader path="services" title="Services" text="What I can build or teach for you." />
      <PageLayout aside={<SimpleAside links={[{ to: "/projects", label: "Projects" }, { to: "/articles", label: "Articles" }, { to: "/initiatives", label: "Initiatives" }]} />}>
        <StateMessage loading={loading} error={error} empty={data && data.length === 0} emptyText="No services published yet." />
        {data && data.length > 0 && (
          <div className="rows glass">
            {data.map((s) => <ServiceRow key={s.id} {...s} />)}
          </div>
        )}
      </PageLayout>
    </>
  )
}
