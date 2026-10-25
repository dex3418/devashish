// Alternates image left and right down the page (see .feature:nth-child(even) in pages.css).
export default function FeatureRow({ title, description, image, link }) {
  return (
    <article className={`feature glass ${image ? "" : "feature--noimg"}`}>
      {image && <img className="feature__img" src={image} alt={title} loading="lazy" />}
      <div className="feature__body">
        <h2 className="feature__title">{title}</h2>
        {description && <p className="feature__text">{description}</p>}
        {link && <a className="feature__link" href={link} target="_blank" rel="noreferrer">Learn more</a>}
      </div>
    </article>
  )
}
