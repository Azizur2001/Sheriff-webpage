// import React, { useState } from 'react';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { Container, TextField, Button, Typography, Box } from '@mui/material';

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const auth = getAuth();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       localStorage.setItem('isAdmin', 'true');
//       window.location.href = '/';
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <Box 
//       sx={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundImage: 'url(/src/images/background.png)', // Corrected path to your image
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       <Container 
//         maxWidth="xs" 
//         sx={{ 
//           backgroundColor: 'rgba(255, 255, 255, 0.85)', 
//           padding: { xs: 4, md: 6 }, 
//           borderRadius: 2, 
//           boxShadow: 3,
//         }}
//       >
//         <Typography 
//           variant="h4" 
//           component="h1" 
//           gutterBottom
//           sx={{ mb: 4, textAlign: 'center' }}
//         >
//           Admin Login
//         </Typography>
//         <Box 
//           component="form" 
//           onSubmit={handleLogin} 
//           sx={{ 
//             width: '100%', 
//             mt: 1 
//           }}
//         >
//           <TextField
//             margin="normal"
//             fullWidth
//             id="email"
//             label="Email"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <TextField
//             margin="normal"
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           {error && (
//             <Typography 
//               variant="body2" 
//               color="error" 
//               sx={{ mt: 2, textAlign: 'center' }}
//             >
//               {error}
//             </Typography>
//           )}
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Login
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default AdminLogin;


import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import backgroundImage from '../../images/background.png'; // Importing the image

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('isAdmin', 'true');
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
        backgroundImage: `url(${backgroundImage})`, // Using the imported image
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
          Admin Login
        </Typography>
        <Box 
          component="form" 
          onSubmit={handleLogin} 
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
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AdminLogin;
