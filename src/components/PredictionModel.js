// src/components/PredictionModel.js
import React, { useState } from 'react';

// Simulated component for the predictive model
const PredictionModel = () => {
  const [raza, setRaza] = useState('');
  const [edad, setEdad] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [probabilidad, setProbabilidad] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setProbabilidad(null);

    // This is where you would make an API call to your Python backend
    // that would contain the predictive model.
    // For now, we will simulate an asynchronous response.
    try {
      // Simulate an API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      const simulatedProb = Math.random() * 100; // Simulate a percentage
      setProbabilidad(simulatedProb.toFixed(2));
    } catch (err) {
      setError("Error al calcular la probabilidad. Inténtalo de nuevo.");
      console.error("Simulated error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section">
      <h2>Modelo Predictivo de Vacunación</h2>
      <p>Estima la probabilidad de vacunación en función de los atributos del perro.</p>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="raza">Raza:</label>
          <input
            type="text"
            id="raza"
            value={raza}
            onChange={(e) => setRaza(e.target.value)}
            style={{ marginLeft: '5px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="edad">Edad (años):</label>
          <input
            type="number"
            id="edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            style={{ marginLeft: '5px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="ubicacion">Ubicación:</label>
          <input
            type="text"
            id="ubicacion"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
            style={{ marginLeft: '5px', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? 'Calculando...' : 'Calcular Probabilidad'}
        </button>
      </form>
      {loading && <p style={{ marginTop: '10px', color: '#007bff' }}>Cargando...</p>}
      {error && <p style={{ marginTop: '10px', color: 'red' }}>{error}</p>}
      {probabilidad !== null && !loading && (
        <p style={{ marginTop: '20px', fontSize: '1.2em', fontWeight: 'bold' }}>
          Probabilidad de vacunación: {probabilidad}%
        </p>
      )}
      <p style={{fontStyle: 'italic', fontSize: '0.9em', marginTop: '15px'}}>
        (En un proyecto real, este formulario enviaría datos a tu API de Python y mostraría el resultado del modelo predictivo.)
      </p>
    </div>
  );
};

export default PredictionModel;
