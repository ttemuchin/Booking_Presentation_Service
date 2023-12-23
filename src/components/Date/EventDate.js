import './EventDate.css';

function EventDate(props) {
  const month = props.date.toLocaleString('ru-RU', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('ru-RU', { day: '2-digit' });

  return (
    <div className="event-date">
      <div className="event-date__day">{day}</div>
      <div className="event-date__month'"> {month}</div>
      <div className="event-date__year">{year}</div>
    </div>
  );
}

export default EventDate;
