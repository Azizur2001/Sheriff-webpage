import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import './TestimonialForm.css';

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
        createdAt: serverTimestamp()
      });
      setName('');
      setReview('');
      setMessage('Testimonial submitted successfully!');
    } catch (err) {
      setMessage('Error submitting testimonial.');
    }
  };

  return (
    <div className="testimonial-form-container">
      <h2>Submit Your Review</h2>
      <form onSubmit={handleSubmit} className="testimonial-form">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default TestimonialForm;













