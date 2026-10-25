import { Link } from "react-router-dom"
import Seo from "../components/seo/Seo.jsx"

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" noindex />
      <section className="glass" style={{ padding: "40px 28px" }}>
      <h1 style={{ margin: "0 0 8px" }}>Page not found</h1>
      <p style={{ color: "var(--text-dim)", marginTop: 0 }}>This page does not exist or has been removed.</p>
      <Link to="/" className="btn btn--primary">Go home</Link>
      </section>
    </>
  )
}
