import Event_Item from '../Item/Event_Item';
import '../List/EventList.css';

const EventList = (props) => {
  if (props.events.length === 0) {
    return (
      <h2 className="event-list__fallback">
        В этом месяце все всё свободно. Пока что
      </h2>
    );
  }

  return (
    <ul className="event-list">
      {props.events.map((event) => (
        <Event_Item
          key={event.id}
          date={event.date}
          name={event.name}
          mail={event.mail}
        />
      ))}
    </ul>
  );
};

export default EventList;
