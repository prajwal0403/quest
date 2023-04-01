import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

export default function Linechart() {
  const chartData = {
    labels: [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
    ],
    datasets: [
      {
        label: '',
        data: [20, 21, 12, 25, 85, 48, 45, 95, 70, 70, 80, 82],
        borderWidth: 1,
        radius: 0,
        fill: false,
        borderColor: '#6C60FF',
        tension: 0.2,
      },
    ],
  };
  return (
    <div className="line-chart">
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}
