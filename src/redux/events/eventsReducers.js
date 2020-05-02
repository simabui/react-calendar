import { TYPE } from './eventsActions';

export function collectionReducer(state = [], action) {
  switch (action.type) {
    case TYPE.setSuccess: {
      return [...state, action.payload.event];
    }

    default:
      return state;
  }
}

export function errorReducer(state = null, action) {
  switch (action.type) {
    case TYPE.setFail: {
      return action.payload.err;
    }

    default:
      return state;
  }
}
