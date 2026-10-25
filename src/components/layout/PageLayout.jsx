// Main column plus a sticky side panel on wide screens. On phones the panel moves above the content.
export default function PageLayout({ aside, children }) {
  return (
    <div className="with-aside">
      <div className="with-aside__main">{children}</div>
      {aside}
    </div>
  )
}
