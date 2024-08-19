import React, { useState } from 'react';
import { auth } from '../../firebase'; // Correct import path
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import backgroundImage from '../../images/barbertools.png'; // Importing the background image

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      window.location.href = '/';
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      window.location.href = '/';
    } catch (error) {
      setError(error.message);
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
      }}
    >
      <Container 
        maxWidth="xs" 
        sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.85)', 
          padding: { xs: 4, md: 6 }, 
          borderRadius: 2, 
          boxShadow: 3,
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          sx={{ mb: 4, textAlign: 'center' }}
        >
          Sign Up
        </Typography>
        <Box 
          component="form" 
          onSubmit={handleSignup} 
          sx={{ 
            width: '100%', 
            mt: 1 
          }}
        >
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <Typography 
              variant="body2" 
              color="error" 
              sx={{ mt: 2, textAlign: 'center' }}
            >
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
        <Button
          onClick={handleGoogleSignup}
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mt: 2 }}
        >
          Sign Up with Google
        </Button>
      </Container>
    </Box>
  );
};

export default Signup;
