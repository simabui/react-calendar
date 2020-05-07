import { connect } from 'react-redux';
import { getEvents } from '../../redux/events/eventsSelectors';
import {
  dragEventSuccess,
  getEventToEdit,
} from '../../redux/events/eventsActions';
import Calendar from './Calendar';

const mapStateToProps = state => {
  return {
    events: getEvents(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dragEvent: event => dispatch(dragEventSuccess(event)),
    getEvent: event => dispatch(getEventToEdit(event)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
