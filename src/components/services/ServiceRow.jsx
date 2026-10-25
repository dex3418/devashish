export default function ServiceRow({ title, description, price }) {
  return (
    <article className="row-item">
      <h3 className="row__title">{title}</h3>
      <p className="row__text">{description}</p>
      {price && <span className="row__meta">{price}</span>}
    </article>
  )
}
