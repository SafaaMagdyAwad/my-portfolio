import { Route, Routes } from "react-router-dom"
import Portfolio from "./pages/Portfolio"
import Projects from "./pages/Projects"
import FeaturedProject from "./pages/FeaturedProject"
import SkillsAndContact from "./pages/SkillsAndContact"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<SkillsAndContact />} />
    </Routes>
      
    </>
  )
}

export default App
