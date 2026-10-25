import StatusChip from "../ui/StatusChip.jsx"

export default function ProjectCard({ title, description, image, link, status, team = [], featured }) {
  return (
    <article className={`project glass ${featured ? "project--featured" : ""}`}>
      {image && <img className="project__img" src={image} alt={title} loading="lazy" />}
      <div className="project__body">
        <div className="project__head">
          <h3 className="project__title">{title}</h3>
          <StatusChip status={status} />
        </div>
        {description && <p className="project__text">{description}</p>}
        {team.length > 0 && <p className="project__team">{team.map((m) => m.name).join(", ")}</p>}
        {link && <a className="project__link" href={link} target="_blank" rel="noreferrer">Open project</a>}
      </div>
    </article>
  )
}
