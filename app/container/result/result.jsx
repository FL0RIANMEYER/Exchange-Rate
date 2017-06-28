import { connect } from 'react-redux';


const mapStateToProps = ({ search }) => ({
    result: search.result,
});


export default (Result) => connect(mapStateToProps)(Result);
