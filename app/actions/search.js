import { QUERY_EXCHANGE, TOGGLE_ADVANCED } from '../constants/action-types';


export const queryExchange = (query, type, token) => ({
    type:   QUERY_EXCHANGE,
    ajax:   true,
    method: 'GET',
    path:   'api/' + type,
    token,
    query,
});

export const toggleAdvanced = () => ({
    type: TOGGLE_ADVANCED,
});
