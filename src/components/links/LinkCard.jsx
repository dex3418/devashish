export default function LinkCard({ title, slug, image, category }) {
  return (
    <a className="card glass card--link" href={`/go/${slug}`} target="_blank" rel="noopener sponsored">
      {image && <img className="card__img card__img--small" src={image} alt="" loading="lazy" />}
      <div className="card__body">
        {category && <p className="card__meta">{category}</p>}
        <h2 className="card__title">{title}</h2>
      </div>
    </a>
  )
}
