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

/*
   Format picked Event
*/

function formatMonth(month) {
  const newMonth = month + 1;
  return newMonth < 10 ? `0${newMonth}` : newMonth;
}
function formatDay(day) {
  return day < 10 ? `0${day}` : day;
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

export function getEventData({
  start: time,
  title,
  extendedProps: { notes },
  id,
  allDay,
}) {
  const month = formatMonth(time.getMonth());
  const day = formatDay(time.getDate());
  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  let formattedNotes = notes;

  // if notes empty set default
  if (!notes) {
    formattedNotes = '';
  }
  // return obj to save in store
  return {
    date: `${time.getFullYear()}-${month}-${day}`,
    hours: `${hours}:${minutes}`,
    notes: formattedNotes,
    title,
    id,
    allDay,
  };
}
