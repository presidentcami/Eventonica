import Card from 'react-bootstrap/Card';
import Moment from "react-moment";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

const EventCard = (props) =>{

  const [favorite, setFavorite] = useState(farHeart)
  
  const changeIcon = (e) => {
    e.preventDefault();
    let favoriteOrNot;
    if (favorite === farHeart) {
      favoriteOrNot = fasHeart;
      setFavorite(favoriteOrNot);
    } else {
      favoriteOrNot = farHeart;
      setFavorite(favoriteOrNot);
    }
  }

    return(
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <FontAwesomeIcon onClick={changeIcon} icon={favorite} className="mb-2 onClick" spin />
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Date: {!props.time ? "TBD" : <Moment format={"DD/MM/YYYY"}>{props.time}</Moment>}</Card.Subtitle>
      <Card.Text>
        {props.location}
      </Card.Text>
    </Card.Body>
  </Card>
  )}

export default EventCard;