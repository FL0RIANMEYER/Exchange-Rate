import { connect } from 'react-redux';

import { queryExchange, toggleAdvanced } from '../../actions/search';
import transformSearchQuery from '../../transformer/search';


const mapStateToProps = ({ search, currencies, user }) => ({
    expand:     search.expand,
    currencies: currencies.currencies,
    token:      user.token,
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (event, expand, token) => {
        const type = expand ? 'time-series' : 'exchange';

        event.preventDefault();

        dispatch(queryExchange(transformSearchQuery(event.target.elements), type, token));
    },
    onToggleAdvanced: () => {
        dispatch(toggleAdvanced());
    },
});


export default (Search) => connect(mapStateToProps, mapDispatchToProps)(Search);
