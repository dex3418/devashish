// Terminal-style prompt line, used above section and page titles.
export default function Prompt({ path, cmd = "ls" }) {
  return (
    <p className="prompt">
      <span className="prompt__path">~/{path}</span> <span className="prompt__sign">$</span> <span className="prompt__cmd">{cmd}</span>
    </p>
  )
}
