import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Payment from "../Payment/Payment";
import './BookingConfirmation.css';
import Navbar from "../../../Components/Navbar/Navbar";

const BookingConfirmation = () => {
    const navigate = useNavigate();
    const { packageName } = useParams();

    const [clientDetails, setClientDetails] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        age: "",
        additionalInfo: "",
    });

    const [showPayment, setShowPayment] = useState(false); // Toggle payment view
    const [isMinimized, setIsMinimized] = useState(false); // Toggle minimized client details view

    // Load booking details from local storage on mount
    useEffect(() => {
        const savedDetails = JSON.parse(localStorage.getItem("bookingDetails"));
        if (savedDetails) {
            setClientDetails(savedDetails);
        }
    }, []);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClientDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    };

    const handleProceedToPayment = () => {
        setShowPayment(true);
        setIsMinimized(true); // Minimize client details
    };

    const handleEditDetails = () => {
        setShowPayment(false); // Hide payment when editing
        setIsMinimized(false); // Restore full client details view
    };

    return (
        <>
            <Navbar />
            <div className="booking-confirmation">
                <h2>Booking Confirmation. <br />
                    Under Construction</h2>
                {/* <div className="confirmation-container">
                    <div className="left-column">
                        {isMinimized ? (
                            <div className="minimized-client-details">
                                <h3>Client Details</h3>
                                <ul>
                                    <li><strong>Name:</strong> {clientDetails.name}</li>
                                    <li><strong>Email:</strong> {clientDetails.email}</li>
                                    <li><strong>Phone:</strong> {clientDetails.phone}</li>
                                </ul>
                                <button onClick={handleEditDetails} className="edit-button">
                                    Edit
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3>Client Details</h3>
                                <form>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={clientDetails.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your name"
                                        required
                                    />

                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={clientDetails.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        required
                                    />

                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={clientDetails.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter your phone number"
                                        required
                                    />

                                    <label htmlFor="age">Age</label>
                                    <input
                                        type="number"
                                        id="age"
                                        name="age"
                                        value={clientDetails.age}
                                        onChange={handleInputChange}
                                        placeholder="Your age"
                                        required
                                    />

                                    <label htmlFor="additionalInfo">Additional Information</label>
                                    <textarea
                                        id="additionalInfo"
                                        name="additionalInfo"
                                        value={clientDetails.additionalInfo}
                                        onChange={handleInputChange}
                                        placeholder="Any additional information?"
                                    ></textarea>
                                </form>
                                <button onClick={handleProceedToPayment} className="proceed-button">
                                    Proceed to Payment
                                </button>
                            </>
                        )}

                        {showPayment && isMinimized && <Payment />}
                    </div>

                    <div className="right-column booking-summary">
                        <h3>Booking Summary</h3>
                        <ul>
                            <li><strong>Package:</strong> {packageName.replace('-', ' ')}</li>
                            <li><strong>Date:</strong> {clientDetails.date}</li>
                            <li><strong>Time:</strong> {clientDetails.time}</li>
                            <li><strong>Age:</strong> {clientDetails.age}</li>
                            <li><strong>Price:</strong> ₵1200</li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default BookingConfirmation;
