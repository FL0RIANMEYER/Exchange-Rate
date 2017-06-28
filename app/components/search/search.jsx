import React from 'react';

import styles from './search.css';


export default ({ expand, currencies = [], token, onToggleAdvanced, onSubmit}) => {
    const options = currencies.map(c => (
        <option key={c.symbol} value={c.symbol}>
            {`(${c.symbol}) ${c.name}`}
        </option>)
    );

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={e => onSubmit(e, expand, token)} id="search" />
            <div className={styles.searchBar}>
                <input name="amount" form="search" type="number" placeholder="Value" pattern="[0-9]"/>
                <select name="from" form="search">{ options }</select>
                <select name="to" form="search" defaultValue="EUR" >{ options }</select>
                <button name="search" type="submit" form="search">
                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </button>
            </div>
            <div className={`${styles.advancedBar} ${expand && styles.expand}`}>
                <div>
                    <span>From</span>
                    <input name="dateFrom" form="search" type="date" defaultValue="2016-06-01" />
                </div>
                <div>
                    <span>To</span>
                    <input name="dateTo" form="search" type="date" defaultValue="2017-06-01" />
                </div>
            </div>
            <div name="advancedSearch" className={styles.advancedSearch} onClick={onToggleAdvanced}>Advanced Search</div>
        </div>
    );
};
