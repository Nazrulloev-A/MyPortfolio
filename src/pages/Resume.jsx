import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Fade,
  Slide,
  Fab,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ResumePage = () => {
  const resumeUrl = '/resume.pdf'; // Path to your resume PDF in the public folder
  const [showScroll, setShowScroll] = React.useState(false);

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
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<DownloadIcon />}
            href={resumeUrl}
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

      {/* PDF Viewer */}
      <Fade in={true} timeout={2000}>
        <Box
          sx={{
            height: '80vh',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 3,
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <iframe
            src={resumeUrl}
            title="Resume Preview"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </Box>
      </Fade>

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