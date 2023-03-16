import Card from 'react-bootstrap/Card';
import Moment from "react-moment";
import DeleteButton from './deleteButton';
import FavoriteButton from './favoriteButton';

const EventCard = ({ event, setEvents }) =>{
  const { id, title, location, eventtime, favorite } = event

// console.log("event component id", id)
    return(
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <FavoriteButton id={id} event={event} favorite={favorite} />
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Date: {!eventtime ? "TBD" : <Moment format={"DD/MM/YYYY"}>{eventtime}</Moment>}</Card.Subtitle>
      <Card.Text>
        {location}
      </Card.Text>
      <DeleteButton id={id} setEvents={setEvents} />
    </Card.Body>
  </Card>
  )}

export default EventCard;