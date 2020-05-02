import { combineReducers } from 'redux';
import { collectionReducer, errorReducer } from './events/eventsReducers';

// create store states inside phonebook store
const collectionReducers = combineReducers({
  collection: collectionReducer,
  error: errorReducer,
});

// root reducer
const rootReducer = combineReducers({
  events: collectionReducers,
});

export default rootReducer;
