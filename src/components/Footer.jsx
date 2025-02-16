import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { Instagram, WhatsApp, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 3,
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        width: '100%'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3
          }}
        >
          Social Links
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton 
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/amrullo-nazrulloev-5b5b9a17a/" 
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <LinkedIn fontSize="large" />
            </IconButton>

            {/* <IconButton 
              aria-label="LinkdIn"
              href="" 
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <WhatsApp fontSize="large" />
            </IconButton>


            <IconButton 
              aria-label="Instagram"
              href="https://instagram.com/yourinstagram" 
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <Instagram fontSize="large" />
            </IconButton> */}



          </Box>

          {/* Copyright */}
          <Typography variant="body1" component="div">
            © {currentYear} Amrullo Nazrulloev | All rights reserved
          </Typography>

          {/* Additional Links */}
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              href="/privacy"
              color="inherit"
              underline="hover"
              variant="body1"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              color="inherit"
              underline="hover"
              variant="body1"
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;