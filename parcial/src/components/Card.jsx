// src/components/Card.jsx
import React from 'react';

const Card = ({ nombre, color }) => {
  return (
    <div style={{ 
      padding: '50px', 
      marginTop: '50px', 
      borderRadius: '7px', 
      backgroundColor: color, 
      color: '#fff', 
      textAlign: 'center' 
    }}>
      <p>Nombre: {nombre}</p>
      <p>Color favorito: {color}</p>
    </div>
  );
};

export default Card;
