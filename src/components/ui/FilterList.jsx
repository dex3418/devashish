export default function FilterList({ options, value, onChange }) {
  return (
    <ul className="filterlist">
      {options.map((o) => (
        <li key={o.label}>
          <button type="button" aria-pressed={value === o.label} onClick={() => onChange(o.label)}>
            <span>{o.label}</span>
            <span className="filterlist__count">{o.count}</span>
          </button>
        </li>
      ))}
    </ul>
  )
}
