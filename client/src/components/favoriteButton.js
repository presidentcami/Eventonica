
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'

const FavoriteButton = ({ id, events, favorite, putRequest }) => {

    const [isFavorite, setIsFavorite] = useState(favorite);
    // const [favoriteIcon, setFavoriteIcon] = useState(farHeart)
// console.log(dbFavorite)
    // update favorite function
    // console.log(id, favorite)
    // write to database and update isFavorite
    // useEffect to trigger something when a value changes, setIsfavortite when favorite as a prop changes
    const changeTrueOrFalse = (e) => {
        e.preventDefault();
        putRequest(!isFavorite)
        setIsFavorite(!isFavorite)
        // how can we do this without manually setting 'setIsFavorite'?
    }
    // console.log(events)

    return (
        <div>
            <FontAwesomeIcon onClick={changeTrueOrFalse} icon={isFavorite ? solidHeart : emptyHeart} className="mb-2 onClick favorite" size='lg' spin />
        </div>
    )
}

export default FavoriteButton