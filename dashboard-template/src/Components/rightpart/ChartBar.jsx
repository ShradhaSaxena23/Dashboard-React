import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  maintainAspectRatio: false, // Added for responsiveness
  responsive: true,
  plugins: {
    legend: { position: 'chartArea' },
    title: {
      display: true,
      text: 'Mid term analysis',
    },
  },
  scales: {
    xAxes: [
      {
        stacked: true,
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'year 2022',
      data: [20, 30, 40, 50, 60],
      backgroundColor: 'green',
    },
    {
      label: 'year 2023',
      data: [15, 20, 25, 40, 45, 60],
      backgroundColor: 'blue',
    },
  ],
};

function ChartBar() {
  return (
    <div style={{ marginTop: '50px', marginBottom: '20px'}}>
      <Bar options={options} data={data} height="300" weight="300"/>
    </div>
  );
}

export default ChartBar;
