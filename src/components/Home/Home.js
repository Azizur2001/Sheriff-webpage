// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './Home.css';

// // const Home = () => {
// //   const navigate = useNavigate();
// //   const isAuthorized = localStorage.getItem('isAuthorized') === 'true';

// //   const handleLogin = () => {
// //     // For simplicity, let's set the value in localStorage
// //     localStorage.setItem('isAuthorized', 'true');
// //     window.location.reload();
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem('isAuthorized');
// //     window.location.reload();
// //   };

// //   return (
// //     <div className="home">
// //       <h1>Welcome to the Barber Shop</h1>
// //       {/* Other content */}
// //       {isAuthorized ? (
// //         <>
// //           <button onClick={() => navigate('/view-appointments')}>View Appointments</button>
// //           <button onClick={handleLogout}>Logout</button>
// //         </>
// //       ) : (
// //         <button onClick={handleLogin}>Login as Admin</button>
// //       )}
// //     </div>
// //   );
// // };

// // export default Home;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Container, Typography, Button, Box } from '@mui/material';

// const Home = () => {
//   const navigate = useNavigate();
//   const isAuthorized = localStorage.getItem('isAuthorized') === 'true';

//   const handleLogin = () => {
//     localStorage.setItem('isAuthorized', 'true');
//     window.location.reload();
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('isAuthorized');
//     window.location.reload();
//   };

//   return (
//     <Container 
//       maxWidth="sm" 
//       sx={{ 
//         mt: 8, 
//         display: 'flex', 
//         flexDirection: 'column', 
//         alignItems: 'center', 
//         textAlign: 'center' 
//       }}
//     >
//       <Typography 
//         variant="h4" 
//         component="h1" 
//         gutterBottom
//       >
//         Welcome to the Barber Shop
//       </Typography>
//       <Box sx={{ mt: 4 }}>
//         {isAuthorized ? (
//           <>
//             <Button 
//               variant="contained" 
//               color="primary" 
//               onClick={() => navigate('/view-appointments')} 
//               sx={{ mb: 2, width: '100%' }}
//             >
//               View Appointments
//             </Button>
//             <Button 
//               variant="contained" 
//               color="secondary" 
//               onClick={handleLogout} 
//               sx={{ width: '100%' }}
//             >
//               Logout
//             </Button>
//           </>
//         ) : (
//           <Button 
//             variant="contained" 
//             color="primary" 
//             onClick={handleLogin} 
//             sx={{ width: '100%' }}
//           >
//             Login as Admin
//           </Button>
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default Home;
