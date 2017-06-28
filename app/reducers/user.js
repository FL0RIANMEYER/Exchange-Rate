import { SET_USER } from '../constants/action-types';


/**
 * [treeitem description]
 * @param  {Array}  [state=[]] 
 * @param  {OBJECT} action     
 * @return {[type]}            
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
