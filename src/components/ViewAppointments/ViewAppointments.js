import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Container, Typography, CircularProgress, Grid, Paper, Box, Checkbox, Button } from '@mui/material';

const ViewAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      const q = query(collection(db, 'appointments'));
      const querySnapshot = await getDocs(q);
      const fetchedAppointments = [];
      querySnapshot.forEach((doc) => {
        fetchedAppointments.push({ id: doc.id, ...doc.data() });
      });
      setAppointments(fetchedAppointments);
      setLoading(false);
    };

    fetchAppointments();
  }, []);

  const handleCheckboxChange = async (appointmentId, completed) => {
    const appointmentRef = doc(db, 'appointments', appointmentId);
    await updateDoc(appointmentRef, { completed });
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === appointmentId ? { ...appt, completed } : appt
      )
    );
  };

  const upcomingAppointments = appointments.filter(
    (appt) => !appt.completed
  );
  const completedAppointments = appointments.filter(
    (appt) => appt.completed
  );

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Appointments
      </Typography>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Upcoming Appointments
            </Typography>
            <Grid container spacing={2}>
              {upcomingAppointments.map((appointment) => (
                <Grid item xs={12} key={appointment.id}>
                  <Paper sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="body1">
                        {appointment.date} - {appointment.time}
                      </Typography>
                      <Typography variant="body2">
                        {appointment.name} - {appointment.phone}
                      </Typography>
                    </Box>
                    <Checkbox
                      checked={appointment.completed || false}
                      onChange={(e) =>
                        handleCheckboxChange(appointment.id, e.target.checked)
                      }
                      color="primary"
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ mt: 6 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Completed Appointments
            </Typography>
            <Grid container spacing={2}>
              {completedAppointments.map((appointment) => (
                <Grid item xs={12} key={appointment.id}>
                  <Paper sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="body1">
                        {appointment.date} - {appointment.time}
                      </Typography>
                      <Typography variant="body2">
                        {appointment.name} - {appointment.phone}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleCheckboxChange(appointment.id, false)}
                    >
                      Undo
                    </Button>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      )}
    </Container>
  );
};

export default ViewAppointments;
