import { connect } from 'react-redux';
import { putData, editEvent } from '../../redux/events/eventsOperations';
import { removeEvent } from '../../redux/events/eventsActions';
import { getEventToEdit } from '../../redux/events/eventsSelectors';
import Modal from './Modal';

// redux

const mapStateToProps = state => {
  return {
    event: getEventToEdit(state),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setEvent: event => dispatch(putData(event)),
    editEvent: event => dispatch(editEvent(event)),
    deleteEvent: event => dispatch(removeEvent(event)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
