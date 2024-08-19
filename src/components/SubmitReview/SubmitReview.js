import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Container, TextField, Button, Typography, Box, Rating } from '@mui/material';
import backgroundImage from '../../images/barbertools.png'; // Importing the background image

const SubmitReview = () => {
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const review = e.target.review.value;

    if (rating === 0) {
      alert('Please select a star rating');
      return;
    }

    try {
      await addDoc(collection(db, 'testimonials'), {
        name,
        review,
        rating,
        timestamp: serverTimestamp(),
      });
      alert('Review submitted successfully!');
      e.target.reset();
      setRating(0);
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review. Please try again.');
    }
  };

  return (
    <Box 
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '16px',
      }}
    >
      <Container 
        maxWidth="sm" 
        sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.85)', 
          padding: { xs: 4, md: 6 }, 
          borderRadius: 2, 
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
        >
          Submit a Review
        </Typography>
        <Box 
          component="form" 
          onSubmit={handleSubmit} 
          sx={{ 
            width: '100%', 
            mt: 1 
          }}
        >
          <TextField
            margin="normal"
            fullWidth
            label="Name"
            id="name"
            name="name"
            required
          />
          <TextField
            margin="normal"
            fullWidth
            label="Review"
            id="review"
            name="review"
            multiline
            rows={4}
            required
          />
          <Box 
            sx={{ 
              mt: 2, 
              mb: 2, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}
          >
            <Typography component="legend">Rating:</Typography>
            <Rating
              name="rating"
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
            />
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SubmitReview;
