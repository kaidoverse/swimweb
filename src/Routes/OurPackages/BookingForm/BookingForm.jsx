import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './BookingForm.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaCalendarAlt, FaClock, FaUser, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

const BookingForm = () => {
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [age, setAge] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        additionalInfo: ''
    });

    const navigate = useNavigate();

    const timeSlots = ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM'];

    const handleNext = () => setStep(2);
    const handleBack = () => step === 1 ? navigate(-1) : setStep(1);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleBooking = () => {
        navigate('/ourpackages/breaststroke/bookingconfirmation');
    };

    return (
        <>
            <Navbar />
            <div className="booking-container">
                <div className="back-and-heading">
                    <button className="responsive-back-button" onClick={handleBack}>
                        <FaArrowLeft /> Back
                    </button>
                    <h1 className="package-heading">Breaststroke Program Booking</h1>
                </div>

                <div className="progress-steps">
                    <div className={`step ${step === 1 ? 'active' : ''}`}>Schedule</div>
                    <div className={`step ${step === 2 ? 'active' : ''}`}>Your Details</div>
                </div>

                {step === 1 ? (
                    <div className="step-one-container">
                        <div className="calendar-section">
                            <div className="form-group">
                                <label><FaCalendarAlt /> Select Date</label>
                                <Calendar
                                    onChange={setSelectedDate}
                                    value={selectedDate}
                                    minDate={new Date()}
                                    className="booking-calendar"
                                />
                            </div>

                            <div className="form-group">
                                <label><FaClock /> Available Time Slots</label>
                                <div className="time-slots">
                                    {timeSlots.map((time) => (
                                        <button
                                            key={time}
                                            className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                                            onClick={() => setSelectedTime(time)}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label><FaUser /> Participant's Age</label>
                                <input
                                    type="number"
                                    placeholder="Enter age"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    min="1"
                                    max="120"
                                />
                            </div>
                        </div>

                        <div className="summary-section">
                            <div className="service-details">
                                <h3>Program Summary</h3>
                                <p><strong>Package:</strong> Breaststroke Intensive</p>
                                <p><strong>Session:</strong> 2 hours</p>
                                <p><strong>Price:</strong> GHS 800</p>
                                <p><strong>Date:</strong> {selectedDate.toLocaleDateString()}</p>
                                <p><strong>Time:</strong> {selectedTime || 'Not selected'}</p>
                                <p><strong>Age:</strong> {age || 'Not provided'}</p>
                            </div>

                            <button className="next-button" onClick={handleNext}>
                                Continue to Details <FaArrowRight />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="step-two-container">
                        <div className="step-two-columns">
                            <div className="user-details-form">
                                <h2>Your Information</h2>

                                <div className="input-group">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder=" "
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="name"><FaUser /> Full Name</label>
                                </div>

                                <div className="input-group">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder=" "
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="email"><FaEnvelope /> Email</label>
                                </div>

                                <div className="input-group">
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder=" "
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="phone"><FaPhoneAlt /> Phone</label>
                                </div>

                                <div className="form-group">
                                    <label>Additional Information (Optional)</label>
                                    <textarea
                                        id="additionalInfo"
                                        name="additionalInfo"
                                        placeholder="Any special requirements or notes?"
                                        value={formData.additionalInfo}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button className="book-now-button" onClick={handleBooking}>
                                    Confirm Booking <FaArrowRight />
                                </button>
                            </div>

                            <div className="service-summary">
                                <h3>Booking Summary</h3>
                                <p><strong>Package:</strong> Breaststroke Intensive</p>
                                <p><strong>Price:</strong> GHS 800</p>
                                <p><strong>Date:</strong> {selectedDate.toLocaleDateString()}</p>
                                <p><strong>Time:</strong> {selectedTime || 'Not selected'}</p>
                                <p><strong>Age:</strong> {age || 'Not provided'}</p>
                                <p><strong>Name:</strong> {formData.name || 'Not provided'}</p>
                                <p><strong>Email:</strong> {formData.email || 'Not provided'}</p>
                                <p><strong>Phone:</strong> {formData.phone || 'Not provided'}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default BookingForm;