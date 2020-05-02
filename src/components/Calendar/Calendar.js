import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from '../Modal/ModalContainer';
import './Calendar.scss';

export default class CalendarView extends Component {
  state = {
    isShown: false,
    isDraggable: true,
    dateChange: '',
  };

  static propTypes = {
    events: PropTypes.arrayOf(PropTypes.object).isRequired,
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

  handleModal = () => {
    this.setState(state => {
      return {
        isShown: !state.isShown,
      };
    });
  };

  render() {
    const { isDraggable, dateChange, isShown } = this.state;
    const { events } = this.props;
    return (
      <div>
        <FullCalendar
          weekNumberCalculation="ISO"
          defaultView="dayGridMonth"
          header={{
            left: 'today,prev,next',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
            prev: 'left-double-arrow',
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          events={events}
          eventTimeFormat={{
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          }}
          dateClick={this.handleDay}
          editable={isDraggable}
        />
        {isShown && <Modal date={dateChange} onClose={this.handleModal} />}
      </div>
    );
  }
}
