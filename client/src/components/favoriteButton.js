
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

const FavoriteButton = () => {

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

    return (
        <div>
            <FontAwesomeIcon onClick={changeIcon} icon={favorite} className="mb-2 onClick favorite" size='lg' spin />
        </div>
    )
}

export default FavoriteButton