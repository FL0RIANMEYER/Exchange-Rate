import { connect } from 'react-redux';

import { toggleSignup, signupUser } from '../../actions/signup';


const mapStateToProps = ({ signup }, ownProps) => ({ ...ownProps, signup });

const mapDispatchToProps = dispatch => ({
    onToggle: (event) => {
        dispatch(toggleSignup());
    },
    onSignup: (event) => {
        event.preventDefault();
        
        dispatch(signupUser(event.target.mail.value));
        dispatch(toggleSignup());
    },
});

export default (Signup) => connect(mapStateToProps, mapDispatchToProps)(Signup);
