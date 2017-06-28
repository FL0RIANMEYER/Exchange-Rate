import React from 'react';

import styles from './requestCount.css';


export default ({ onToggleAdvanced, onSubmit}) => (
    <div>
        <form className={styles.form} action="/signup" method="POST" id="search" />
        <div className={styles.overlay}>
            <input name="mail" form="search" type="text" />
            <input name="mail" form="search" type="text" />
            <input name="mail" form="search" type="submit" value="Login" onClick={onSubmit} />
            <div onClick={onToggleAdvanced}>Advanced Search</div>
        </div>
        <div className={styles.overlay}>
            <input name="mail" form="search" type="text" />
            <input name="mail" form="search" type="text" />
        </div>
    </div>
);
