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
    isDraggable: true,
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
      dateEvent: e.dateStr,
    });
    const blockCoords = this.getCoords(e.dayEl);
    this.setModalPosition(blockCoords, modal);
  };

  /*
   Edit event on Click
  */
  // FIXME: fix show time and dynamic change date
  handleEditEvent = ({ event, el }) => {
    const gettedEvent = getEventData(event);
    // redux func
    const { getEvent } = this.props;
    getEvent(gettedEvent);
    this.setState({ isShown: true });
    // set modal position
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
          header={headerOptions}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          events={events}
          eventTimeFormat={timeFormat}
          dateClick={this.handleDay}
          eventClick={this.handleEditEvent}
          eventDrop={this.handleDragEvent}
          eventStartEditable={isDraggable}
          eventResizeStart={this.handleEditEvent}
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
        {/* <TransitionGroup>
          {isEdit && (
            <CSSTransition
              in={isShown}
              timeout={200}
              classNames={PopTransition}
            >
              <Modal onClose={this.handleClose} innerRef={modal} />
            </CSSTransition>
          )}
        </TransitionGroup> */}
      </>
    );
  }
}
