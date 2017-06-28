import React  from 'react';

import styles from './navigation.css';

import SignupComponent       from '../../components/signup/signup.jsx';
import SignupContainer       from '../../container/signup/signup.jsx';
import NotificationComponent from '../../components/notification/notification.jsx';
import NotificationContainer from '../../container/notification/notification.jsx';


const Signup       = SignupContainer(SignupComponent);
const Notification = NotificationContainer(NotificationComponent);


export default ({ user, signup, onClick }) => (
    <div className={styles.navigation}>
        <Notification />
        {!user && <a name="toggleSignup" id="signup" onClick={onClick}>Go in</a>}
        { signup.visibility ? <Signup onClick={onClick} /> : '' }
    </div>
);
