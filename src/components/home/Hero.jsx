import ProfileCard from "./ProfileCard.jsx"
import Terminal from "./Terminal.jsx"

// Top of Home: profile picture card with the terminal beside it.
export default function Hero() {
  return (
    <section className="intro">
      <ProfileCard />
      <Terminal />
    </section>
  )
}
