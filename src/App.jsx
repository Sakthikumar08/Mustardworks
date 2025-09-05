// App.jsx
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import ProjectSubmission from './pages/ProjectSubmission'
import Footer from './components/Footer'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  return (
    <div className="App">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <Home setCurrentSection={setCurrentSection} />
      <About setCurrentSection={setCurrentSection} />
      <Gallery setCurrentSection={setCurrentSection} />
      <Contact setCurrentSection={setCurrentSection} />
      <ProjectSubmission setCurrentSection={setCurrentSection} />
      <Footer />
    </div>
  )
}

export default App