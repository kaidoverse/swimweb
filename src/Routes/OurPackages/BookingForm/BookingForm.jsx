import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
    const { packageName } = useParams();
    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        age: '',
        additionalInfo: '',
    });

    const availableTimes = ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'];
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingDetails({ ...bookingDetails, [name]: value });
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        setBookingDetails({ ...bookingDetails, date: e.target.value });
    };

    const handleTimeChange = (time) => {
        setSelectedTime(time);
        setBookingDetails({ ...bookingDetails, time });
    };

    // Move to the next step
    const handleNext = () => setStep(2);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Booking Details:', bookingDetails);
        navigate('/booking-confirmation');
    };

    return (
        <div className="booking-container">
            <h2>{packageName.replace('-', ' ')} Package</h2>

            {step === 1 && (
                <div className="step-one-container">
                    {/* Left Column: Date and Time Selection */}
                    <div className="left-column">
                        <label>Select Preferred Date</label>
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            required
                        />

                        <label>Select Time</label>
                        <div className="time-slots">
                            {availableTimes.map((time, index) => (
                                <button
                                    key={index}
                                    className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                                    onClick={() => handleTimeChange(time)}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Service Details */}
                    <div className="right-column">
                        <div className="service-details">
                            <h3>Service Details</h3>
                            <p><strong>Package:</strong> {packageName.replace('-', ' ')}</p>
                            <p><strong>Date:</strong> {selectedDate || 'Not selected'}</p>
                            <p><strong>Time:</strong> {selectedTime || 'Not selected'}</p>
                            <p><strong>Age:</strong> {bookingDetails.age || 'Not provided'}</p> {/* Displaying Age */}
                            {/* <label>Age</label> */}
                            <input
                                type="number"
                                // name="age"
                                placeholder="Your age"
                                value={bookingDetails.age}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button className="next-button" onClick={handleNext}>
                            Next
                        </button>
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="step-two-container">
                    {!isLoggedIn ? (
                        <form className="user-details-form" onSubmit={handleSubmit}>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={bookingDetails.name}
                                onChange={handleChange}
                                required
                            />

                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email"
                                value={bookingDetails.email}
                                onChange={handleChange}
                                required
                            />

                            <label>Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Your phone number"
                                value={bookingDetails.phone}
                                onChange={handleChange}
                                required
                            />

                            <label>Additional Information</label>
                            <textarea
                                name="additionalInfo"
                                placeholder="Anything we should know?"
                                value={bookingDetails.additionalInfo}
                                onChange={handleChange}
                            ></textarea>

                            <div className="service-summary">
                                <h3>Confirm Booking</h3>
                                <p><strong>Package:</strong> {packageName.replace('-', ' ')}</p>
                                <p><strong>Price:</strong> ₵1200</p>
                                <button type="submit" className="book-now-button">
                                    Book Now
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="logged-in-confirmation">
                            <h3>Welcome back!</h3>
                            <button type="submit" className="confirm-button">
                                Confirm Booking
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default BookingForm;
