import React, { useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './BookingForm.css';
import Navbar from '../../../Components/Navbar/Navbar';

// Helper function to handle time slot selection
const TimeSlots = ({ availableTimes, selectedTime, handleTimeChange }) => {
    return (
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
    );
};

const BookingForm = () => {
    const { packageName } = useParams();
    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({
        name: '',
        email: '',
        phone: '',
        date: new Date(),
        time: '',
        age: '',
        additionalInfo: '',
    });

    const availableTimes = ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'];

    // Handle input changes
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    }, []);

    const handleDateChange = (date) => setBookingDetails({ ...bookingDetails, date });
    const handleTimeChange = (time) => setBookingDetails({ ...bookingDetails, time });

    // Move to the next step
    const handleNext = () => setStep(2);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Booking Details:', bookingDetails);
            localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));

            navigate(`/OurPackages/${packageName}/bookingconfirmation`); // Navigate to Booking Confirmation
        } catch (error) {
            console.error('Booking failed:', error);
        }
    };

    // Dynamic class names for package styles
    const packageClassNames = {
        breaststroke: "breaststroke",
        backstroke: "backstroke",
        freestyle: "freestyle",
        butterfly: "butterfly",
        "pregnant-woman": "pregnant-woman",
        "special-need": "special-need",
    };

    const formattedDate = bookingDetails.date.toLocaleDateString();

    const handleBack = () => {
        if (step === 2) {
            setStep(1); // Go back to step 1
        } else {
            navigate(-1); // Navigate to the package list
        }
    };

    return (
        <>
            <Navbar />
            <div className="booking-container">
                <div className="back-and-heading">
                    {/* Back Button */}
                    <button className="responsive-back-button" onClick={handleBack}>
                        &#10094; Back
                    </button>
                    <h2 className={`package-heading ${packageClassNames[packageName]}`}>
                        {packageName.replace('-', ' ')} Package
                    </h2>
                </div>


                {step === 1 && (
                    <div className="step-one-container">

                        {/* Left Column: Date and Time Selection */}
                        <div className="left-column">
                            <label>Select Preferred Date</label>
                            <Calendar
                                value={bookingDetails.date}
                                onChange={handleDateChange}
                                minDate={new Date()} // Prevent past dates
                            />

                            <label>Select Time</label>
                            <TimeSlots
                                availableTimes={availableTimes}
                                selectedTime={bookingDetails.time}
                                handleTimeChange={handleTimeChange}
                            />
                        </div>

                        {/* Right Column: Service Details */}
                        <div className="right-column">
                            <div className="service-details">
                                <label>Service Details</label>
                                <p><strong>Package:</strong> {packageName.replace('-', ' ')}</p>
                                <p><strong>Date:</strong> {formattedDate}</p>
                                <p><strong>Time:</strong> {bookingDetails.time || 'Not selected'}</p>
                                <p><strong>Age:</strong> {bookingDetails.age || 'Not selected'}</p>
                                <input
                                    type="number"
                                    name="age"
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
                        <div className="step-two-columns">
                            {/* Left Column: Form Details */}
                            {!isLoggedIn ? (
                                <form className="user-details-form" onSubmit={handleSubmit}>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        value={bookingDetails.name}
                                        onChange={handleChange}
                                        required
                                    />

                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your email"
                                        value={bookingDetails.email}
                                        onChange={handleChange}
                                        required
                                        pattern="^[^@]+@[^@]+\.[^@]+$" // Email validation pattern
                                    />

                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Your phone number"
                                        value={bookingDetails.phone}
                                        onChange={handleChange}
                                        required
                                        pattern="^\+?\d{1,4}?[-. ]?(\d{1,3})[-. ]?(\d{1,4})[-. ]?(\d{1,4})$" // Phone number validation
                                    />

                                    <label htmlFor="additionalInfo">Additional Information</label>
                                    <textarea
                                        id="additionalInfo"
                                        name="additionalInfo"
                                        placeholder="Anything we should know?"
                                        value={bookingDetails.additionalInfo}
                                        onChange={handleChange}
                                    ></textarea>

                                    <button type="submit" className="book-now-button">
                                        Book Now
                                    </button>
                                </form>
                            ) : (
                                <div className="user-logged-in-message">
                                    <h3>Welcome back, {userName}!</h3>
                                    <p>You're logged in and ready to confirm your booking.</p>
                                </div>
                            )}

                            {/* Right Column: Service Summary */}
                            <div className="service-summary">
                                <h3>Confirm Booking</h3>
                                <p><strong>Package:</strong> {packageName.replace('-', ' ')}</p>
                                <p><strong>Price:</strong> ₵1200</p>
                                <p><strong>Date:</strong> {formattedDate}</p>
                                <p><strong>Time:</strong> {bookingDetails.time || 'Not selected'}</p>
                                <p><strong>Age:</strong> {bookingDetails.age || 'Not selected'}</p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </>
    );
};

export default BookingForm;
