import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './Calendar.scss';

export default class CalendarView extends Component {
  state = {};

  render() {
    return (
      <div>
        <Calendar calendarType="ISO 8601" locale="en-US" />
      </div>
    );
  }
}
