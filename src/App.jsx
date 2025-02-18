import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'; // Import Box from MUI for layout
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Works from './pages/Works';
import Resume from './pages/Resume';
import Contact from './pages/Contacts';
import Footer from './components/Footer'; // Ensure the correct path to Footer

function App() {
  return (
    <Router>
      {/* Flexbox container to make footer stick to the bottom */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // Full viewport height
        }}
      >
        <Navbar /> {/* Navbar at the top */}

        {/* Main content area that grows to fill available space */}
        <Box
          component="main"
          sx={{
            flexGrow: 1, // Allows content to grow and push footer down
            py: 3, // Add some padding for spacing
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/works" element={<Works />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add redirect for any unknown paths */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Box>

        <Footer /> {/* Footer at the bottom */}
      </Box>
    </Router>
  );
}

export default App;