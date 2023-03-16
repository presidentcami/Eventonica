// import { faV } from '@fortawesome/free-solid-svg-icons';
// import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Moment from "react-moment";
import FavoriteButton from './favoriteButton';

const EventCard = (props) =>{
  
  const id = props.id
  console.log(props.event)
// need to pass event_id, will also be in my request URL
  const putRequest = async(favoriteOrNot) => {
    // let favorite = props.favorite;
    let event = props.event;

    event[`${id}`].favorite = favoriteOrNot;

    console.log("what is this boolean?", event[`${id}`].favorite)

    const response = await fetch(`http://localhost:8080/api/events/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json" },
          body: JSON.stringify({favorite: favoriteOrNot}),
        })
    const content = await response.json();
    console.log("put request content", content, "favorite true or false", event[`${id}`].favorite, "event --> updates on refresh but updates database", props.event)
        window.location = "/";
  }

    return(
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <FavoriteButton id={props.id} events={props.event} favorite={props.favorite} putRequest={putRequest} />
      {/* need to pass id in the event */}
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Date: {!props.time ? "TBD" : <Moment format={"DD/MM/YYYY"}>{props.time}</Moment>}</Card.Subtitle>
      <Card.Text>
        {props.location}
      </Card.Text>
    </Card.Body>
  </Card>
  )}

export default EventCard;