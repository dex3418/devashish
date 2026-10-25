import Seo from "../components/seo/Seo.jsx"
import Hero from "../components/home/Hero.jsx"
import Statement from "../components/home/Statement.jsx"
import VentureSplit from "../components/home/VentureSplit.jsx"
import HomeProjects from "../components/home/HomeProjects.jsx"
import HomeServices from "../components/home/HomeServices.jsx"
import HomeWriting from "../components/home/HomeWriting.jsx"
import MoreLinks from "../components/home/MoreLinks.jsx"

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <Statement />
      <VentureSplit />
      <HomeProjects />
      <HomeServices />
      <HomeWriting />
      <MoreLinks />
    </>
  )
}
