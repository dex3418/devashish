const COLORS = {
  Live: "var(--vouchr-green)",
  "In Progress": "var(--cyan)",
  Planned: "var(--text-dim)",
}

export default function StatusChip({ status }) {
  if (!status) return null
  return (
    <span className="chip">
      <span className="chip__dot" style={{ background: COLORS[status] || "var(--text-dim)" }} />
      {status}
    </span>
  )
}
