import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import './ViewAppointments.css';

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
    <div className="view-appointments">
      <h1>Appointments</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="appointments-section">
            <h2>Upcoming Appointments</h2>
            <ul className="appointments-list">
              {upcomingAppointments.map((appointment) => (
                <li key={appointment.id} className="appointment-item">
                  <div className="appointment-info">
                    <p>{appointment.date} - {appointment.time}</p>
                    <p>{appointment.name} - {appointment.email}</p>
                  </div>
                  <div className="appointment-action">
                    <label>
                      <input
                        type="checkbox"
                        checked={appointment.completed || false}
                        onChange={(e) =>
                          handleCheckboxChange(appointment.id, e.target.checked)
                        }
                      />
                      Mark as Completed
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="appointments-section">
            <h2>Completed Appointments</h2>
            <ul className="appointments-list">
              {completedAppointments.map((appointment) => (
                <li key={appointment.id} className="appointment-item">
                  <div className="appointment-info">
                    <p>{appointment.date} - {appointment.time}</p>
                    <p>{appointment.name} - {appointment.email}</p>
                  </div>
                  <div className="appointment-action">
                    <button
                      onClick={() =>
                        handleCheckboxChange(appointment.id, false)
                      }
                    >
                      Undo
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewAppointments;

