// Confirm Jest is Installed and Working
test('Confirm jest is working', () => {
  expect(1 + 1).toBe(2);
});

// Confirm React is Working
import { render, screen } from '@testing-library/react';
import React from 'react';

test('Renders a basic element', () => {
  render(<div>Hello, World!</div>);
  expect(screen.getByText("Hello, World!")).toBeInTheDocument();
});

// BookingForm test
import BookingForm from './components/BookingForm';

// Mock React Router
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});