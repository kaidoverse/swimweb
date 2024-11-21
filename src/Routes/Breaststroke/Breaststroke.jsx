import React from 'react'
import './Breaststroke.css';
import Navbar from '../../Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const Breaststroke = () => {
    const navigate = useNavigate();
    const handleBooking = () => {
        navigate('/ourpackages/breaststroke/booking')
    }
    return (
        <>
            <Navbar />
            <div className='breastroke'>
                <h1>Breaststroke </h1>
                <p>Learn breaststroke in 4 to 7 days</p>
                <div className="breastroke-items">
                    <div className="duration">2 hr</div>
                    <div className="pricee">GHS 800</div>
                    <div className="location">Boundary road</div>
                    <div className="contact">+233 541 353 040</div>
                </div>
                <button className="enroll-btn" onClick={handleBooking}>book now</button>
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

    )
}

export default Breaststroke