import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'

const putRequest = async (favoriteOrNot, id) => {
    console.log(id)
    const response = await fetch(`http://localhost:8080/api/events/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ favorite: favoriteOrNot }),
    })
    const responseObj = await response.json();
    console.log("put request content", responseObj)
    return responseObj;
}

const FavoriteButton = ({ id, favorite }) => {

    const [isFavorite, setIsFavorite] = useState(favorite);
    // console.log(id)
    const changeTrueOrFalse = async (e) => {
        e.preventDefault();
        const responseObj = await putRequest(!isFavorite, id) // not 100% sure what's happening (awaiting cuz it's a putrequest? sending)

        setIsFavorite(responseObj.newFaveValue) // where are we changing again what is favorite and what is not? oh on line 30
    }

    return (
        <div>
            <FontAwesomeIcon onClick={changeTrueOrFalse} icon={isFavorite ? solidHeart : emptyHeart} className="mb-2 onClick favorite" size='lg' />
        </div>
    )
}

export default FavoriteButton