export default function TeamCard({ name, role, photo, bio, social }) {
  return (
    <article className="card glass card--person">
      {photo ? <img className="person__photo" src={photo} alt={name} loading="lazy" /> : <div className="person__photo person__photo--empty" aria-hidden="true">{name.charAt(0)}</div>}
      <h2 className="card__title">{name}</h2>
      {role && <p className="card__meta">{role}</p>}
      {bio && <p className="card__text">{bio}</p>}
      {social && <a className="card__link" href={social} target="_blank" rel="noreferrer">Profile</a>}
    </article>
  )
}
