export function monthYear(iso) {
  if (!iso) return ""
  return new Date(iso).toLocaleDateString("en-IN", { month: "short", year: "numeric" })
}

export function fullDate(iso) {
  if (!iso) return ""
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
}
