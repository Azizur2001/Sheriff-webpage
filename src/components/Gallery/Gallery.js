// import React from 'react';
// import './Gallery.css';

// const Gallery = () => {
//   return (
//     <section id="gallery" className="gallery-container">
//       <h2>Gallery</h2>
//       <p>Images of haircuts and the barber shop.</p>
//     </section>
//   );
// };

// export default Gallery;



// import React from 'react';
// import './Gallery.css'; // Ensure styles are scoped to the gallery

// import image1 from '../../images/hair.png';
// import image2 from '../../images/image2.png';

// const Gallery = () => {
//   const images = [
//     { src: image1, alt: 'Haircut 1', title: 'Classic Fade' },
//     { src: image2, alt: 'Haircut 2', title: 'Pompadour' },
//   ];

//   return (
//     <div className="grid-gallery">
//       {images.map((image, index) => (
//         <div className="grid-item" key={index}>
//           <img src={image.src} alt={image.alt} className="gallery-image" />
//           <div className="overlay">
//             <div className="text">{image.title}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Gallery;




import React, { useState, useEffect } from 'react';
import './Gallery.css';
import image1 from '../../images/hair.png';
import image2 from '../../images/image2.png';


const Gallery = () => {
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    setShowGallery(false);
    const timer = setTimeout(() => {
      setShowGallery(true);
    }, 100); // Small delay to ensure the animation triggers
    return () => clearTimeout(timer);
  }, []);

  const images = [
    { src: image1, alt: 'Haircut 1', title: 'Classic Fade' },
    { src: image2, alt: 'Haircut 2', title: 'Pompadour' },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className={`grid-gallery ${showGallery ? 'fade-in' : ''}`}>
        {images.map((image, index) => (
          <div className="grid-item" key={index} onClick={() => openModal(image)}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
            <div className="overlay">
              <div className="text">{image.title}</div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage.src} alt={selectedImage.alt} />
        </div>
      )}
    </div>
  );
};

export default Gallery;


