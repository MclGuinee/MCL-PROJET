// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';

// import reducers from './rootReducer'; //Import the root reducer

// const enhancer = compose(applyMiddleware(thunk));

// export default createStore(reducers, enhancer);


import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './rootReducer'; // the value from combineReducers

const persistConfig = {
 key: 'root',
 storage: storage,
 whitelist: ['delivery'],
 blacklist: [],
 stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);