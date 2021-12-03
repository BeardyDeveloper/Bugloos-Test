import { combineReducers, createStore } from 'redux';
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
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

// use browser redux-devtools extension for tracking states
const persistor = persistStore(
  store,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export { persistor, store };
