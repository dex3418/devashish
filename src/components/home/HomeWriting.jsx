import SectionHead from "../ui/SectionHead.jsx"
import ArticleRow from "../articles/ArticleRow.jsx"
import { useNotion } from "../../data/useNotion.js"

export default function HomeWriting() {
  const { data } = useNotion("/api/articles")
  if (!data || data.length === 0) return null
  return (
    <section className="block">
      <SectionHead path="articles" title="Latest writing" to="/articles" />
      <div className="rows glass">
        {data.slice(0, 3).map((a) => <ArticleRow key={a.id} {...a} />)}
      </div>
    </section>
  )
}
