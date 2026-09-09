import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import SkillsMarquee from './components/SkillsMarquee'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'



function App() {
  return (
    <main className="bg-[#020617]">
     <CustomCursor />
    <Header />
    <Hero />
    <About />
    <SkillsMarquee />
    <Projects/>
    <Contact/>
    <Footer/>
    </main>
  )
}

export default App