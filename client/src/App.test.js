import { render, screen } from '@testing-library/react';
import App from './App';
// import DeleteButton from './deleteButton';
// import FavoriteButton from './favoriteButton';
// import EventCard from "./eventCard";
import Events from './components/events';
import NewEventForm from './components/newEventForm';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// First Test - Fix it to Pass
// describe("Events", () => {
//   test("renders Events component", () => {
//     render(<Events />);
//   });
// });

// Can you fix the project so we pass this test?  Hint: Don't only change this test!
// describe("Event Cards", () => {
//   test("renders my event cards component", () => {
//     render(<EventCard />);
//   });
// });

//Third Test - Fix it to Pass
describe("New Event Form", () => {
  test("render the New Event Form component", () => {
    render(<NewEventForm />);
  });
});

// Can you fix the test so we pass it?  Hint: Change this test!
test("renders Techtonica title", () => {
  render(<App />);
  expect(screen.getByText(/Techtonica/));
});

// Can you fix the project so we pass this test?  Hint: Don't only change this test!
test("renders add new event Button", () => {
  render(<NewEventForm />);
  screen.getByRole("button", {
    name: /Add a New Event!/
  });
});