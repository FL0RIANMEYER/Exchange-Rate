import { AJAX_RESPONSE, REQUEST_CURRENCIES } from '../constants/action-types';
import transformCurrencies from '../transformer/currencies';


/**
 * [treeitem description]
 * @param  {Array}  [state=[]] [description]
 * @param  {OBJECT} action     [description]
 * @return {[type]}            [description]
 */
export function currencies(state = {}, action) {
    switch (action.type) {
        case AJAX_RESPONSE:
            switch (action.requestType) {
                case REQUEST_CURRENCIES:
                    return {
                        ...state,
                        currencies: transformCurrencies(action.response),
                    };
            }
            break;
    }

    return state;
}
