// Updated BookingForm.js with form validation
import React, { useState, useEffect } from 'react';
import Modal from './Modal'; // Adjust the path as necessary

function BookingForm({ availableTimes, setAvailableTimes, onDateChange }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    // State for validation messages
    const [dateError, setDateError] = useState('');
    const [timeError, setTimeError] = useState('');
    const [guestsError, setGuestsError] = useState('');

    const [showModal, setShowModal] = useState(false);

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        setDateError(''); // Reset date error when user changes the date
        if (onDateChange) {
            onDateChange(newDate);
        }
    };

    const validateForm = () => {
        let isValid = true;
        // Date validation
        if (!date) {
            setDateError('Date is required.');
            isValid = false;
        } else if (isNaN(Date.parse(date))) { // Checks if the date is not a valid date
            setDateError('Please enter a valid date.');
            isValid = false;
        } else {
            setDateError('');
        }

        // Time validation
        if (!time) {
            setTimeError('Time is required.');
            isValid = false;
        } else {
            setTimeError('');
        }

        // Guests validation
        const guestsNumber = parseInt(guests, 10);
        if (guestsNumber < 1 || guestsNumber > 10) {
            setGuestsError('Number of guests must be between 1 and 10.');
            isValid = false;
        } else {
            setGuestsError('');
        }

        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Validate form before submission
        if (!validateForm()) {
            return; // Stop form submission if validation fails
        }
        const formData = { date, time, guests, occasion };
        console.log("Submitting Form Data", formData);

        setShowModal(true); // Show modal on form submission

        // Simulate booking process
        setTimeout(() => {
            setShowModal(false); // Hide modal after 2 seconds
            // Here, you can also reset form state or perform other actions
        }, 2000);
    };

    return (

        <div className="form-container">
        <Modal show={showModal} onClose={() => setShowModal(false)}></Modal>
            <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
                <h2>Book Now</h2>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDateChange} aria-label="Choose date" />
                {dateError && <div style={{ color: 'red' }}>{dateError}</div>}

                <label htmlFor="res-time">Choose time</label>
                <select value={time} onChange={e => setTime(e.target.value)} aria-label="Choose time">
                    <option value="">Select Time</option>
                    {availableTimes && availableTimes.map(time => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
                {timeError && <div style={{ color: 'red' }}>{timeError}</div>}

                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} aria-label="Number of guests" />
                {guestsError && <div style={{ color: 'red' }}>{guestsError}</div>}

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