import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { collectionReducer, errorReducer } from './events/eventsReducers';

const eventsPersistConfig = {
  key: 'events',
  storage,
  whitelist: ['collection'],
};

// create store states inside phonebook store
const collectionReducers = combineReducers({
  collection: collectionReducer,
  error: errorReducer,
});

// root reducer
const rootReducer = combineReducers({
  events: persistReducer(eventsPersistConfig, collectionReducers),
});

export default rootReducer;
