import CircuitSet from "./CircuitSet.jsx"
import { buildSet } from "./circuitGen.js"

// Loose circuit traces (not a tiled pattern). A landscape set for wide screens and a
// separate portrait set for phones. Traces that would touch or overlap are skipped.
const WIDE_HAND = [
  "M1200 60 H1040 L1000 100 V180 L960 220 H820",
  "M1200 140 H1110 L1080 170 V260 H930 L900 290",
  "M980 0 V40 L940 80 H860",
  "M880 220 V300 L850 330 H760",
  "M0 200 H90 L120 230 V300",
  "M0 700 H110 L150 740 V820 L190 860 H320",
  "M200 900 V850 L240 810 H380 L410 780",
  "M1200 760 H1130 L1100 790 V860 H1020",
]

const TALL_HAND = [
  "M400 70 H330 L300 100 V170 L270 200 H200",
  "M320 0 V30 L290 60 H230",
  "M0 330 H50 L80 360 V430 L110 460 H170",
  "M0 620 H70 L100 650 V720 L130 750 H230",
  "M400 560 H350 L325 585 V650 H280",
  "M140 800 V770 L170 740 H270 L295 715",
]

const WIDE = { viewBox: "0 0 1200 900", ...buildSet({ hand: WIDE_HAND, seed: 7, w: 1200, h: 900, count: 18, gap: 18 }) }
const TALL = { viewBox: "0 0 400 800", ...buildSet({ hand: TALL_HAND, seed: 11, w: 400, h: 800, count: 15, gap: 16 }) }

export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__glow" />
      <CircuitSet className="bg__traces--wide" {...WIDE} />
      <CircuitSet className="bg__traces--tall" {...TALL} />
    </div>
  )
}
