import { connect } from 'react-redux';
import putData from '../../redux/events/eventsOperations';
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
    setEvent: user => dispatch(putData(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
