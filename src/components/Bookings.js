// Bookings.js
import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

// Reducer function to update available times
function updateTimes(state, action) {
    // For now, return the same available times regardless of the date
    // In a real application, you would fetch or calculate the available times based on the date
    return action.date ? ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'] : [];
}

// Initial state for the available times
function initializeTimes() {
    return ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
}

function Bookings() {
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, [], initializeTimes);

    return (
        <div>
            <h1>Bookings</h1>
            <BookingForm dispatch={setAvailableTimes} availableTimes={availableTimes} />
        </div>
    );
}

export default Bookings;