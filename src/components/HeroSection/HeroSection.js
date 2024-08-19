import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import backgroundImage from '../../images/background.png'; // Importing the background image

const HeroSection = () => {
  return (
    <Box 
      sx={{ 
        position: 'relative', 
        width: '100vw',  // Ensures the width covers the entire viewport
        height: '100vh', // Ensures the height covers the entire viewport
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        color: '#fff', 
        textAlign: 'center',
        overflow: 'hidden' // Prevents any scrolling issues
      }}
    >
      <Box 
        sx={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          backgroundColor: 'rgba(0, 0, 0, 0.5)' // Overlay color with transparency
        }} 
      />
      <Box 
        sx={{ 
          zIndex: 1, 
          px: 3 
        }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{ fontSize: { xs: '2.5rem', md: '4rem' } }} // Responsive font size
        >
          SHERIFF'S CLASSICAL 
        </Typography>
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom
          sx={{ fontSize: { xs: '1.5rem', md: '3rem' } }} // Responsive font size
        >
          CUTZ INC.
        </Typography>
        <Button 
          component={Link} 
          to="/appointment" 
          variant="contained" 
          color="primary" 
          sx={{ mt: 4, fontSize: { xs: '1rem', md: '1.25rem' }, padding: { xs: '8px 16px', md: '12px 24px' } }} // Responsive button size
        >
          Book Now
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
