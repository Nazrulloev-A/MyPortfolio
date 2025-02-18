import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Fade,
  Slide,
  Fab,
  LinearProgress,
  useScrollTrigger
} from '@mui/material';
import { Link } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import Resume from '../assets/resume.pdf';
const ResumePage = () => {
  
  const [showScroll, setShowScroll] = React.useState(false);
  const ResumeUrl = './public/resume.pdf';

  // Skills data
  const skills = [
    { name: 'React', value: 90 },
    { name: 'JavaScript', value: 85 },
    { name: 'Node.js', value: 80 },
    { name: 'Material-UI', value: 88 },
  ];

  // Scroll to top logic
  const checkScrollTop = () => {
    setShowScroll(window.pageYOffset > 400);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>


      {/* Download Button */}
      <Slide in={true} direction="up" timeout={1500}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<DownloadIcon />}
            href={ResumeUrl}
            download="Amrullo_Nazrulloev_Resume.pdf"
            sx={{
              fontSize: '1.2rem',
              py: 2,
              px: 6,
              '&:hover': { transform: 'scale(1.05)' },
              transition: 'transform 0.3s ease',
            }}
          >
            Download Resume
          </Button>
        </Box>
      </Slide>

      {/* Skills Section */}
      <Fade in={true} timeout={2000}>
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
            Technical Skills
          </Typography>
          {skills.map((skill, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="h6">{skill.name}</Typography>
                <Typography variant="body2">{skill.value}%</Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={skill.value}
                sx={{ height: 10, borderRadius: 5 }}
              />
            </Box>
          ))}
        </Box>
      </Fade>

      {/* Contact Section */}
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Let's Connect
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
          <Button
            variant="outlined"
            startIcon={<EmailIcon />}
            href="mailto:your.email@example.com"
            sx={{ px: 4 }}
          >
            Email
          </Button>
          <Button
            variant="outlined"
            startIcon={<LinkedInIcon />}
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            sx={{ px: 4 }}
          >
            LinkedIn
          </Button>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href="https://github.com/your-profile"
            target="_blank"
            sx={{ px: 4 }}
          >
            GitHub
          </Button>
        </Box>
      </Box>

      {/* Scroll to Top Button */}
      {showScroll && (
        <Fab
          color="primary"
          onClick={scrollToTop}
          sx={{ position: 'fixed', bottom: 32, right: 32 }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </Container>
  );
};

export default ResumePage;