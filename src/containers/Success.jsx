import React from 'react';
import '../styles/components/Success.css';

const Success = () => (
  <div className="Success">
    <div className="Success-content">
      <h2>Oscar, gracias por tu compra!</h2>
      <span>Tu pedido llegará en 3 días a tu dirección</span>
      <div className="Success-map" />
    </div>
  </div>
);

export default Success;
