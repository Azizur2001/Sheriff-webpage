import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const ContactUs = () => {
  return (
    <Box 
      id="contact" 
      sx={{ 
        py: { xs: 4, md: 8 }, 
        backgroundColor: 'background.default', 
        textAlign: 'center' 
      }}
    >
      <Container maxWidth="md">
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
          sx={{ 
            fontWeight: 'bold', 
            mb: { xs: 2, md: 4 } 
          }}
        >
          Contact Us
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 2, md: 4 } 
          }}
        >
          Contact form and location information.
        </Typography>
      </Container>
    </Box>
  );
};

export default ContactUs;
