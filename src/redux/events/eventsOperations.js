import * as actions from './eventsActions';

const putData = data => dispatch => {
  dispatch(actions.setCollectionStart());

  try {
    dispatch(actions.setCollectionSuccess(data));
  } catch (err) {
    dispatch(actions.setCollectionFail(err));
  }
};
export default putData;
