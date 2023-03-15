
const NewEventForm = () => {
    return (
        <div>
            <form>
                <label>Event Title</label>
                <input type="text" id="add-event-title"
                    placeholder="The Title of your Event"
                    required
                    // value={event.title} //state
                    // onChange={handleTitleChange}
                />
                <label>Place</label>
                <input
                    type="text"
                    id="add-event-location"
                    placeholder="The Location of your Event"
                    required
                    // value={event.location} //state
                    // onChange={handleLocationChange}
                />
                <label>Date</label>
                <input
                    type="date"
                    id="add-event-date"
                    // value={event.eventtime} //state
                    // onChange={handleDateChange}
                />
                <button type="submit" >Add Event</button>
            </form>
        </div>
    )
}

export default NewEventForm;