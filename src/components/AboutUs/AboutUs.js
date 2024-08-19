// import React from 'react';
// import { Container, Grid, Typography, Box } from '@mui/material';
// import aboutImage from '../../images/barber.png'; // Replace with the actual path to your image

// const AboutUs = () => {
//   return (
//     <Container 
//       maxWidth="lg" 
//       sx={{ 
//         mt: { xs: 2, md: 5 }, 
//         px: { xs: 2, sm: 3, md: 4 } 
//       }}
//     >
//       <Grid 
//         container 
//         spacing={{ xs: 2, md: 4 }} 
//         alignItems="center" 
//         justifyContent="center"
//       >
//         <Grid item xs={12} md={6}>
//           <Box 
//             component="img" 
//             src={aboutImage} 
//             alt="About Us" 
//             sx={{ 
//               width: '100%', 
//               height: 'auto', 
//               borderRadius: 2, 
//               boxShadow: 3 
//             }} 
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography 
//             variant="h4" 
//             component="h1" 
//             gutterBottom 
//             sx={{ 
//               textAlign: { xs: 'center', md: 'left' }, 
//               fontSize: { xs: '2rem', md: '2.5rem' } 
//             }}
//           >
//             OUR STORY
//           </Typography>
//           <Typography 
//             variant="body1" 
//             paragraph 
//             sx={{ 
//               fontSize: { xs: '1rem', md: '1.125rem' }, 
//               lineHeight: 1.6, 
//               textAlign: { xs: 'justify', md: 'left' }
//             }}
//           >
//             I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.
//           </Typography>
//           <Typography 
//             variant="body1" 
//             paragraph 
//             sx={{ 
//               fontSize: { xs: '1rem', md: '1.125rem' }, 
//               lineHeight: 1.6, 
//               textAlign: { xs: 'justify', md: 'left' } 
//             }}
//           >
//             I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me and you can start adding your own content and make changes to the font.
//           </Typography>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default AboutUs;


import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import aboutImage from '../../images/barber.png'; // Replace with the actual path to your image

const AboutUs = () => {
  return (
    <Container 
      maxWidth="xl" 
      sx={{ 
        mt: { xs: 4, md: 8 }, 
        px: { xs: 3, sm: 4, md: 6 }, 
        py: { xs: 4, md: 10 },
        backgroundColor: '#121212', // Optional: Adjust this for a better contrast with the text
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Grid 
        container 
        spacing={{ xs: 4, md: 8 }} 
        alignItems="center" 
        justifyContent="center"
      >
        <Grid item xs={12} md={5}>
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
        <Grid item xs={12} md={7}>
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom 
            sx={{ 
              textAlign: { xs: 'center', md: 'left' }, 
              fontSize: { xs: '2.5rem', md: '3rem' }, 
              color: '#fff', // Text color
            }}
          >
            OUR STORY
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              fontSize: { xs: '1.125rem', md: '1.25rem' }, 
              lineHeight: 1.7, 
              textAlign: { xs: 'justify', md: 'left' },
              color: '#ccc', // Text color
              mb: { xs: 4, md: 6 }, // Adjust bottom margin
            }}
          >
            I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double-click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              fontSize: { xs: '1.125rem', md: '1.25rem' }, 
              lineHeight: 1.7, 
              textAlign: { xs: 'justify', md: 'left' }, 
              color: '#ccc', // Text color
            }}
          >
            I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double-click me and you can start adding your own content and make changes to the font.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
