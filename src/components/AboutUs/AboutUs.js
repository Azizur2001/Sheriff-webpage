// import React from 'react';
// import './AboutUs.css'; // Make sure to create and link the CSS file
// import aboutImage from '../../images/barber.png'; // Replace with the actual path to your image

// const AboutUs = () => {
//   return (
//     <div className="about-container">
//       <div className="about-image">
//         <img src={aboutImage} alt="About Us" />
//       </div>
//       <div className="about-text">
//         <h1>OUR STORY</h1>
//         <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.</p>
//         <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me and you can start adding your own content and make changes to the font.</p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;


import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import aboutImage from '../../images/barber.png'; // Replace with the actual path to your image

const AboutUs = () => {
  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        mt: { xs: 2, md: 5 }, 
        px: { xs: 2, sm: 3, md: 4 } 
      }}
    >
      <Grid 
        container 
        spacing={{ xs: 2, md: 4 }} 
        alignItems="center" 
        justifyContent="center"
      >
        <Grid item xs={12} md={6}>
          <Box 
            component="img" 
            src={aboutImage} 
            alt="About Us" 
            sx={{ 
              width: '100%', 
              height: 'auto', 
              borderRadius: 2, 
              boxShadow: 3 
            }} 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom 
            sx={{ 
              textAlign: { xs: 'center', md: 'left' }, 
              fontSize: { xs: '2rem', md: '2.5rem' } 
            }}
          >
            OUR STORY
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              fontSize: { xs: '1rem', md: '1.125rem' }, 
              lineHeight: 1.6, 
              textAlign: { xs: 'justify', md: 'left' }
            }}
          >
            I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              fontSize: { xs: '1rem', md: '1.125rem' }, 
              lineHeight: 1.6, 
              textAlign: { xs: 'justify', md: 'left' } 
            }}
          >
            I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me and you can start adding your own content and make changes to the font.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
