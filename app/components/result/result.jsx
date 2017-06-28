import React from 'react';

import styles from './result.css';

import ChartComponent      from '../../components/chart/chart.jsx';
import ChartContainer      from '../../container/chart/chart.jsx';

import transformer from '../../transformer/timeseries';

const Chart = ChartContainer(ChartComponent);


export default ({ result = {} }) => {
    if(result.exchange) {
        return (
            <div className={styles.container}>
                <span className={styles.exchange}>{result.exchange}</span>
                <span className={styles.timestamp}>{new Date(result.timestamp).toISOString().split('T')[0]}</span>
            </div>
        );
    }
    if(Array.isArray(result)) {
        return (
            <div className={styles.container}>
                <Chart chartData={transformer(result)} />
            </div>
        );
    }
    return (<div></div>);
};
