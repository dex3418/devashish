// Shows loading, empty and error states for any list page.
export default function StateMessage({ loading, error, empty, emptyText }) {
  if (loading) return <p className="state glass">Loading…</p>
  if (error) return <p className="state glass">Could not load this section. Refresh to try again.</p>
  if (empty) return <p className="state glass">{emptyText || "Nothing here yet."}</p>
  return null
}
