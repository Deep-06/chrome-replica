

import { legacy_createStore , applyMiddleware} from 'redux';
import {thunk} from "redux-thunk";
import networkReducer from './reducer';

const store = legacy_createStore(networkReducer, applyMiddleware(thunk));

export default store;
