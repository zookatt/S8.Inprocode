import { appLogicContext } from '../../context/ContextProvider';
import { Bar } from 'react-chartjs-2';
import { useContext } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

// var expenses = [250, 450, 500, 300, 250, 430, 550];
// const backgroundColors = expenses.map((val) =>
//     val > 500 ? "rgb(117, 181, 191)" : "rgb(234, 118, 93)",
// );
// var days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

// var myOptions = {
//     responsive: true,
//     animation: true,
//     plugins: {
//         legend: {
//             display: false
//         }
//     },
//     scales: {
//         y: {
//             min: 0,
//             max: 600
//         },
//         x: {
//             ticks: { color: 'rgb(218, 217, 215)' },
//             grid: { display: false },

//         }
//     },

// };

// var myData = {
//     labels: days,
//     datasets: [
//         {
//             label: 'Gastos',
//             data: expenses,
//             backgroundColor: backgroundColors,
//             borderRadius: '8'
//         }
//     ]
// };

export function BarChart() {

    const { myData, myOptions } = useContext(appLogicContext);

    return (
        <Bar data={myData} options={myOptions} />);
}