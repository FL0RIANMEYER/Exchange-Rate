import { connect } from 'react-redux';

import { toggleSignup } from '../../actions/signup';


const mapStateToProps = ({ signup }) => ({ signup });

const mapDispatchToProps = dispatch => ({
    onClick: (event) => {
        dispatch(toggleSignup());
    },
});

export default (Chart) => connect(mapStateToProps, mapDispatchToProps)(Chart);
