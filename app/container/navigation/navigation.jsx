import { connect } from 'react-redux';

import { toggleSignup } from '../../actions/signup';


const mapStateToProps = ({ user, signup }) => ({ user: user.user, signup });

const mapDispatchToProps = (dispatch) => ({
    onClick: (event) => {
        dispatch(toggleSignup());
    },
});

export default (Navigation) => connect(mapStateToProps, mapDispatchToProps)(Navigation);
