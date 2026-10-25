import Seo from "../components/seo/Seo.jsx"
import PageHeader from "../components/ui/PageHeader.jsx"
import StateMessage from "../components/ui/StateMessage.jsx"
import PageLayout from "../components/layout/PageLayout.jsx"
import SimpleAside from "../components/ui/SimpleAside.jsx"
import FeatureRow from "../components/initiatives/FeatureRow.jsx"
import { useNotion } from "../data/useNotion.js"

export default function Initiatives() {
  const { data, loading, error } = useNotion("/api/initiatives")
  return (
    <>
      <Seo title="Initiatives" description="Community and education initiatives led by Devashish Markam in Dantewada district, Chhattisgarh." />
      <PageHeader path="initiatives" title="Initiatives" text="Work beyond the day job." />
      <PageLayout aside={<SimpleAside links={[{ to: "/projects", label: "Projects" }, { to: "/team", label: "Team" }, { to: "/links", label: "Links" }]} />}>
        <StateMessage loading={loading} error={error} empty={data && data.length === 0} emptyText="No initiatives published yet." />
        {data && data.length > 0 && (
          <div className="features">
            {data.map((f) => <FeatureRow key={f.id} {...f} />)}
          </div>
        )}
      </PageLayout>
    </>
  )
}
