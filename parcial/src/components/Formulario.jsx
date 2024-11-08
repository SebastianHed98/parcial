// src/components/Formulario.jsx
import React, { useState } from 'react';

const Formulario = ({ onSubmit }) => {
  // Estados locales para los inputs
  const [nombre, setNombre] = useState('');
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);

  // Handler para el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (nombre.trim().length < 3 || nombre.startsWith(' ') || color.length < 6) {
      setError(true);
    } else {
      setError(false);
      onSubmit({ nombre, color }); // Envía los datos validados a App
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0
    }}>
      <form onSubmit={handleSubmit} style={{
        padding: '20px',
        borderRadius: '8px',
        background: '#f1f1f1',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <div>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{ marginBottom: '10px', padding: '8px', width: '250px' }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Ingresa tu color favorito (formato HEX)"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ marginBottom: '10px', padding: '8px', width: '250px' }}
          />
        </div>
        <button type="submit" style={{ padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>ENVIAR</button>
        {error && <p style={{ color: 'red' }}>Por favor verifica que la información sea correcta.</p>}
      </form>
    </div>
  );
};

export default Formulario;
