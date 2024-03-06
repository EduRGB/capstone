import React, { useReducer, useState } from 'react';

// Reducer function to update times
const updateTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATE':
      return { ...state, date: action.payload };
    case 'UPDATE_TIME':
      return { ...state, time: action.payload };
    default:
      return state;
  }
};

// Reducer function to initialize times
const initializeTimesReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_TIMES':
      return { date: '', time: '' };
    default:
      return state;
  }
};

const BookingForm = () => {
  const [times, updateTimesDispatch] = useReducer(updateTimesReducer, { date: '', time: '' });
  const [, initializeTimesDispatch] = useReducer(initializeTimesReducer, {});

  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission here
    console.log('Reservation submitted:', { date: times.date, time: times.time, numberOfGuests, occasion });
  };

  const handleDateChange = (e) => {
    updateTimesDispatch({ type: 'UPDATE_DATE', payload: e.target.value });
  };

  const handleTimeChange = (e) => {
    updateTimesDispatch({ type: 'UPDATE_TIME', payload: e.target.value });
  };

  const handleInitializeTimes = () => {
    initializeTimesDispatch({ type: 'INITIALIZE_TIMES' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={times.date}
          onChange={handleDateChange}
          required
        />
      </div>

      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={times.time}
          onChange={handleTimeChange}
          required
        />
      </div>

      <div>
        <label htmlFor="numberOfGuests">Number of Guests:</label>
        <input
          type="number"
          id="numberOfGuests"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(parseInt(e.target.value, 10))}
          min="1"
          required
        />
      </div>

      <div>
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option value="">Select an Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <button type="submit" onClick={handleInitializeTimes}>
        Submit Reservation
      </button>
    </form>
  );
};

export default BookingForm;
