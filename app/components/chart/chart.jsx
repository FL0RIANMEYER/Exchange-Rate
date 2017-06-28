import React from 'react';
import { Line as LineChart} from 'react-chartjs';

import styles from './chart.css';


export default ({ chartData, chartOptions}) => (
    <div className={styles.chart}>
        <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
    </div>
);
