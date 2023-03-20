import './App.css';
import Events from './components/events';
import NewEventForm from './components/newEventForm';
import {useState} from 'react'

function App() {
  const [events, setEvents] = useState([]);
  return (
    <div className="App">
      <h1>Techtonica 2023 events</h1>
    <Events events={events} setEvents={setEvents} />
    <NewEventForm setEvents={setEvents} />
    </div>
  );
}

export default App;
