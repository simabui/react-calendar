/* eslint-disable react/no-did-update-set-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

class Modal extends Component {
  state = {
    time: '00:00',
    date: '',
    title: '',
    notes: '',
    error: '',
    allDay: false,
  };

  static propTypes = {
    date: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    setEvent: PropTypes.func.isRequired,
    innerRef: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
    const { date } = this.props;
    this.setState({ date });
  }

  componentDidUpdate(prevProps) {
    const { date } = this.props;
    if (prevProps.date !== date) {
      this.setState({ date });
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
    const { title, notes, time, date, allDay } = this.state;
    const { setEvent, onClose } = this.props;
    // format start event
    const eventTime = `${date}T${time}:00`;

    // validation
    if (title.length > 10) {
      this.setState({ error: 'Title should not be longer than 30 chars' });
      return;
    }
    this.setState({ error: '' });
    // save to redux
    setEvent({ title, notes, start: eventTime, allDay });
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
          />
        </form>
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <Modal innerRef={ref} {...props} />
));
