import { connect } from 'react-redux';
import getEvents from '../../redux/events/eventsSelectors';
import {
  dragEventSuccess,
  removeEventSuccess,
} from '../../redux/events/eventsActions';
import Calendar from './Calendar';

const mapStateToProps = state => {
  return {
    events: getEvents(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeEvent: event => dispatch(removeEventSuccess(event)),
    dragEvent: event => dispatch(dragEventSuccess(event)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
