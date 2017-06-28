import { TOGGLE_SIGNUP, SIGNUP_USER } from '../constants/action-types';

export const toggleSignup = () => ({
    type: TOGGLE_SIGNUP,
});

export const signupUser = (mail) => ({
    type: SIGNUP_USER,
    ajax: true,
    method: 'POST',
    path: 'signup',
    body: { user: mail },
});
