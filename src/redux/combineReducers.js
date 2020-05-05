import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  collectionReducer,
  errorReducer,
  eventToEditReducer,
} from './events/eventsReducers';

const eventsPersistConfig = {
  key: 'events',
  storage,
  whitelist: ['collection'],
};

// create store states inside phonebook store
const collectionReducers = combineReducers({
  collection: collectionReducer,
  error: errorReducer,
  editedEvent: eventToEditReducer,
});

// root reducer
const rootReducer = combineReducers({
  events: persistReducer(eventsPersistConfig, collectionReducers),
});

export default rootReducer;
