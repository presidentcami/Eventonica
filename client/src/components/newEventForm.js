import { useReducer, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

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



const NewEventForm = ({ setEvents }) => {

    const [state, dispatch] = useReducer(reducer, initialValue);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const inputAction = (event) => {
        event.preventDefault();
        
        dispatch({
            type: 'update',
            payload: { key: event.target.name, value: event.target.value },
        });
        
    };

// console.log("state", state)
    const onSubmit = async(e) => {
        e.preventDefault();
        try {
            fetch("http://localhost:8080/api/events/", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(state),
            })
            .then((response) => response.json())
            .then(events => {
                setEvents(events);
                console.log('Events fetched when new event is added', events);

            })
            // console.log(response)
            // window.location = "/"; 
        } catch (error) {
            console.error(error.message)
        }

    }

    return (
        <>
            <Button variant="primary" className='button' onClick={handleShow}>
                Add a New Event!
            </Button>
            <Modal show={show} onHide={handleClose}>
        <div className='newEventForm'>
            <Form  onSubmit={onSubmit}>
                <Form.Group>
                <Form.Label>Event Title</Form.Label>
                <Form.Control 
                    type="text" 
                    id="add-event-title"
                    placeholder="The Title of your Event"
                    required
                    defaultValue={state.title} //state
                    name="title"
                    onChange={inputAction}
                />
                </Form.Group>
                <Form.Group>
                <Form.Label>Place</Form.Label>
                <Form.Control
                    type="text"
                    id="add-event-location"
                    placeholder="The Location of your Event"
                    required
                    defaultValue={state.location} //state
                    name="location"
                    onChange={inputAction}
                />
                </Form.Group>
                <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control
                    type="date"
                    id="add-event-date"
                    defaultValue={state.eventtime} //state
                    name="eventtime"
                    onChange={inputAction}
                />
                </Form.Group>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button type="submit" variant="primary" onClick={handleClose}>
                    Add Event
                </Button>
            </Form>
        </div>
            </Modal>
      </>
    )
}

export default NewEventForm;