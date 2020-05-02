import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './Modal.scss';

export default class Modal extends Component {
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
  };

  componentDidMount() {
    const { date } = this.props;
    this.setState({ date });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
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
    const { time, date, title, notes, error } = this.state;
    const { onClose } = this.props;
    return (
      <div className="form-modal">
        <form onSubmit={this.handleSubmit}>
          <div className="modal">
            <TextField
              id="title"
              label="Event name"
              required
              onChange={this.handleChange}
              value={title}
              helperText={error}
              error={title.length > 10 && true}
            />
            <TextField
              id="date"
              label="Event date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.handleChange}
              value={date}
            />
            <TextField
              id="time"
              label="Event time"
              type="time"
              defaultValue={time}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.handleChange}
            />
            <TextField
              id="notes"
              label="Notes"
              onChange={this.handleChange}
              value={notes}
            />
            <div className="modal__buttons">
              <Button color="secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Save
              </Button>
            </div>
            <HighlightOffIcon className="modal__close" onClick={onClose} />
          </div>
        </form>
      </div>
    );
  }
}
