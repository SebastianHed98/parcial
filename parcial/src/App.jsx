// src/App.jsx
import React, { useState } from 'react';
import Formulario from './components/formulario';
import Card from './components/card';

function App() {
  const [datos, setDatos] = useState(null);

  // Handler que recibe los datos validados desde Formulario
  const handleFormSubmit = (data) => {
    setDatos(data);
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <h1>Elige un color</h1>
      <Formulario onSubmit={handleFormSubmit} />
      {datos && <Card nombre={datos.nombre} color={datos.color} />}
    </div>
  );
}

export default App;
