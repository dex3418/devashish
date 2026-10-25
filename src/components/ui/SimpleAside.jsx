import { Aside, AsideSection } from "./Aside.jsx"
import RelatedLinks from "./RelatedLinks.jsx"
import SocialLinks from "./SocialLinks.jsx"

export default function SimpleAside({ links }) {
  return (
    <Aside>
      <AsideSection title="More pages" extra>
        <RelatedLinks links={links} />
      </AsideSection>
      <AsideSection title="Elsewhere" extra>
        <SocialLinks />
      </AsideSection>
    </Aside>
  )
}
