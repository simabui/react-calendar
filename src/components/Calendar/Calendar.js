/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from '../Modal/ModalContainer';
import './Calendar.scss';
import {
  getter,
  headerOptions,
  timeFormat,
  getEventData,
} from './CalendarHelpers';

const modal = createRef();

export default class CalendarView extends Component {
  state = {
    isShown: false,
    isEdit: false,
    isDraggable: true,
    nowIndicator: true,
    dateEvent: '',
  };

  static propTypes = {
    events: PropTypes.arrayOf(PropTypes.object).isRequired,
    dragEvent: PropTypes.func.isRequired,
    getEvent: PropTypes.func.isRequired,
  };

  /*
   Opening Modal on clicking date
  */

  handleDay = e => {
    this.setState({
      isShown: true,
      isEdit: false,
      dateEvent: e.dateStr,
    });
    const blockCoords = this.getCoords(e.dayEl);
    this.setModalPosition(blockCoords, modal);
  };

  /*
   Edit event on Click
  */

  handleEditEvent = ({ event, el }) => {
    const gettedEvent = getEventData(event);
    const { getEvent } = this.props;
    // redux action
    getEvent(gettedEvent);
    this.setState({ isEdit: true, isShown: false });

    const blockCoords = this.getCoords(el);
    this.setModalPosition(blockCoords, modal);
  };

  /*
   Update event on dragging
  */

  handleDragEvent = arg => {
    const test = getter(arg);
    const { dragEvent } = this.props;
    dragEvent(test);
  };

  /*
    Close modal
  */

  handleClose = () => {
    this.setState({ isShown: false });
  };

  handleCloseEdit = () => {
    this.setState({ isEdit: false });
  };
  /*
    Render Modal in center of block
  */

  setModalPosition = (coords, el) => {
    el.current.style.left = `${coords.left}px`;
    el.current.style.top = `${coords.top}px`;
  };

  /*
    set coords of center
  */
  getCoords = elem => {
    const box = elem.getBoundingClientRect();
    return {
      top: box.bottom + pageYOffset + 10,
      left: box.left + pageXOffset - elem.offsetWidth / 2,
    };
  };

  render() {
    const {
      isDraggable,
      dateEvent,
      isShown,
      isEdit,
      nowIndicator,
    } = this.state;
    const { events } = this.props;

    return (
      <>
        <FullCalendar
          weekNumberCalculation="ISO"
          defaultView="dayGridMonth"
          header={headerOptions}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          events={events}
          eventTimeFormat={timeFormat}
          dateClick={this.handleDay}
          eventClick={this.handleEditEvent}
          eventDrop={this.handleDragEvent}
          eventStartEditable={isDraggable}
          eventResizeStart={this.handleEditEvent}
          nowIndicator={nowIndicator}
        />
        {isShown && (
          <Modal date={dateEvent} onClose={this.handleClose} innerRef={modal} />
        )}
        {isEdit && <Modal onClose={this.handleCloseEdit} innerRef={modal} />}
      </>
    );
  }
}
