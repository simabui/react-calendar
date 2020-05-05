export const TYPE = {
  setStart: 'COLLECTION_SET_START',
  setSuccess: 'COLLECTION_SET_SUCCESS',
  setFail: 'COLLECTION_SET_FAIL',
  dragEvent: 'DRAG_EVENT',
  removeEvent: 'REMOVE_EVENT',
  eventToEdit: 'GET_EVENT_TO_EDIT',
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
export function removeEventSuccess(event) {
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
