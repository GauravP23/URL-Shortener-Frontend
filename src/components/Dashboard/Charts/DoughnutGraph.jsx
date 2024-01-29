import React from 'react'
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
 
// Chart.register(ArcElement);






const DoughnutGraph = () => {
    return (
       
            <Doughnut
                height={20}
                width={20}
                data={{
                    labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        backgroundColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(255, 159, 64, 01)',
                            'rgba(255, 205, 86, 01)',
                            'rgba(75, 192, 192, 01)',
                            'rgba(54, 162, 235, 01)',
                            'rgba(153, 102, 255, 01)',
                            'rgba(201, 203, 207, 01)'
                        ],
                       
                        borderWidth: 1,
                    }],

                }}

            /> 
    )
}

export default DoughnutGraph