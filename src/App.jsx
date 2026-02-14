import { Route, Routes } from "react-router-dom"
import Portfolio from "./pages/Portfolio"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Skills from "./pages/skills"
import ProfessionalJourney from "./pages/ProfessionalJourney"



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/education" element={<ProfessionalJourney />} />
    </Routes>
      
    </>
  )
}

export default App
