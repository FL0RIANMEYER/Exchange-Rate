import { connect } from 'react-redux';

import { toggleSignup } from '../../actions/signup';


const mapStateToProps = ({ search }) => ({
    rate: search.rate,
    isCritical: search.rate && (search.rate.remaining / search.rate.limit < 0.25),
});


export default (Notification) => connect(mapStateToProps)(Notification);
