import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Moment from "react-moment";
import FavoriteButton from './favoriteButton';

const EventCard = (props) =>{
  
  const id = props.id
  // console.log(id)
// need to pass event_id, will also be in my request URL
  const putRequest = async(id) => {
    const favorite = {
      favorite: false
    };

    console.log({ favorite })

    const response = await fetch(`http://localhost:8080/api/events/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json" },
          body: JSON.stringify({favorite}),
        })
    const content = await response.json();
    console.log("put request content", content)

  }
    // const putRequest = (isFavorite) => {
    //   // const body = props.favorite;
    //   const favorite = {favorite: true}
    //   return fetch(`http://localhost:8080/api/events/${id}`, {
    //       method: "PUT",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({favorite}),
    //     })
    //     .then((response) => {
    //       console.log("put request", response.json())
    //       return response.json();
    //     })
    //     // .then((data) => {
    //     //   // console.log("just checking", isFavorite)
    //     // })
    // }

    // useEffect(() => 
    // // eslint-disable-next-line
    // {putRequest()}, [])

    return(
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <FavoriteButton id={props.id} events={props.event} favorite={props.favorite} putRequest={putRequest} onClick={putRequest(id)} />
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