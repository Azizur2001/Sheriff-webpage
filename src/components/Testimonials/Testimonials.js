import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { Container, Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import backgroundImage from '../../images/barbertools.png';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const reviewLimit = 20; // Increased the limit for more reviews

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
        minHeight: '85vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
        px: 2,
        overflow: 'hidden', // Ensure the content does not overflow
        width: '100%',
      }}
    >
      <Container 
        maxWidth={false}
        sx={{ 
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: { xs: 4, md: 6 },
          borderRadius: 2,
          boxShadow: 3,
          mx: 2,
          position: 'relative',
          overflow: 'hidden', // Hide overflow content
          whiteSpace: 'nowrap', // Prevent wrapping of cards
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          sx={{ mb: 4, fontWeight: 'bold' }}
        >
          Client Reviews
        </Typography>
        <Box
          sx={{
            display: 'inline-block',
            whiteSpace: 'nowrap',
            animation: 'slideLeft 30s linear infinite', // Animation for sliding left
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              sx={{ 
                display: 'inline-block',
                mx: 2,
                width: '250px',
                height: '300px',
                verticalAlign: 'top',
                boxShadow: 3, 
                p: 2,
                textAlign: 'left',
              }}
            >
              <CardContent>
                <Typography 
                  variant="h6" 
                  component="h2" 
                  gutterBottom
                  sx={{ fontWeight: 'bold' }}
                >
                  {testimonial.name}
                </Typography>
                <Typography 
                  variant="body1"
                  className="typography-review-text" // Add this class for word wrapping
                  sx={{ mb: 2 }}
                >
                  {testimonial.review}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon key={i} sx={{ color: 'gold' }} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button 
            href="/submit-review" 
            variant="contained" 
            color="primary"
          >
            Leave a Review
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;

