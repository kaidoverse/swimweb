import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import './BookingConfirmation.css';

const BookingConfirmation = () => {
    const navigate = useNavigate();
    const { packageName } = useParams();

    const handleProceedToPayment = () => {
        navigate("/payment");
    };

    return (
        <div className="booking-confirmation">
            <h2>Booking Confirmation</h2>
            <p>Please confirm the details of your booking:</p>
            <ul>
                <li><strong>Package:</strong> {packageName.replace('-', ' ')}</li>
                <li><strong>Date:</strong> 12th December 2024</li>
                <li><strong>Time:</strong> 9:00 AM</li>
            </ul>
            <button onClick={handleProceedToPayment}>Proceed to Payment</button>
        </div>
    );
};

export default BookingConfirmation;
