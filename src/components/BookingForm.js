// BookingForm.js
import React, { useState, useEffect } from 'react';

function BookingForm({ availableTimes, setAvailableTimes, onDateChange }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        if (onDateChange) {
            onDateChange(newDate);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = { date, time, guests, occasion };
        console.log("Submitting Form Data" + formData);
        // Handle form submission here
    };

    return (
        <div className="form-container">
            <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
                <h2>Book Now</h2>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDateChange} aria-label="Choose date" />

                <label htmlFor="res-time">Choose time</label>
                <select value={time} onChange={e => setTime(e.target.value)} aria-label="Choose time">
                    {availableTimes && availableTimes.map(time => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} aria-label="Number of guests" />

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} aria-label="Occasion">
                    <option value="">Select Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>

                <input type="submit" value="Make Your reservation" aria-label="Make Your reservation" />
            </form>
        </div>
    );
}

export default BookingForm;