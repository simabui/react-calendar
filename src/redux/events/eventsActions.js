export const TYPE = {
  setStart: 'COLLECTION_SET_START',
  setSuccess: 'COLLECTION_SET_SUCCESS',
  setFail: 'COLLECTION_SET_FAIL',
  dragEvent: 'DRAG_EVENT',
  removeEvent: 'REMOVE_EVENT',
  eventToEdit: 'GET_EVENT_TO_EDIT',
  editStart: 'EDIT_EVENT_START',
  editSuccess: 'EDIT_EVENT_SUCCESS',
  editFail: 'EDIT_EVENT_FAIL',
};

export function setCollectionStart() {
  return {
    type: TYPE.setStart,
  };
}
export function setCollectionSuccess(event) {
  return {
    type: TYPE.setSuccess,
    payload: { event },
  };
}
export function setCollectionFail(err) {
  return {
    type: TYPE.setFail,
    payload: { err },
  };
}
export function dragEventSuccess(event) {
  return {
    type: TYPE.dragEvent,
    payload: { event },
  };
}
export function removeEvent(event) {
  return {
    type: TYPE.removeEvent,
    payload: { event },
  };
}

export function getEventToEdit(event) {
  return {
    type: TYPE.eventToEdit,
    payload: { event },
  };
}

export function editEventStart() {
  return {
    type: TYPE.editStart,
  };
}

export function editEventSuccess(event) {
  return {
    type: TYPE.editSuccess,
    payload: { event },
  };
}

export function editEventFail(err) {
  return {
    type: TYPE.editStart,
    payload: { err },
  };
}
