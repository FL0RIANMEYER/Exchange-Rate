import { TOGGLE_ADVANCED, AJAX_RESPONSE, QUERY_EXCHANGE } from '../constants/action-types';


/**
 *
 * @param  {Array}  [state=[]] 
 * @param  {OBJECT} action     
 * @return {[type]}            
 */
export function search(state = {}, action) {
    switch (action.type) {
        case TOGGLE_ADVANCED:
            return {
                ...state,
                expand: !state.expand,
            };
        case AJAX_RESPONSE:
            switch (action.requestType) {
                case QUERY_EXCHANGE:
                    return {
                        ...state,
                        result: action.response,
                        rate: {
                            limit:     action.header && action.header['X-RateLimit-Limit']     || 0,
                            remaining: action.header && action.header['X-RateLimit-Remaining'] || 0,
                        },
                    };
            }
            break;
    }
    return state;
}
