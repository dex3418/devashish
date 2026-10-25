export default function AnchorIndex({ items }) {
  return (
    <ul className="aside__links">
      {items.map((i) => <li key={i.id}><a href={`#${i.id}`}>{i.label}</a></li>)}
    </ul>
  )
}
