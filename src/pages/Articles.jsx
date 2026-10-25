import Seo from "../components/seo/Seo.jsx"
import { useState } from "react"
import PageHeader from "../components/ui/PageHeader.jsx"
import StateMessage from "../components/ui/StateMessage.jsx"
import PageLayout from "../components/layout/PageLayout.jsx"
import { Aside, AsideSection } from "../components/ui/Aside.jsx"
import FilterList from "../components/ui/FilterList.jsx"
import RelatedLinks from "../components/ui/RelatedLinks.jsx"
import SocialLinks from "../components/ui/SocialLinks.jsx"
import ArticleRow from "../components/articles/ArticleRow.jsx"
import { useNotion } from "../data/useNotion.js"

export default function Articles() {
  const { data, loading, error } = useNotion("/api/articles")
  const [type, setType] = useState("All")

  const list = data || []
  const types = [...new Set(list.map((a) => a.type).filter(Boolean))]
  const options = [{ label: "All", count: list.length }, ...types.map((t) => ({ label: t, count: list.filter((a) => a.type === t).length }))]
  const shown = list.filter((a) => type === "All" || a.type === type)

  const aside = (
    <Aside mobile={types.length > 1}>
      {types.length > 1 && (
        <AsideSection title="Filter by type">
          <FilterList options={options} value={type} onChange={setType} />
        </AsideSection>
      )}
      <AsideSection title="More pages" extra>
        <RelatedLinks links={[{ to: "/projects", label: "Projects" }, { to: "/initiatives", label: "Initiatives" }]} />
      </AsideSection>
      <AsideSection title="Elsewhere" extra>
        <SocialLinks />
      </AsideSection>
    </Aside>
  )

  return (
    <>
      <Seo title="Articles" description="Articles and notes from Devashish Markam on hands-on tech education and local talent in Dantewada, Chhattisgarh." />
      <PageHeader path="articles" title="Articles" text="Notes and posts from the work." />
      <PageLayout aside={aside}>
        <StateMessage loading={loading} error={error} empty={data && data.length === 0} emptyText="No articles published yet." />
        {shown.length > 0 && (
          <div className="rows glass">
            {shown.map((a) => <ArticleRow key={a.id} {...a} />)}
          </div>
        )}
      </PageLayout>
    </>
  )
}
