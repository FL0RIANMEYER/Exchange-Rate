import React from 'react';


import styles from './signup.css';


export default ({ onClick, onSignup }) => (
    <div>
        <div className={styles.overlay} onClick={onClick}></div>
        <form className={styles.form} onSubmit={onSignup} >
            Email:
            <br/><input type="text" name="mail" />
            <br/><input type="submit" value="Signup" />
        </form>
    </div>
);
