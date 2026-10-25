import Seo from "../components/seo/Seo.jsx"
import PageHeader from "../components/ui/PageHeader.jsx"
import StateMessage from "../components/ui/StateMessage.jsx"
import PageLayout from "../components/layout/PageLayout.jsx"
import { Aside, AsideSection } from "../components/ui/Aside.jsx"
import AnchorIndex from "../components/ui/AnchorIndex.jsx"
import SocialLinks from "../components/ui/SocialLinks.jsx"
import ResumeSection from "../components/resume/ResumeSection.jsx"
import { useNotion } from "../data/useNotion.js"

const ORDER = ["Experience", "Education", "Skills", "Certifications", "Achievements"]

export default function Resume() {
  const { data, loading, error } = useNotion("/api/resume")
  const groups = data ? ORDER.map((name) => ({ name, items: data.filter((d) => d.section === name) })).filter((g) => g.items.length) : []

  const aside = (
    <Aside mobile={groups.length > 1}>
      {groups.length > 1 && (
        <AsideSection title="Jump to">
          <AnchorIndex items={groups.map((g) => ({ id: `resume-${g.name.toLowerCase()}`, label: g.name }))} />
        </AsideSection>
      )}
      <AsideSection title="Elsewhere" extra>
        <SocialLinks />
      </AsideSection>
    </Aside>
  )

  return (
    <>
      <Seo title="Resume" description="Experience, education and skills of Devashish Markam, founder of Novaforge Labs and Vouchr in Dantewada, Chhattisgarh." />
      <PageHeader path="resume" title="Resume" text="Experience, education and skills." />
      <PageLayout aside={aside}>
        <StateMessage loading={loading} error={error} empty={data && data.length === 0} emptyText="No resume entries published yet." />
        {groups.map((g) => <ResumeSection key={g.name} name={g.name} items={g.items} />)}
      </PageLayout>
    </>
  )
}
