import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import backgroundImage from '../../images/barbertools.png'; // Importing the background image

const TestimonialForm = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'testimonials'), {
        name,
        review,
        createdAt: serverTimestamp(),
      });
      setName('');
      setReview('');
      setMessage('Testimonial submitted successfully!');
    } catch (err) {
      setMessage('Error submitting testimonial.');
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
          component="h2" 
          gutterBottom
        >
          Submit Your Review
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            margin="normal"
            fullWidth
            label="Review"
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            multiline
            rows={4}
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
          {message && (
            <Typography 
              variant="body2" 
              color="success" 
              sx={{ mt: 2 }}
            >
              {message}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialForm;



