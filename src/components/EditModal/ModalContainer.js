import { connect } from 'react-redux';
import putData from '../../redux/events/eventsOperations';
import Modal from './Modal';

// redux
const mapDispatchToProps = dispatch => {
  return {
    setEvent: user => dispatch(putData(user)),
  };
};

export default connect(null, mapDispatchToProps)(Modal);
