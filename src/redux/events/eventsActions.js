export const TYPE = {
  setStart: 'COLLECTION_SET_START',
  setSuccess: 'COLLECTION_SET_SUCCESS',
  setFail: 'COLLECTION_SET_FAIL',
  dragEvent: 'DRAG_EVENT',
  removeEvent: 'REMOVE_EVENT',
};

/* SET */
export function setCollectionStart() {
  return {
    type: TYPE.setStart,
  };
}
export function setCollectionSuccess(event) {
  return {
    type: TYPE.setSuccess,
    // update arr of objs
    payload: { event },
  };
}
export function setCollectionFail(err) {
  return {
    type: TYPE.setFail,
    // update arr of objs
    payload: { err },
  };
}
export function dragEventSuccess(event) {
  return {
    type: TYPE.dragEvent,
    // update arr of objs
    payload: { event },
  };
}
export function removeEventSuccess(event) {
  return {
    type: TYPE.removeEvent,
    // update arr of objs
    payload: { event },
  };
}
