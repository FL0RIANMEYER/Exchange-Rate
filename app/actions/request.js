import { REQUEST_CURRENCIES } from '../constants/action-types';

export const requestCurrencies = () => ({
    type: REQUEST_CURRENCIES,
    ajax: true,
    path: 'api/currencies',
});
