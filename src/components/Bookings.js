// Bookings.js
import React, { useState } from 'react';
import BookingForm from './BookingForm';

function Bookings() {
    const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

    return (
        <div className="booking-container">
            <BookingForm 
                availableTimes={availableTimes} 
                setAvailableTimes={setAvailableTimes} 
            />
        </div>
    );
}

export default Bookings;