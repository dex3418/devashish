// Side panel. Set `mobile` when it holds filters or an index that should stay visible above the content on phones.
export function Aside({ mobile, children }) {
  return <aside className={`aside glass ${mobile ? "" : "aside--desktop"}`}>{children}</aside>
}

// `extra` sections are hidden on phones to keep the page short.
export function AsideSection({ title, extra, children }) {
  return (
    <section className={`aside__section ${extra ? "aside__section--extra" : ""}`}>
      {title && <h2 className="aside__title">{title}</h2>}
      {children}
    </section>
  )
}
