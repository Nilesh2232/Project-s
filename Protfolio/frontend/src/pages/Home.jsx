import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import About from '../components/sections/About'
import Certificates from '../components/sections/Certificates'
import Contact from '../components/sections/Contact'
import Education from '../components/sections/Education'
import Experience from '../components/sections/Experience'
import FeaturedProject from '../components/sections/FeaturedProject'
import Hero from '../components/sections/Hero'
import OtherProjects from '../components/sections/OtherProjects'
import Skills from '../components/sections/Skills'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [location])

  return (
    <>
      <Hero />
      <About />
      <FeaturedProject />
      <OtherProjects />
      <Experience />
      <Skills />
      <Certificates />
      <Education />
      <Contact />
    </>
  )
}
