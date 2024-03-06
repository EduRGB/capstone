import { render, screen } from "@testing-library/react";
import BookingForm from "./components/booking/BookingForm";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

const mockProps = {
  availableTimes: ["12:00 PM", "1:00 PM", "2:00 PM"],
  updateTimes: jest.fn(),
};

test("renders all form fields", () => {
  render(
    <Router>
        <BookingForm {...mockProps} />
    </Router>
  );
  expect(screen.getByLabelText("First Name")).toBeInTheDocument();
  expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
  expect(screen.getByLabelText("Email")).toBeInTheDocument();
  expect(screen.getByLabelText("Phone Number")).toBeInTheDocument();
  expect(screen.getByLabelText("Number of People")).toBeInTheDocument();
  expect(screen.getByLabelText("Select Date")).toBeInTheDocument();
  expect(screen.getByLabelText("Select Time")).toBeInTheDocument();
  expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
  expect(screen.getByLabelText("Seating preferences")).toBeInTheDocument();
});
