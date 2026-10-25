import Seo from "../components/seo/Seo.jsx"
import PageHeader from "../components/ui/PageHeader.jsx"
import StateMessage from "../components/ui/StateMessage.jsx"
import PageLayout from "../components/layout/PageLayout.jsx"
import SimpleAside from "../components/ui/SimpleAside.jsx"
import TeamCard from "../components/team/TeamCard.jsx"
import { useNotion } from "../data/useNotion.js"

export default function Team() {
  const { data, loading, error } = useNotion("/api/team")
  return (
    <>
      <Seo title="Team" description="The people building alongside Devashish Markam in Dantewada, Chhattisgarh." />
      <PageHeader path="team" title="Team" text="The people building alongside me." />
      <PageLayout aside={<SimpleAside links={[{ to: "/initiatives", label: "Initiatives" }, { to: "/projects", label: "Projects" }, { to: "/resume", label: "Resume" }]} />}>
        <StateMessage loading={loading} error={error} empty={data && data.length === 0} emptyText="No team members published yet." />
        {data && data.length > 0 && (
          <div className="grid">
            {data.map((m) => <TeamCard key={m.id} {...m} />)}
          </div>
        )}
      </PageLayout>
    </>
  )
}
