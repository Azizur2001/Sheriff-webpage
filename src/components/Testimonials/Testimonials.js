// import React, { useEffect, useState } from 'react';
// import { db } from '../../firebase';
// import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
// import { Container, Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
// import StarIcon from '@mui/icons-material/Star';
// import backgroundImage from '../../images/barbertools.png'; // Importing the background image

// const Testimonials = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const reviewLimit = 4; // Set the limit for the number of reviews displayed

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       const q = query(collection(db, 'testimonials'), orderBy('timestamp', 'desc'), limit(reviewLimit));
//       const querySnapshot = await getDocs(q);
//       const testimonialsList = querySnapshot.docs.map(doc => doc.data());
//       setTestimonials(testimonialsList);
//     };
//     fetchTestimonials();
//   }, []);

//   return (
//     <Box
//       sx={{
//         minHeight: '85vh', // Ensure the background image covers the full page height
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         py: 8,
//         px: 2,
//         width: '100%', // Ensures the width covers the full screen
//       }}
//     >
//       <Container 
//         maxWidth={false} // Disable maxWidth to let the content expand fully
//         sx={{ 
//           textAlign: 'center', 
//           backgroundColor: 'rgba(255, 255, 255, 0.85)', 
//           padding: { xs: 4, md: 6 }, 
//           borderRadius: 2, 
//           boxShadow: 3,
//           mx: 2, // Horizontal margin to ensure slight padding on smaller screens
//         }}
//       >
//         <Typography 
//           variant="h4" 
//           component="h1" 
//           gutterBottom
//           sx={{ mb: 4, fontWeight: 'bold' }}
//         >
//           Client Testimonials
//         </Typography>
//         <Grid container spacing={4}>
//           {testimonials.map((testimonial, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index} sx={{ mb: 2 }}>  {/* Add bottom margin */}
//               <Card 
//                 sx={{ 
//                   height: '100%', 
//                   display: 'flex', 
//                   flexDirection: 'column', 
//                   justifyContent: 'space-between', 
//                   boxShadow: 3, 
//                   p: 2
//             }}
//               >
//                 <CardContent>
//                   <Typography 
//                     variant="h6" 
//                     component="h2" 
//                     gutterBottom
//                     sx={{ fontWeight: 'bold' }}
//                   >
//                     {testimonial.name}
//                   </Typography>
//                   <Typography 
//                     variant="body1" 
//                     sx={{ mb: 10 }}
//                   >
//                     {testimonial.review}
//                   </Typography>
//                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                     {Array.from({ length: testimonial.rating }).map((_, i) => (
//                       <StarIcon key={i} sx={{ color: 'gold' }} />
//                     ))}
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//         <Box sx={{ mt: 2 }}>
//           <Button 
//             href="/submit-review" 
//             variant="contained" 
//             color="primary"
//           >
//             Leave a Review
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Testimonials;




import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { Container, Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import backgroundImage from '../../images/barbertools.png'; // Importing the background image

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const reviewLimit = 4; // Set the limit for the number of reviews displayed

  useEffect(() => {
    const fetchTestimonials = async () => {
      const q = query(collection(db, 'testimonials'), orderBy('timestamp', 'desc'), limit(reviewLimit));
      const querySnapshot = await getDocs(q);
      const testimonialsList = querySnapshot.docs.map(doc => doc.data());
      setTestimonials(testimonialsList);
    };
    fetchTestimonials();
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh', // Ensure the background image covers the full page height
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        px: 2,
        width: '100%', // Ensures the width covers the full screen
      }}
    >
      <Container 
        maxWidth="md" 
        sx={{ 
          textAlign: 'center', 
          backgroundColor: 'rgba(255, 255, 255, 0.85)', 
          padding: { xs: 3, md: 5 }, 
          borderRadius: 4, 
          boxShadow: 3,
          overflowY: 'auto', // Allow scrolling within the container if content overflows
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          sx={{ mb: 4, fontWeight: 'bold', fontSize: { xs: '1.75rem', md: '2rem' } }} // Adjust font size for better visibility on mobile
        >
          Client Testimonials
        </Typography>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ mb: 2 }}>  {/* Add bottom margin */}
              <Card 
                sx={{ 
                  height: '90%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between', 
                  boxShadow: 3, 
                  p: 2
                }}
              >
                <CardContent>
                  <Typography 
                    variant="h6" 
                    component="h2" 
                    gutterBottom
                    sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.25rem' } }} // Adjust for readability on mobile
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }} // Adjusted for readability on mobile
                  >
                    {testimonial.review}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <StarIcon key={i} sx={{ color: 'gold', fontSize: { xs: '1rem', md: '1.5rem' } }} /> // Adjusted star size
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Button 
            href="/submit-review" 
            variant="contained" 
            color="primary"
            sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }} // Adjust button text size
          >
            Leave a Review
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;

