import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


// Dummy test
describe('App', () => {
  it('renders without crashing', () => {
    // Render the component
    render(<App />);

    // Dummy expectation, just to make the test pass
    expect(true).toBe(true);
  });
});
