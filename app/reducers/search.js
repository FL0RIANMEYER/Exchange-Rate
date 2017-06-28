import { TOGGLE_ADVANCED, AJAX_RESPONSE, QUERY_EXCHANGE } from '../constants/action-types';


/**
 * [treeitem description]
 * @param  {Array}  [state=[]] [description]
 * @param  {OBJECT} action     [description]
 * @return {[type]}            [description]
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
