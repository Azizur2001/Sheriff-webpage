import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import './SubmitReview.css';

const SubmitReview = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

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
      setHover(0);
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review. Please try again.');
    }
  };

  return (
    <div className="review-form-container">
      <form className="review-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="review">Review:</label>
          <textarea id="review" name="review" rows="4" required></textarea>
        </div>
        <div className="form-group rating-group">
          <label htmlFor="rating">Rating:</label>
          <div className="star-rating">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={index <= (hover || rating) ? "on" : "off"}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                >
                  <span className="star">&#9733;</span>
                </button>
              );
            })}
          </div>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default SubmitReview;
