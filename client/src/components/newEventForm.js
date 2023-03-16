import { useReducer } from 'react'

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

const NewEventForm = () => {

    const [state, dispatch] = useReducer(reducer, initialValue);

    const inputAction = (event) => {
        event.preventDefault();
        
        dispatch({
            type: 'update',
            payload: { key: event.target.name, value: event.target.value },
        });
        
    };

// console.log("state", state)
    return (
        <div>
            <form>
                <label>Event Title</label>
                <input 
                    type="text" 
                    id="add-event-title"
                    // placeholder="The Title of your Event"
                    required
                    defaultValue={state.title} //state
                    name="title"
                    onChange={inputAction}
                />
                <label>Place</label>
                <input
                    type="text"
                    id="add-event-location"
                    // placeholder="The Location of your Event"
                    required
                    defaultValue={state.location} //state
                    name="location"
                    onChange={inputAction}
                />
                <label>Date</label>
                <input
                    type="date"
                    id="add-event-date"
                    defaultValue={state.eventtime} //state
                    name="eventtime"
                    onChange={inputAction}
                />
                <button type="submit">Add Event</button>
            </form>
        </div>
    )
}

export default NewEventForm;