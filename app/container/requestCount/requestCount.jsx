import { connect } from 'react-redux';

import { toggleSignup } from '../../actions/signup';


const mapStateToProps = ({ user, signup }) => ({ user, signup });

const mapDispatchToProps = (dispatch) => ({
    onClick: (event) => {
        switch(event.target.id) {
            case 'signup' :
                dispatch(toggleSignup());
                break;
        }
    },
});

export default (RequestCount) => connect(mapStateToProps, mapDispatchToProps)(RequestCount);
