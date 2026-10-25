import { Link } from "react-router-dom"
import { fullDate } from "../../data/format.js"

// A dated line in a list. Only a link when the article has a slug.
export default function ArticleRow({ title, slug, type, summary, date }) {
  const inner = (
    <>
      <span className="row__date">{fullDate(date)}</span>
      <div>
        <h3 className="row__title">{title}</h3>
        {summary && <p className="row__text">{summary}</p>}
      </div>
      {type && <span className="row__meta">{type}</span>}
    </>
  )
  return slug ? (
    <Link to={`/articles/${slug}`} className="row-item row-item--article row-item--link">{inner}</Link>
  ) : (
    <article className="row-item row-item--article">{inner}</article>
  )
}
