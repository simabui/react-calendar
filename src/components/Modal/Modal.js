import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

export default class Modal extends Component {
  state = {
    time: '00:00',
    date: '',
    title: '',
  };

  static propTypes = {
    date: PropTypes.string.isRequired,
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
  };

  render() {
    const { time, date, title } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="title"
            label="Event name"
            required
            onChange={this.handleChange}
            value={title}
          />
          <TextField
            id="date"
            label="Event date"
            type="date"
            // defaultValue={date}
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
        </form>
      </div>
    );
  }
}
