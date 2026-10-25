import Prompt from "./Prompt.jsx"

export default function PageHeader({ path, title, text }) {
  return (
    <header className="page-header">
      {path && <Prompt path={path} />}
      <h1 className="page-header__title">{title}</h1>
      {text && <p className="page-header__text">{text}</p>}
    </header>
  )
}
