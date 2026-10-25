import SocialLinks from "../ui/SocialLinks.jsx"

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Devashish Markam, Dantewada, Chhattisgarh</span>
      <SocialLinks />
    </footer>
  )
}
