import { Container, Grid2, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
      <Grid2 container spacing={4} alignItems="center">
        <Grid2 item xs={12} md={6}>
          <Typography variant="h2" gutterBottom>
            Hello, I'm Amrullo Nazrulloev
          </Typography>
          <Typography variant="h3" color="primary" gutterBottom>
            SOFTWARE ENGINEER IN TEST (SDET)
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          
          <Button 
            variant="contained" 
            color="primary" 
            component={Link}
            to="/contact"
            sx={{ mr: 2 }}
          >
            Hire Me
          </Button>
          
          <Button 
            variant="outlined" 
            color="primary"
            component="a"
            href="/resume.pdf"
          >
            Resume
          </Button>
        </Grid2>
        
        <Grid2 item xs={12} md={6}>
          {/* Add your image here */}
          <img src="/profile.png" alt="Profile" style={{ maxWidth: '100%' }} />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Home;