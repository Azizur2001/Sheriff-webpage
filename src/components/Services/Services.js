import React from 'react';
import './Services.css';

const ServicesComponent = () => {
  const services = [
    { name: 'Signature Haircut', price: '$25' },
    { name: 'Haircut', price: '$20' },
    { name: 'Beard Shaving', price: '$15' },
    { name: 'Beard Trim', price: '$15' },
    { name: 'Cut & Shave', price: '$30' },
    { name: 'Deep Tissue Shave', price: '$22' },
  ];

  return (
    <section className="services-section">
      <h2>SERVICES</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <span className="service-name">{service.name}</span>
            <span className="service-price">{service.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesComponent;
