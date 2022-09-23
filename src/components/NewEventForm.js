import { useState } from 'react';
import './NewEventForm.css';
import { v4 as uuid } from 'uuid';

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('Orlando');
  const reset = () => {
    setTitle('');
    setDate('');
    setLocation('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      location: location,
      id: uuid().slice(0, 8),
    };
    if (event.title && event.date) {
      addEvent(event);
      reset();
    }
  };
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title: </span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event Date: </span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Event Location: </span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="tampa">Tampa</option>
          <option value="orlando">Orlando</option>
          <option value="miami">Miami</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}
