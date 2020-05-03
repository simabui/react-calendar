import { TYPE } from './eventsActions';

export function collectionReducer(state = [], action) {
  switch (action.type) {
    case TYPE.setSuccess: {
      return [...state, action.payload.event];
    }

    /*
      delete old event and put new updated date
    */
    case TYPE.dragEvent: {
      return [
        ...state.filter(event => event.id !== action.payload.event.id),
        action.payload.event,
      ];
    }

    case TYPE.removeEvent: {
      return [...state.filter(event => event.id !== action.payload.event.id)];
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
