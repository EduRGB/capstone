import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from '../BookingForm';

describe('BookingForm', () => {
  it('should display error message for Date when submitted without entering a date', async () => {
    const { getByLabelText, getByText } = render(<BookingForm />);

    // Submit the form without entering a date
    fireEvent.click(screen.getByText('Submit Reservation'));

    // Check if the error message for Date is displayed
    await waitFor(() => {
      expect(getByText('Date is required')).toBeInTheDocument();
    });
  });
});
