import { Container, Grid2, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'; // Import TypeAnimation
import PortfoiloImg from '../assets/profile.jpg';

const Home = () => {
  return (
    <Container 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid2 container spacing={4} alignItems="center">
        {/* Text Content (Left Side) */}
        <Grid2 item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h2" gutterBottom>
              Hello, I'm Amrullo Nazrulloev
            </Typography>
            
            {/* Typing Animation */}
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000, // Display duration
                'Business Automation Developer',
                2000,
              
              ]}
              speed={50}
              deletionSpeed={50}
              repeat={Infinity}
              style={{ 
                fontSize: '1.5rem', 
                color: '#1A73E8', 
                fontWeight: 600,
                display: 'block',
                marginBottom: '16px' 
              }}
            />

            <Typography variant="body1" paragraph>
             

            </Typography>
            
            <Button 
              variant="contained" 
              color="primary" 
              component={Link}
              to="/contact"
              sx={{ mr: 2 }}
            >
              Contact Me
            </Button>
            
            <Button 
              variant="outlined" 
              color="primary"
              component="a"
              href="/resume.pdf"
            >
              Resume
            </Button>
          </motion.div>
        </Grid2>

        {/* Image (Right Side) */}
        <Grid2 item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Box
              sx={{
                borderRadius: '50%',
                overflow: 'hidden',
                width: '400px',
                height: '400px',
                boxShadow: 3,
                border: '4px solid',
                borderColor: 'primary.main',
              }}
            >
              <img 
                src={PortfoiloImg} 
                alt="Profile" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                }} 
              />
            </Box>
          </motion.div>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Home;