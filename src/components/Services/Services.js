import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import backgroundImage from '../../images/barbertools.png'; // Importing the background image

const ServicesComponent = () => {
  const services = [
    { name: 'Signature Haircut', price: '$25' },
    { name: 'Haircut', price: '$20' },
    { name: 'Beard Shaving', price: '$15' },
    { name: 'Beard Trim', price: '$15' },
    { name: 'Cut & Shave', price: '$30' },
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        minHeight: '85vh', // Ensure the section covers the full height of the viewport
        width: '100%', // Ensure the section covers the full width
        py: { xs: 4, md: 8 }, 
        px: { xs: 2, md: 4 }, 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        color: '#fff', // Ensure text is visible against the background
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
          sx={{ mb: { xs: 4, md: 6 }, fontWeight: 'bold', fontSize: { xs: '2rem', md: '4.5rem' } }}
        >
          SERVICES
        </Typography>
        <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
          {services.map((service, index) => (
            <Grid 
              item 
              xs={12} 
              sm={12} 
              md={8} // Set to 12 columns on desktop to make it line by line
              key={index}
              sx={{ 
                mb: { xs: 2, md: 2 }, // Add margin between each service item
                width: '100%', // Ensure it takes up the full width of the container
              }}
            >
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  p: 2, 
                  border: '1px solid', 
                  borderColor: 'divider', 
                  borderRadius: 2, 
                  backgroundColor: 'rgba(255, 255, 255, 0.85)', // Semi-transparent background to ensure readability
                  boxShadow: 3, 
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  }
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                  {service.name}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                  {service.price}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesComponent;
