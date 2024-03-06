import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from '../BookingForm';

describe('BookingForm', () => {
  // Test initializeTimes reducer
  it('initializes times correctly', () => {
    const { container } = render(<BookingForm />);
    const initializeButton = screen.getByText('Submit Reservation');

    fireEvent.click(initializeButton);

    // Assuming the initial state for times is an empty object
    expect(container.querySelector('#date').value).toBe('');
    expect(container.querySelector('#time').value).toBe('');
  });

  // Test updateTimes reducer
  it('updates times correctly', () => {
    const { container } = render(<BookingForm />);

    const dateInput = container.querySelector('#date');
    const timeInput = container.querySelector('#time');

    // Trigger a change event on the date and time inputs
    fireEvent.change(dateInput, { target: { value: '2024-03-06' } });
    fireEvent.change(timeInput, { target: { value: '12:00' } });

    // Check if the state has been updated
    expect(dateInput.value).toBe('2024-03-06');
    expect(timeInput.value).toBe('12:00');
  });
});
