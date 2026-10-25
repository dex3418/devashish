import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Services from './pages/Services.jsx'
import Initiatives from './pages/Initiatives.jsx'
import Articles from './pages/Articles.jsx'
import ArticleDetail from './pages/ArticleDetail.jsx'
import Team from './pages/Team.jsx'
import Resume from './pages/Resume.jsx'
import Links from './pages/Links.jsx'
import NotFound from './pages/NotFound.jsx'

// Each new page = one file in /pages + one <Route> here.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticleDetail />} />
        <Route path="/team" element={<Team />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/links" element={<Links />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
