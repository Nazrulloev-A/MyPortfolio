import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Works from './pages/Works'
import Resume from './pages/Resume'
import Contact from './pages/Contacts'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/works" element={<Works />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Add redirect for any unknown paths */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App