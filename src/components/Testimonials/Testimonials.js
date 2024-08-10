// import React, { useEffect, useState } from 'react';
// import { db } from '../../firebase';
// import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
// import './Testimonials.css';

// const Testimonials = () => {
//   const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       const q = query(collection(db, 'testimonials'), orderBy('timestamp', 'desc'), limit(5));
//       const querySnapshot = await getDocs(q);
//       const testimonialsList = querySnapshot.docs.map(doc => doc.data());
//       setTestimonials(testimonialsList);
//     };
//     fetchTestimonials();
//   }, []);

//   return (
//     <div className="testimonials-page">
//       <h1 className="page-title">Client Testimonials</h1>
//       <div className="testimonials-grid">
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="testimonial-item">
//             <h2 className="testimonial-name">{testimonial.name}</h2>
//             <p className="testimonial-review">{testimonial.review}</p>
//             <div className="testimonial-rating">
//               {Array.from({ length: testimonial.rating }).map((_, i) => (
//                 <span key={i} className="star">&#9733;</span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="submit-review-button-container">
//         <a href="/submit-review" className="submit-review-button">Leave a Review</a>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import './Testimonials.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const q = query(collection(db, 'testimonials'), orderBy('timestamp', 'desc'), limit(12));
      const querySnapshot = await getDocs(q);
      const testimonialsList = querySnapshot.docs.map(doc => doc.data());
      setTestimonials(testimonialsList);
    };
    fetchTestimonials();
  }, []);

  return (
    <div className="testimonials-page">
      <h1 className="page-title">Client Testimonials</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <h2 className="testimonial-name">{testimonial.name}</h2>
            <p className="testimonial-review">{testimonial.review}</p>
            <div className="testimonial-rating">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i} className="star">&#9733;</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="submit-review-button-container">
        <a href="/submit-review" className="submit-review-button">Leave a Review</a>
      </div>
    </div>
  );
};

export default Testimonials;
