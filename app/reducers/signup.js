import { TOGGLE_SIGNUP } from '../constants/action-types';


/**
 *
 * @param  {Array}  [state=[]]
 * @param  {OBJECT} action
 * @return {[type]}   
 */
export function signup(state = {}, action) {
    switch (action.type) {
        case TOGGLE_SIGNUP:
            return {
                ...state,
                visibility: !state.visibility,
            };
        default:
            return state;
    }
}
