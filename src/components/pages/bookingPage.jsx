import BookingForm from '../booking/BookingForm';
import { useReducer } from "react";
import { fetchAPI } from "../../bookingsAPI";

export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <header className="reserve-table">
      <div className="reserve-header-text">
        <h1>Personal Details</h1>
      </div>
      </header>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}