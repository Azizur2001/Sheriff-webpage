import React, { useState } from 'react';
import './Gallery.css';
import image1 from '../../images/hair.png';
import image2 from '../../images/image2.png';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: image1, alt: 'Haircut 1', title: 'Classic Fade' },
    { src: image2, alt: 'Haircut 2', title: 'Pompadour' },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="grid-gallery">
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
          {/* Remove the caption */}
          {/* <div className="caption">{selectedImage.title}</div> */}
        </div>
      )}
    </div>
  );
};

export default Gallery;
