import { terminal } from "../../data/home.js"

export default function Terminal() {
  return (
    <div className="term glass" role="img" aria-label="Terminal showing Devashish Markam, founder of Novaforge Labs and Vouchr">
      <div className="term__bar">
        <span className="term__dot" style={{ background: "var(--vouchr-magenta)" }} />
        <span className="term__dot" style={{ background: "var(--vouchr-green)" }} />
        <span className="term__dot" style={{ background: "var(--vouchr-cyan)" }} />
        <span className="term__title">devashish@portfolio</span>
      </div>
      <div className="term__body">
        {terminal.map((l, i) =>
          l.prompt ? (
            <p className="term__line" style={{ "--i": i }} key={i}>
              <span className="term__path">~</span> <span className="term__sign">$</span> {l.text}
            </p>
          ) : (
            <p className="term__line term__out" style={{ "--i": i }} key={i}>{l.text}</p>
          )
        )}
        <p className="term__line" style={{ "--i": terminal.length }}>
          <span className="term__path">~</span> <span className="term__sign">$</span> <span className="term__cursor" />
        </p>
      </div>
    </div>
  )
}
