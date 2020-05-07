/* eslint-disable react/no-did-update-set-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form';

class Modal extends Component {
  state = {
    time: '00:00',
    date: '',
    title: '',
    notes: '',
    error: '',
    id: '',
    allDay: false,
  };

  static propTypes = {
    date: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    setEvent: PropTypes.func.isRequired,
    editEvent: PropTypes.func.isRequired,
    deleteEvent: PropTypes.func.isRequired,
    innerRef: PropTypes.shape({}).isRequired,
    event: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      hours: PropTypes.string.isRequired,
      notes: PropTypes.string,
      id: PropTypes.string,
    }).isRequired,
  };

  static defaultProps = {
    date: '',
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
    const { date, event } = this.props;
    if (date) {
      // if choosed add new event
      this.setState({ date });
    } else if (event) {
      // if choosed edit event
      this.setState({
        title: event.title,
        date: event.date,
        time: event.hours,
        notes: event.notes,
        id: event.id,
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { date, event } = this.props;
    if (prevProps.date !== date) {
      this.setState({ date });
    }

    // update edit modal
    if (prevProps.event !== event) {
      this.setState({
        title: event.title,
        date: event.date,
        time: event.hours,
        notes: event.notes,
        id: event.id,
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    // call parent function
    const { onClose } = this.props;
    onClose();
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, notes, time, date, allDay, id } = this.state;
    const { setEvent, editEvent, onClose } = this.props;
    // format start event
    const eventTime = `${date}T${time}:00`;
    // validation
    if (title.length > 30) {
      this.setState({ error: 'Title should not be longer than 30 chars' });
      return;
    }
    this.setState({ error: '' });
    // redux action
    if (!id) {
      // create new event
      setEvent({ title, notes, start: eventTime, allDay, id: uuidv4() });
    } else {
      // edit event
      editEvent({ title, notes, start: eventTime, allDay, id });
    }
    onClose();
  };

  handleDelete = () => {
    const { deleteEvent, onClose } = this.props;
    deleteEvent(this.state);
    onClose();
  };

  render() {
    const { onClose, innerRef } = this.props;
    const { error } = this.state;
    return (
      <div className="form-modal" ref={innerRef}>
        <form onSubmit={this.handleSubmit}>
          <Form
            state={this.state}
            onClose={onClose}
            onChange={this.handleChange}
            error={error}
            onDelete={this.handleDelete}
          />
        </form>
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <Modal innerRef={ref} {...props} />
));
