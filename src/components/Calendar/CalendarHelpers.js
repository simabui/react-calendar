export function getter({ event }) {
  return {
    title: event.title,
    notes: event.notes,
    start: event.start,
    allDay: event.allDay,
    id: event.id,
  };
}

/*
   Fullcalendar options
*/
export const headerOptions = {
  left: 'today,prev,next',
  center: 'title',
  right: 'dayGridMonth,timeGridWeek,timeGridDay',
  prev: 'left-double-arrow',
};
export const timeFormat = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};
