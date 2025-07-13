// src/components/DistributionChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // ¡IMPORTANTE! Asegúrate de que esta línea esté presente

// Component for displaying distribution data with Chart.js
const DistributionChart = ({ title, data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // To store the chart instance

  useEffect(() => {
    // Ensure 'data' is a valid array before proceeding
    if (!data || !Array.isArray(data) || data.length === 0) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy the chart if no valid data
        chartInstance.current = null;
      }
      return; // Do not attempt to render the chart if no valid data
    }

    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy the previous instance if it exists
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'bar', // You can change to 'pie', 'line', etc.
        data: {
          labels: data.map(item => item.label),
          datasets: [{
            label: 'Número de Perros Vacunados',
            data: data.map(item => item.value),
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // Allows the chart to adjust to the container
          plugins: {
            title: {
              display: true,
              text: title,
              font: {
                size: 18
              }
            },
            legend: {
              display: false // Hides the legend if there's only one dataset
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Número de Perros'
              }
            },
            x: {
              title: {
                display: true,
                text: title.includes('Raza') ? 'Raza' : (title.includes('Edad') ? 'Edad' : 'Ubicación')
              }
            }
          }
        }
      });
    }

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, title]); // Re-render if data or title changes

  return (
    <div className="section">
      <h2>{title}</h2>
      <div style={{ height: '300px', width: '100%' }}> {/* Container for the chart */}
        {(!data || !Array.isArray(data) || data.length === 0) ? (
          <p>No hay datos disponibles para mostrar este gráfico.</p>
        ) : (
          <canvas ref={chartRef}></canvas>
        )}
      </div>
    </div>
  );
};

export default DistributionChart;
