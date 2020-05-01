import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from '../Modal/Modal';
import './Calendar.scss';

export default class CalendarView extends Component {
  state = {
    isShown: false,
    isDraggable: true,
    dateChange: '',
  };

  handleDay = e => {
    console.log(e);
    this.setState(state => {
      return {
        isShown: !state.isShown,
        dateChange: e.dateStr,
      };
    });
  };

  render() {
    const { isDraggable, dateChange, isShown } = this.state;

    return (
      <div>
        <FullCalendar
          defaultView="dayGridMonth"
          header={{
            left: 'today,prev,next',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
            prev: 'left-double-arrow',
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          // events={}
          dateClick={this.handleDay}
          editable={isDraggable}
        />
        {isShown && <Modal date={dateChange} />}
      </div>
    );
  }
}
