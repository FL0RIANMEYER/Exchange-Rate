import { TOGGLE_SIGNUP } from '../constants/action-types';


/**
 * [treeitem description]
 * @param  {Array}  [state=[]] [description]
 * @param  {OBJECT} action     [description]
 * @return {[type]}            [description]
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
