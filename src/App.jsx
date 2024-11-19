import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectSection from './components/ProjectSection'
import Service from './components/Service'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Title/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectSection/>
      <Service/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App
