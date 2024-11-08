// src/components/Card.jsx

// Este componente debería recibir por props y mostrar en pantalla la información
// que envía el usuario.

import React from 'react';

const Card = ({ nombre, color }) => {
  return (
    <div style={{ 
      padding: '20px', 
      marginTop: '20px', 
      borderRadius: '8px', 
      backgroundColor: color, 
      color: '#fff', 
      textAlign: 'center' 
    }}>
      <h3>Información ingresada:</h3>
      <p>Nombre: {nombre}</p>
      <p>Color favorito: {color}</p>
    </div>
  );
};

export default Card;
