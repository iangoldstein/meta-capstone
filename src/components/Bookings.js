// Bookings.js
import React, { useState, useEffect, useReducer } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI } from '../js/api.js';


// Reducer function to update available times
function updateTimes(state, action) {
    // Fetch or calculate the available times based on the date
    console.log("updating times with " + action.date);
    let times = fetchAPI(new Date(action.date));
    console.log("times: " + times);
    return times ? times : [];
}

// Initial state for the available times
function initializeTimes() {
    const today = new Date();
    console.log("initializing times with " + today);
    let times = fetchAPI(today);
    console.log("times: " + times);
    return times;
}

function Bookings() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, [], initializeTimes);

    useEffect(() => {
        setAvailableTimes({ date: selectedDate });
    }, [selectedDate]);

    return (
        <div>
            <h1>Bookings</h1>
            <BookingForm onDateChange={setSelectedDate} dispatch={setAvailableTimes} availableTimes={availableTimes} />
        </div>
    );
}

export default Bookings;