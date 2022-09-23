import './EventList.css';
export default function EventList({ events, handleClick }) {
  return (
    <div>
      {events.map((event, index) => (
        <div className="event-list" key={event.id}>
          <h2>
            {index + 1} - {event.title}
          </h2>
          <p>
            On {event.date} - in {event.location}
          </p>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
}
