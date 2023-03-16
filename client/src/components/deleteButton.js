import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash as solidTrash } from '@fortawesome/free-solid-svg-icons'

const DeleteButton = () => {
    return (
        <div>
            <FontAwesomeIcon className='trashIcon' icon={solidTrash} />
        </div>
    )
}

export default DeleteButton