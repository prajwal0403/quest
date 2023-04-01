import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

export default function Piechart() {
  const chartData = {
    datasets: [
      {
        label: 'Time Spent by Users',
        data: [315, 315, 55, 315],
        borderWidth: 0,
        backgroundColor: [
          'rgb(48,48,48)',
          'rgb(97,34,154)',
          'rgba(170, 65, 251, 0.4)',
          'rgb(97,55,129)',
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className='pie'>
      <Pie className="bg" data={chartData} />
    </div>
  );
}
