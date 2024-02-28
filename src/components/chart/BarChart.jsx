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

export default function BarChart() {
    const { myData, myOptions } = useContext(appLogicContext);

    return (
        <div data-testid="bar-chart">
            {myData && myOptions ? (
                <Bar data={myData} options={myOptions} />
            ) : (
                <p>Loading chart...</p>
            )}
        </div>
    );
}
