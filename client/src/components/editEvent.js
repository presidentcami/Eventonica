import { useReducer, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit as emptyEdit } from '@fortawesome/free-regular-svg-icons'

const initialValue = {
    title: "",
    location: "",
    eventtime: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'update':
            return {
                ...state,
                [action.payload.key]: action.payload.value,
            };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};



const EditEventButton = ({ event, setEvents }) => {
    const { id, title, location, eventtime } = event

    const [state, dispatch] = useReducer(reducer, initialValue);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        initialValue.title = title;
        initialValue.location = location;
        initialValue.eventtime = eventtime;
        console.log(initialValue)        
        setShow(true)};

    const inputAction = (event) => {
        event.preventDefault();

        dispatch({
            type: 'update',
            payload: { key: event.target.name, value: event.target.value },
        });
        // console.log(state), logging to make sure that when I'm updating the event, it is actually changing
    };

    // console.log("state", state)
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("id", id)
        try {
            fetch(`http://localhost:8080/api/events/${id}`, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(state),
            })
                .then((response) => response.json())
                .then(events => {
                    setEvents(events);
                    console.log('Events fetched when event is edited', events);

                })
            // console.log(response)
            // window.location = "/"; 
        } catch (error) {
            console.error(error.message)
        }

    }

    return (
        <>
        <FontAwesomeIcon icon={emptyEdit} onClick={handleShow} className="editButton onClick" />
            <Modal show={show} onHide={handleClose}>
                <div className='editEventForm'>
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Label>Event Title</Form.Label>
                            <Form.Control
                                type="text"
                                id="add-event-title"
                                required
                                defaultValue={initialValue.title = title} //state
                                name="title"
                                onChange={inputAction}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Place</Form.Label>
                            <Form.Control
                                type="text"
                                id="add-event-location"
                                required
                                defaultValue={initialValue.location = location} //state
                                name="location"
                                onChange={inputAction}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                id="add-event-date"
                                defaultValue={initialValue.eventtime = eventtime} //state
                                name="eventtime"
                                onChange={inputAction}
                            />
                        </Form.Group>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button type="submit" variant="primary" onClick={handleClose}>
                            Edit Event
                        </Button>
                    </Form>
                </div>
            </Modal>
        </>
    )
}

export default EditEventButton;