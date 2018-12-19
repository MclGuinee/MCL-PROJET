import { combineReducers } from 'redux';

import { authReducer } from "./auth/authReducer";
import { deliveryReducer } from "./delivery/deliveryReducer";

// Combine all the reducers
const rootReducer = combineReducers({ authReducer, deliveryReducer });

export default rootReducer;