import Seo from "../components/seo/Seo.jsx"
import PageHeader from "../components/ui/PageHeader.jsx"
import StateMessage from "../components/ui/StateMessage.jsx"
import Prompt from "../components/ui/Prompt.jsx"
import PageLayout from "../components/layout/PageLayout.jsx"
import { Aside, AsideSection } from "../components/ui/Aside.jsx"
import AnchorIndex from "../components/ui/AnchorIndex.jsx"
import SocialLinks from "../components/ui/SocialLinks.jsx"
import LinkCard from "../components/links/LinkCard.jsx"
import { useNotion } from "../data/useNotion.js"

export default function Links() {
  const { data, loading, error } = useNotion("/api/links")
  // Group by category, keeping the order categories first appear in.
  const groups = []
  ;(data || []).forEach((l) => {
    const name = l.category || "Other"
    let g = groups.find((x) => x.name === name)
    if (!g) groups.push((g = { name, items: [] }))
    g.items.push(l)
  })

  const aside = (
    <Aside mobile={groups.length > 1}>
      {groups.length > 1 && (
        <AsideSection title="Categories">
          <AnchorIndex items={groups.map((g) => ({ id: `links-${g.name.toLowerCase()}`, label: g.name }))} />
        </AsideSection>
      )}
      <AsideSection title="Elsewhere" extra>
        <SocialLinks />
      </AsideSection>
    </Aside>
  )

  return (
    <>
      <Seo title="Links" description="Tools and resources recommended by Devashish Markam. Some are affiliate links." />
      <PageHeader path="links" title="Links" text="Tools and resources I use and recommend. Some are affiliate links." />
      <PageLayout aside={aside}>
        <StateMessage loading={loading} error={error} empty={data && data.length === 0} emptyText="No links published yet." />
        {groups.map((g) => (
          <section className="block links__group" id={`links-${g.name.toLowerCase()}`} key={g.name}>
            <Prompt path={`links/${g.name.toLowerCase()}`} />
            <div className="grid grid--compact">
              {g.items.map((l) => <LinkCard key={l.id} {...l} />)}
            </div>
          </section>
        ))}
      </PageLayout>
    </>
  )
}
