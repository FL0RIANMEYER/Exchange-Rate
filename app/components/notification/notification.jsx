import React from 'react';

import styles from './notification.css';


export default ({ rate, isCritical } ) => (
    <div>
        { rate &&
            <div className={isCritical ? styles.requests + ' ' + styles.hight : styles.requests}>
                <span>Request remaining: </span>
                <span>{rate.remaining}</span>
                <span>/</span>
                <span>{rate.limit}</span>
                { isCritical ? <span> Signup to get more Requests</span> : ''}
            </div>
        }
    </div>
);
