import React from 'react';
import { Link } from 'react-router-dom';
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
        <button type="button">
          <i className="fas fa-trash-alt" />
        </button>
      </div>
    </div>
    <div className="Checkout-sidebar">
      <h3>Precio total: 10$</h3>
      <Link to="/checkout/information">
        <button type="button">Continuar pedido</button>
      </Link>
    </div>
  </div>
);

export default Checkout;
