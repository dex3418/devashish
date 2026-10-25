import { useEffect, useRef, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"

// Main links stay in the bar. Less-used pages sit under "More".
const MAIN = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/articles", label: "Articles" },
  { to: "/resume", label: "Resume" },
]
const MORE = [
  { to: "/initiatives", label: "Initiatives" },
  { to: "/team", label: "Team" },
  { to: "/links", label: "Links" },
]

const cls = ({ isActive }) => `nav__link ${isActive ? "active" : ""}`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [more, setMore] = useState(false)
  const ref = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false); setMore(false) }, [pathname])
  useEffect(() => {
    const away = (e) => ref.current && !ref.current.contains(e.target) && setMore(false)
    const esc = (e) => e.key === "Escape" && setMore(false)
    document.addEventListener("pointerdown", away)
    document.addEventListener("keydown", esc)
    return () => { document.removeEventListener("pointerdown", away); document.removeEventListener("keydown", esc) }
  }, [])

  const moreActive = MORE.some((l) => pathname.startsWith(l.to))

  return (
    <nav className="nav glass glass--blur" aria-label="Main" ref={ref}>
      <NavLink to="/" className="nav__brand">dev<span>.</span></NavLink>
      <button className="nav__toggle" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>
      <ul className={`nav__links ${open ? "open" : ""}`}>
        {MAIN.map((l) => (
          <li key={l.to}><NavLink to={l.to} end={l.to === "/"} className={cls}>{l.label}</NavLink></li>
        ))}
        <li className="nav__more">
          <button className={`nav__link nav__morebtn ${moreActive ? "active" : ""}`} aria-expanded={more} aria-haspopup="true" onClick={() => setMore(!more)}>
            More <span aria-hidden="true">▾</span>
          </button>
          <ul className={`nav__sub ${more ? "open" : ""}`}>
            {MORE.map((l) => <li key={l.to}><NavLink to={l.to} className={cls}>{l.label}</NavLink></li>)}
          </ul>
        </li>
        {MORE.map((l) => (
          <li className="nav__flat" key={l.to}><NavLink to={l.to} className={cls}>{l.label}</NavLink></li>
        ))}
      </ul>
    </nav>
  )
}
