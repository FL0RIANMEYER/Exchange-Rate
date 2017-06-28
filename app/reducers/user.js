import { SET_USER } from '../constants/action-types';


/**
 * [treeitem description]
 * @param  {Array}  [state=[]] [description]
 * @param  {OBJECT} action     [description]
 * @return {[type]}            [description]
 */
export function user(state = {}, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user:  action.userData.user,
                token: action.userData.token,
            };
    }

    return state;
}
