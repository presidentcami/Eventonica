import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash as solidTrash } from '@fortawesome/free-solid-svg-icons'


const DeleteButton = ({ id, setEvents }) => {

    const deleteRequest = async (e) => {
        console.log(id)
        e.preventDefault()
        try {
            fetch(`http://localhost:8080/api/events/${id}`, {
                method: "DELETE"
            })
                .then((response) => response.json())
                .then(events => {
                    setEvents(events);
                    console.log('Events fetched when event is deleted', events);
                })
            // console.log(deleteEvent)
        } catch (err) {
            console.err(err.message)
        }
    }

    return (
        <div>
            <FontAwesomeIcon className='trashIcon onClick' icon={solidTrash} onClick={deleteRequest} size='lg' />
        </div>
    )
}

export default DeleteButton