import { SET_USER } from '../constants/action-types';

export const setUser = userData => ({
    type: SET_USER,
    userData,
});
