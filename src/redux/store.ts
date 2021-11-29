import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './reducers/authReducer';
import coursesReducer from './reducers/coursesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  courses: coursesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools());
store.subscribe(() => {
  store.getState();
});

export const persistor = persistStore(store);
