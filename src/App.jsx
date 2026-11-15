import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Navigation from './components/Navigation'
import WorkSection from './components/WorkSection'
import './App.css'

function App() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Marquee />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}

export default App
