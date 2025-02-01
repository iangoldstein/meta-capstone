// Bookings.js
import React, { useState, useEffect, useReducer } from 'react';
import BookingForm from './BookingForm.js';
import { fetchAPI, submitAPI } from '../js/api.js';


// Reducer function to update available times
function updateTimes(state, action) {
    // Fetch or calculate the available times based on the date
    console.log("updating times with " + action.date);
    let times = fetchAPI(new Date(action.date));
    console.log("updated times: " + times);
    return times ? times : [];
}

// Initial state for the available times
function initializeTimes() {
    const today = new Date();
    let times = fetchAPI(today);
    console.log("initialized times: " + times);
    return times;
}

function Bookings() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, [], initializeTimes);

    const [bookingStatus, setBookingStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        setAvailableTimes({ date: selectedDate });
    }, [selectedDate]);

    const bookTable = async () => {
        setBookingStatus('loading');
        try {
            const result = await submitAPI();
            if (result === true) {
                setBookingStatus('success');
                // Optionally, redirect to a confirmation page or update the UI to show success
            } else {
                setBookingStatus('error');
                setErrorMessage('Failed to book the table. Please try again.');
            }
        } catch (error) {
            setBookingStatus('error');
            setErrorMessage(`An error occurred: ${error.message}`);
        }
    };

    return (
        <div>
            <h1>Bookings</h1>
            <BookingForm
                onDateChange={setSelectedDate}
                dispatch={setAvailableTimes}
                availableTimes={availableTimes}
                onSubmit={bookTable} // Pass bookTable to BookingForm
            />
        </div>
    );
}

export default Bookings;