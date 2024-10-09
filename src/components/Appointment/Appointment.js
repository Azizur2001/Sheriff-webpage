import React, { useState } from 'react';
import { db } from '../../firebase'; // Ensure you have your Firebase configured correctly
import { collection, addDoc } from 'firebase/firestore';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import InputMask from 'react-input-mask'; // Import InputMask for phone number formatting
import backgroundImage from '../../images/barbertools.png'; // Importing the background image

const SubmitAppointment = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'appointments'), {
        name,
        phone,
        date,
        time,
        timestamp: new Date(),
      });
      console.log('Document written with ID: ', docRef.id);
      setMessage('Appointment booked successfully!');
    } catch (e) {
      console.error('Error adding document: ', e);
      setMessage('Error booking appointment. Please try again.');
    }

    // Clear the form
    setName('');
    setPhone('');
    setDate('');
    setTime('');
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
        maxWidth="sm" 
        sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.85)', 
          padding: { xs: 4, md: 6 }, 
          borderRadius: 2, 
          boxShadow: 3,
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          sx={{ mb: 4, textAlign: 'center' }}
        >
          Book an Appointment
        </Typography>
        {message && (
          <Typography 
            variant="body2" 
            color="success" 
            sx={{ mb: 4, textAlign: 'center' }}
          >
            {message}
          </Typography>
        )}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <InputMask
            mask="+9(999)-999-9999"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          >
            {() => (
              <TextField
                margin="normal"
                fullWidth
                label="Phone Number"
                required
              />
            )}
          </InputMask>
          <TextField
            margin="normal"
            fullWidth
            label="Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <TextField
            margin="normal"
            fullWidth
            label="Time"
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            value={time}
            onChange={(e) => setTime(e.target.value)}
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
        </Box>
      </Container>
    </Box>
  );
};

export default SubmitAppointment;



// import React, { useState } from 'react';
// import { db } from '../../firebase'; 
// import { collection, addDoc } from 'firebase/firestore';
// import { Container, TextField, Button, Typography, Box } from '@mui/material';
// import axios from 'axios'; // Import axios for making HTTP requests
// import backgroundImage from '../../images/barbertools.png'; 

// const SubmitAppointment = () => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState(''); // Changed from email to phone
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       console.log('Submitting appointment...');
//       const docRef = await addDoc(collection(db, 'appointments'), {
//         name,
//         phone,
//         date,
//         time,
//         timestamp: new Date(),
//       });
//       console.log('Document written with ID:', docRef.id);
//       setMessage('Appointment booked successfully!');
  
//       // Send SMS using the backend
//       console.log('Sending SMS...');
//       const response = await fetch('http://localhost:5001/send-sms', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ phone, date, time }),
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to send SMS');
//       }
  
//       // Clear the form
//       setName('');
//       setPhone('');
//       setDate('');
//       setTime('');
//     } catch (e) {
//       console.error('Error booking appointment:', e);
//       setMessage(`Error booking appointment. ${e.message}`);
//     }
//   };
  
  

//   return (
//     <Box 
//       sx={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       <Container 
//         maxWidth="sm" 
//         sx={{ 
//           backgroundColor: 'rgba(255, 255, 255, 0.85)', 
//           padding: { xs: 4, md: 6 }, 
//           borderRadius: 2, 
//           boxShadow: 3,
//           mt: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Typography 
//           variant="h4" 
//           component="h1" 
//           gutterBottom
//           sx={{ mb: 4, textAlign: 'center' }}
//         >
//           Book an Appointment
//         </Typography>
//         {message && (
//           <Typography 
//             variant="body2" 
//             color="success" 
//             sx={{ mb: 4, textAlign: 'center' }}
//           >
//             {message}
//           </Typography>
//         )}
//         <Box 
//           component="form" 
//           onSubmit={handleSubmit} 
//           sx={{ 
//             width: '100%', 
//             mt: 1 
//           }}
//         >
//           <TextField
//             margin="normal"
//             fullWidth
//             label="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//           <TextField
//             margin="normal"
//             fullWidth
//             label="Phone Number"
//             type="tel"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             placeholder="+1(123)-456-7890"
//             required
//           />
//           <TextField
//             margin="normal"
//             fullWidth
//             label="Date"
//             type="date"
//             InputLabelProps={{
//               shrink: true,
//             }}
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             required
//           />
//           <TextField
//             margin="normal"
//             fullWidth
//             label="Time"
//             type="time"
//             InputLabelProps={{
//               shrink: true,
//             }}
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             required
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Submit
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default SubmitAppointment;
