import { TYPE } from './eventsActions';

export function collectionReducer(state = [], action) {
  switch (action.type) {
    case TYPE.setSuccess: {
      return [...state, action.payload.event];
    }

    /*
      delete old event and put new updated date
    */
    case TYPE.dragEvent:
    case TYPE.editSuccess: {
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
    case TYPE.setFail:
    case TYPE.editFail: {
      return action.payload.err;
    }

    default:
      return state;
  }
}

const defaultData = {
  date: '',
  hours: '',
  title: '',
  notes: '',
  allDay: false,
};

export function eventToEditReducer(state = defaultData, action) {
  switch (action.type) {
    case TYPE.eventToEdit: {
      return action.payload.event;
    }

    default:
      return state;
  }
}
