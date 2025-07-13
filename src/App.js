import React, { useState } from 'react';
// Importa tus componentes desde archivos separados
import DistributionChart from './components/DistributionChart'; // Importa el componente DistributionChart (actualizado)
import PredictionModel from './components/PredictionModel'; // Importa el componente PredictionModel (actualizado)

// Main application component
function App() {
  // Simulated data for demonstration
  const razaData = [
    { label: 'Labrador', value: 300 },
    { label: 'Pastor Alemán', value: 250 },
    { label: 'Poodle', value: 180 },
    { label: 'Mestizo', value: 400 },
  ];

  const edadData = [
    { label: '0-1 año', value: 200 },
    { label: '1-5 años', value: 500 },
    { label: '5-10 años', value: 300 },
    { label: '+10 años', value: 100 },
  ];

  const ubicacionData = [
    { label: 'Guayaquil', value: 700 },
    { label: 'Quito', value: 400 },
    { label: 'Cuenca', value: 200 },
  ];

  const relevantVariables = [
    'Edad del perro',
    'Raza',
    'Ubicación geográfica',
    'Estado de salud previo',
    'Tipo de tenencia (mascota, trabajo)',
  ];

  const recommendations = [
    'Focalizar campañas en áreas con baja tasa de vacunación identificada por el modelo.',
    'Diseñar material informativo específico para propietarios de razas y edades con menor propensión a la vacunación.',
    'Establecer clínicas móviles en barrios de difícil acceso.',
    'Implementar recordatorios de vacunación personalizados basados en la fecha de la última vacuna.',
    'Colaborar con organizaciones de bienestar animal para ampliar el alcance de las campañas.',
  ];

  return (
    <div className="App">
      {/* The CSS styles are now in src/index.css, so no <style> tag needed here */}
      <header>
        <h1>Análisis de Vacunación Canina en Ecuador</h1>
      </header>
      <div className="container">
        {/* Section: Canine Population Distribution */}
        <DistributionChart title="Distribución de la Población Canina por Raza" data={razaData} />
        <DistributionChart title="Distribución de la Población Canina por Edad" data={edadData} />
        <DistributionChart title="Distribución de la Población Canina por Ubicación" data={ubicacionData} />

        {/* Section: Relevant Variables */}
        <div className="section">
          <h2>Variables Más Relevantes en la Vacunación</h2>
          <p>
            Basado en el análisis exploratorio y métodos de clasificación, estas son las variables con mayor incidencia en la vacunación:
          </p>
          <ul>
            {relevantVariables.map((variable, index) => (
              <li key={index}>{variable}</li>
            ))}
          </ul>
        </div>

        {/* Section: Predictive Model */}
        <PredictionModel />

        {/* Section: Recommendations */}
        <div className="section">
          <h2>Recomendaciones para Campañas de Salud Animal</h2>
          <p>
            Basadas en los resultados del análisis y el modelo predictivo, se proponen las siguientes recomendaciones para las autoridades de salud pública:
          </p>
          <ul className="recommendation-list">
            {recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>
      </div>
      <footer>
        <p>&copy; 2025 Proyecto de Minería de Datos en Salud Animal.</p>
      </footer>
    </div>
  );
}

export default App;
