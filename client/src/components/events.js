import { useEffect } from "react";
import EventCard from "./eventCard";
import CardGroup from 'react-bootstrap/CardGroup';


function Events({ events, setEvents }) {

  const getRequest = () => {
    fetch("http://localhost:8080/api/events")
      .then((response) => response.json())
      .then(events => {
        setEvents(events);
        console.log('Events fetched...', events);
      });
  }
  useEffect(() => {
    getRequest()
  }, // eslint-disable-next-line
  []);

  return (
    <CardGroup className="Events">
            {events.map(event =>
            <EventCard event={event} key={event.id} setEvents={setEvents} />
            )}
    </CardGroup>
  );
}

export default Events;