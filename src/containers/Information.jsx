import React from 'react';
import '../styles/components/Information.css';

const Information = () => (
  <div className="Information">
    <div className="Information-content">
      <div className="Information-head">
        <h2>Información de Contacto</h2>
      </div>
      <div className="Information-form">
        <form>
          <input type="text" placeholder="Nombre completo" name="name" />
          <input type="text" placeholder="Correo electrónico" name="email" />
          <input type="text" placeholder="Dirección" name="address" />
          <input type="text" placeholder="Apto" name="apto" />
          <input type="text" placeholder="Ciudad" name="city" />
          <input type="text" placeholder="Estado" name="state" />
          <input type="text" placeholder="País" name="country" />
          <input type="text" placeholder="Código Postal" name="zipcode" />
          <input type="text" placeholder="Teléfono" name="phone" />
        </form>
      </div>
      <div className="Information-buttons">
        <div className="Information-back">Regresar</div>
        <div className="Information-next">Pagar</div>
      </div>
    </div>
    <div className="Information-sidebar">
      <h3>Pedido:</h3>
      <div className="Information-item">
        <div className="Information-element">
          <h4>Item name</h4>
          <span>$ 10</span>
        </div>
      </div>
    </div>
  </div>
);

export default Information;
