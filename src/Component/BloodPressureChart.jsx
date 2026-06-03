import React from 'react';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Tooltip, 
  Legend 
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const BloodPressureChart = ({ history }) => {
  const labels = history.map(h => `${h.month}, ${h.year}`);
  
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Systolic',
        data: history.map(h => h.blood_pressure.systolic.value),
        borderColor: '#E66FD2',
        backgroundColor: '#E66FD2',
        borderWidth: 3,
        pointRadius: 6,
        tension: 0.4,
        fill: false,
      },
      {
        label: 'Diastolic',
        data: history.map(h => h.blood_pressure.diastolic.value),
        borderColor: '#8C6FE6',
        backgroundColor: '#8C6FE6',
        borderWidth: 3,
        pointRadius: 6,
        tension: 0.4,
        fill: false,
      }
    ]
  };

  const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { 
    legend: { display: false } 
  },
  scales: {
    y: { 
      min: 60, 
      max: 200, 
      ticks: { stepSize: 20 } 
    },
    x: { 
      grid: { 
        display: false,
        drawBorder: false 
      },
      ticks: {
        
        autoSkip: false,      
        maxRotation: 0,       
        minRotation: 0       
        
      }
    }
  }
};

  return (
    <div className="h-[300px] w-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default BloodPressureChart;