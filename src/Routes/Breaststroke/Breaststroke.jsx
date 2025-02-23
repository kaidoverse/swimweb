import React from 'react';
import './Breaststroke.css';
import Navbar from '../../Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const Breaststroke = () => {
    const navigate = useNavigate();

    // Handle the back navigation
    const handleBack = () => {
        navigate('/#program-section'); // Directly navigate to homepage with #program-section hash
    };

    const handleBooking = () => {
        navigate('/ourpackages/breaststroke/booking');
    };

    return (
        <>
            <Navbar />
            <div className="breaststrokee">
                <div className="back-and-heading">
                    <button className="responsive-back-button" onClick={handleBack}>
                        &#10094; Back
                    </button>
                    <h1 className="package-heading">Breaststroke</h1>
                </div>
                <p>Learn breaststroke in 4 to 7 days</p>
                <div className="breaststroke-items">
                    <div className="duration">2 hr</div>
                    <div className="pricee">GHS 800</div>
                    <div className="location">Boundary road</div>
                    <div className="contact">+233 541 353 040</div>
                </div>
                <button className="enroll-btn" onClick={handleBooking}>Book Now</button>
                <hr className="btn-line" />
                <h2 className="service-des">Service Description</h2>
                <h3>It is the easiest to learn and most beginner-friendly.</h3>
                <h4>Duration: 4 days. Possibly up to 1 week for slower learners. (2 hours per session)</h4>
                <hr className="btn-line" />
                <h2>Contact details</h2>
                <div className="contact-items">
                    <h4>AH Hotel and Conference, Boundary Road, Accra, Ghana</h4>
                </div>
            </div>
        </>
    );
};

export default Breaststroke;