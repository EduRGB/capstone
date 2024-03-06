import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";

export default function ReservationForm() {
  const navigate = useNavigate();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState({});

  const [finalTime, setFinalTime] = useState([]);

  function handleDateChange(e) {
    const selectedDate = e.target.value;

    const availableTimes = [
      "12:00 PM",
      "12:30 PM",
      "1:00 PM",
      "1:30 PM",
      "2:00 PM",
      "2:30 PM",
    ];

    setFinalTime(availableTimes);
    setDate(selectedDate);
  }

  function validateForm() {
    const errors = {};

    if (!fName) {
      errors.fName = "First name is required";
      document.getElementById("fName").classList.add("invalid");
    } else {
      document.getElementById("fName").classList.remove("invalid");
    }

    if (!lName) {
      errors.lName = "Last name is required";
      document.getElementById("lName").classList.add("invalid");
    } else {
      document.getElementById("lName").classList.remove("invalid");
    }

    if (!email) {
      errors.email = "Email is required";
      document.getElementById("email").classList.add("invalid");
    } else if (!isValidEmail(email)) {
      errors.email = "Invalid email format";
      document.getElementById("email").classList.add("invalid");
    } else {
      document.getElementById("email").classList.remove("invalid");
    }

    if (!date) {
      errors.date = "Date is required";
      document.getElementById("date").classList.add("invalid");
    } else {
      document.getElementById("date").classList.remove("invalid");
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }


  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log("Form submitted successfully!");
      navigate("/little-lemon-capstone/confirmed");
    } else {
      console.log("Form validation failed!");
    }
  }

  return (
    <form className="reservation-form" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="fName">First Name</label> <br />
        <input
          type="text"
          id="fName"
          placeholder="First Name"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />
        {errors.fName && <span className="error">{errors.fName}</span>}
      </div>

      <div>
        <label htmlFor="lName">Last Name</label> <br />
        <input
          type="text"
          id="lName"
          placeholder="Last Name"
          value={lName}
          onChange={(e) => setLName(e.target.value)}
        />
        {errors.lName && <span className="error">{errors.lName}</span>}
      </div>

      <div>
        <label htmlFor="email">Email</label> <br />
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div>
        <label htmlFor="people">Number of People</label> <br />
        <input
          type="number"
          id="people"
          placeholder="Number of People"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="date">Select Date</label> <br />
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
        />
        {errors.date && <span className="error">{errors.date}</span>}
      </div>

      <div>
        <label htmlFor="time">Select Time</label> <br />
        <select id="time" disabled={!date}>
          {finalTime.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label> <br />
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="comments">Additional Comments</label> <br />
        <textarea
          id="comments"
          rows={8}
          cols={50}
          placeholder="Additional Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </div>

      <div>
        <button type="submit" className="action-button">
          Book Table
        </button>
      </div>
    </form>
  );
}

function isValidEmail(email) {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}