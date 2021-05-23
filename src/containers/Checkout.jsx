import React from 'react';
import '../styles/components/Checkout.css';

const Checkout = () => (
  <div className="Checkout">
    <div className="Checkout-content">
      <h3>Lista de Pedidos</h3>
      <div className="Checkout-item">
        <div className="Checkout-element">
          <h4>Item name</h4>
          <span>$ price</span>
        </div>
        <button type="button">Eliminar</button>
      </div>
    </div>
    <div className="Checkout-sidebar">
      <h3>Precio total: 10$</h3>
      <button type="button">Continuar pedido</button>
    </div>
  </div>
);

export default Checkout;
