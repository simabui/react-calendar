import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import rootReducer from './combineReducers';

// middleWare
const middleWare = [ReduxThunk];
const enhancer = applyMiddleware(...middleWare);

// create base store
function configureStore(reducers) {
  // add extention as 3rd parameter
  return createStore(reducers, composeWithDevTools(enhancer));
}

export const store = configureStore(rootReducer);
export const persistor = persistStore(store);
