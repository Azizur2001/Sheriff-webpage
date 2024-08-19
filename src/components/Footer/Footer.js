import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4, 
        backgroundColor: 'primary.main', 
        color: 'primary.contrastText', 
        textAlign: 'center' 
      }}
    >
      <Container maxWidth="md">
        {/* Uncomment and update the navigation section if you want to include it */}
        {/* <Box 
          component="nav" 
          sx={{ mb: 2 }}
        >
          <Box 
            component="ul" 
            sx={{ 
              listStyle: 'none', 
              display: 'flex', 
              justifyContent: 'center', 
              p: 0 
            }}
          >
            <Box component="li" sx={{ mx: 1 }}>
              <Link href="/" color="inherit" underline="none">
                Home
              </Link>
            </Box>
            <Box component="li" sx={{ mx: 1 }}>
              <Link href="/about" color="inherit" underline="none">
                About
              </Link>
            </Box>
            <Box component="li" sx={{ mx: 1 }}>
              <Link href="/services" color="inherit" underline="none">
                Services
              </Link>
            </Box>
            <Box component="li" sx={{ mx: 1 }}>
              <Link href="/gallery" color="inherit" underline="none">
                Gallery
              </Link>
            </Box>
            <Box component="li" sx={{ mx: 1 }}>
              <Link href="/testimonials" color="inherit" underline="none">
                Testimonials
              </Link>
            </Box>
            <Box component="li" sx={{ mx: 1 }}>
              <Link href="/contact" color="inherit" underline="none">
                Contact
              </Link>
            </Box>
          </Box>
        </Box> */}
        <Typography variant="body2">
          © 2024 BarberShop. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
