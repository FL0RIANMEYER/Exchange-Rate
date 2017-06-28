import { createStore, applyMiddleware, compose  } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';

import rootReducer from './reducers';
import middleware  from './middleware';

const defaultState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    defaultState,
    composeEnhancers(applyMiddleware(...middleware), autoRehydrate()),
);


persistStore(store, {blacklist: ['search']});


export default store;
