import { connect } from 'react-redux';
import getEvents from '../../redux/events/eventsSelectors';
import Calendar from './Calendar';

const mapStateToProps = state => {
  return {
    events: getEvents(state),
  };
};

export default connect(mapStateToProps)(Calendar);
