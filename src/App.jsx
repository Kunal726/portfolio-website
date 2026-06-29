import { useEffect } from 'react'
import data from './data/portfolio.json'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    document.title = `${data.name} — ${data.role}`
  }, [])

  return (
    <div className="min-h-screen bg-base text-slate-200">
      <Navbar data={data} />
      <main>
        <Hero data={data} />
        <About data={data} />
        <Experience items={data.experience} />
        <Education items={data.education} />
        <Projects items={data.projects} />
        <Certificates items={data.certificates} />
        <Contact data={data} />
      </main>
      <Footer data={data} />
    </div>
  )
}
