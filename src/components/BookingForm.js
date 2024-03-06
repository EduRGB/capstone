import React, { useState } from 'react';

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission here
    console.log('Reservation submitted:', { date, time, numberOfGuests, occasion });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
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

      <button type="submit">Submit Reservation</button>
    </form>
  );
};

export default BookingForm;
