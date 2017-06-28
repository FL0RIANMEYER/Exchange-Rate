import { AJAX_RESPONSE, REQUEST_CURRENCIES } from '../constants/action-types';
import transformCurrencies from '../transformer/currencies';


/**
 *
 * @param  {Array}  [state=[]] 
 * @param  {OBJECT} action     
 * @return {[type]}            
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
