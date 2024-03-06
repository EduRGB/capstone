import React, { useReducer, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  date: Yup.string().required('Date is required'),
  time: Yup.string().required('Time is required'),
  numberOfGuests: Yup.number().min(1, 'Number of Guests must be at least 1').required('Number of Guests is required'),
  occasion: Yup.string().required('Occasion is required').notOneOf([''], 'Please select an Occasion'),
});


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
  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      numberOfGuests: 1,
      occasion: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Reservation submitted:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.date && formik.errors.date && <div>{formik.errors.date}</div>}
      </div>

      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formik.values.time}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.time && formik.errors.time && <div>{formik.errors.time}</div>}
      </div>

      <div>
        <label htmlFor="numberOfGuests">Number of Guests:</label>
        <input
          type="number"
          id="numberOfGuests"
          name="numberOfGuests"
          value={formik.values.numberOfGuests}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          min="1"
          required
        />
        {formik.touched.numberOfGuests && formik.errors.numberOfGuests && <div>{formik.errors.numberOfGuests}</div>}
      </div>

      <div>
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          name="occasion"
          value={formik.values.occasion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        >
          <option value="">Select an Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion && <div>{formik.errors.occasion}</div>}
      </div>

      <button type="submit">Submit Reservation</button>
    </form>
  );
};

export default BookingForm;
