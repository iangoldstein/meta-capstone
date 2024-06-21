import { render, screen } from '@testing-library/react';
import { initializeTimes, updateTimes } from './components/Bookings';
import BookingForm from './components/BookingForm'; // Add this line

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

describe('initializeTimes function', () => {
  test('should return correct initial times', () => {
      const times = initializeTimes();
      expect(times).toEqual(['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']);
  });
});

/* The updateTimes function should return the same times regardless of the date.
   This behavior may need to be changed if the application logic changes */
describe('updateTimes function', () => {
  test('should return same times regardless of date', () => {
      const times = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
      const newTimes = updateTimes(times, { date: '2022-12-31' });
      expect(newTimes).toEqual(times);
  });

  test('should return an empty array for empty times array', () => {
      const times = [];
      const newTimes = updateTimes(times, { date: '2022-12-31' });
      expect(newTimes).toEqual([]);
  });
});