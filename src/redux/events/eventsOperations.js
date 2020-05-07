import * as actions from './eventsActions';

export const putData = data => dispatch => {
  dispatch(actions.setCollectionStart());

  try {
    dispatch(actions.setCollectionSuccess(data));
  } catch (err) {
    dispatch(actions.setCollectionFail(err));
  }
};

export const editEvent = event => dispatch => {
  dispatch(actions.editEventStart());

  try {
    dispatch(actions.editEventSuccess(event));
  } catch (err) {
    dispatch(actions.editEventFail(err));
  }
};
