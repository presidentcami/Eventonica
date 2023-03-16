// import { faV } from '@fortawesome/free-solid-svg-icons';
// import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Moment from "react-moment";
import FavoriteButton from './favoriteButton';

const EventCard = ({ event }) =>{
  const { id, title, location, eventtime, favorite } = event

// console.log("event component id", id)
    return(
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <FavoriteButton id={id} event={event} favorite={favorite} />
      {/* need to pass id in the event */}
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Date: {!eventtime ? "TBD" : <Moment format={"DD/MM/YYYY"}>{eventtime}</Moment>}</Card.Subtitle>
      <Card.Text>
        {location}
      </Card.Text>
    </Card.Body>
  </Card>
  )}

export default EventCard;