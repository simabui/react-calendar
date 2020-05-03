/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from '../Modal/ModalContainer';
import './Calendar.scss';
import PopTransition from '../../styles/pop.module.css';

const modal = createRef();

export default class CalendarView extends Component {
  state = {
    isShown: false,
    isDraggable: true,
    dateEvent: '',
  };

  static propTypes = {
    events: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  /*
   Opening Modal on clicking date
  */

  handleDay = e => {
    this.setState({
      isShown: true,
      dateEvent: e.dateStr,
    });
    const blockCoords = this.getCoords(e.dayEl);
    this.setModalPosition(blockCoords, modal);
  };

  /*
   Edit event on Click
  */

  handleEditEvent = arg => {
    console.log(arg);
  };

  /*
   Update event on dragging
  */

  handleDragEvent = arg => {
    console.log(arg);
  };

  /*
    Close modal
  */

  handleClose = () => {
    this.setState({ isShown: false });
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
      top: box.top + pageYOffset + elem.offsetHeight / 2,
      left: box.left + pageXOffset - elem.offsetWidth / 2,
    };
  };

  render() {
    const { isDraggable, dateEvent, isShown } = this.state;
    const { events } = this.props;

    return (
      <>
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
          eventClick={this.handleEditEvent}
          eventDragStop={this.handleDragEvent}
          editable={isDraggable}
        />
        <TransitionGroup>
          {isShown && (
            <CSSTransition
              in={isShown}
              timeout={200}
              classNames={PopTransition}
            >
              <Modal
                date={dateEvent}
                onClose={this.handleClose}
                innerRef={modal}
              />
            </CSSTransition>
          )}
        </TransitionGroup>
      </>
    );
  }
}
