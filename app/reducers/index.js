import { combineReducers } from 'redux';

import { currencies } from './currencies';
import { signup     } from './signup';
import { search     } from './search';
import { user       } from './user';

export default combineReducers({
    currencies,
    signup,
    search,
    user,
});
