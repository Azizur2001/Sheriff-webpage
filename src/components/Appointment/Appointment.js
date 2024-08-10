import React, { useState } from 'react';
import { db } from '../../firebase'; // Ensure you have your Firebase configured correctly
import { collection, addDoc } from 'firebase/firestore';
import './Appointment.css';

const SubmitAppointment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'appointments'), {
        name,
        email,
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
    setEmail('');
    setDate('');
    setTime('');
  };

  return (
    <div className="appointment-form-container">
      <h1>Book an Appointment</h1>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmitAppointment;

