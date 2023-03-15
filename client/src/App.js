import './App.css';
import Events from './components/events';
import NewEventForm from './components/newEventForm';

function App() {
  return (
    <div className="App">
      <h1>Techtonica 2023 events</h1>
    <Events />
    <NewEventForm />
    </div>
  );
}

export default App;
