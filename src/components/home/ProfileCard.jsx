import Avatar from "../ui/Avatar.jsx"
import SocialLinks from "../ui/SocialLinks.jsx"
import { hero } from "../../data/home.js"

export default function ProfileCard() {
  return (
    <div className="id glass">
      <div className="id__top">
        <Avatar name={hero.name} />
        <div>
          <h2 className="id__name">{hero.name}</h2>
          <p className="id__role">{hero.role}</p>
          <p className="id__place">{hero.place}</p>
        </div>
      </div>
      <SocialLinks />
    </div>
  )
}
