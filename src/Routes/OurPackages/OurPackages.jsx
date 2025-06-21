import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OurPackages.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
// import Hero from '../../Components/Hero/Hero';
import breaststroke from '../../assets/breaststroke.png';
import freestyle from '../../assets/freestyle.png';
import backstroke from '../../assets/backstroke.png';
import butterfly from '../../assets/butterfly.png';
import pregnant from '../../assets/pregnant.png';
import special from '../../assets/special.png';

const PricingCard = ({ title, price, features, image }) => {
    const navigate = useNavigate();

    const handleBookingClick = () => {
        navigate(`/ourpackages/${title.toLowerCase().replace(' ', '-')}/booking`);
    };

    return (
        <div className="pricing-card">
            <img src={image} alt={title} className="card-image" />
            <h3>{title}</h3>
            <p className="price">
                <span className="price-amount">₵{price}</span>
                <span className="price-period">/person</span>
            </p>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <button className="cta-button" onClick={handleBookingClick}>Sign Up</button>
        </div>
    );
};

const OurPackages = () => {
    const packages = [
        { title: "BreastStroke", price: 800, features: ["Learn breaststroke in 4 to 7 days", "Basic techniques", "2 hrs"], image: breaststroke },
        { title: "Backstroke", price: 1000, features: ["Learn Backstroke in 4 to 7 days", "Advanced techniques", "2 hrs"], image: backstroke },
        { title: "Freestyle", price: 1200, features: ["Learn Freestyle in 4 to 7 days", "Competition training", "2 hrs"], image: freestyle },
        { title: "Butterfly", price: 1500, features: ["Learn Butterfly in 4 to 7 days", "Competition training", "2 hrs"], image: butterfly },
        { title: "Pregnant Woman", price: 1000, features: ["4 lessons per week", "Special techniques", "2 hrs"], image: pregnant },
        { title: "Special Needs", price: 1200, features: ["4 lessons per week", "Specialized care", "2 hrs"], image: special }
    ];

    return (
        <>
            <Navbar />

            <div className="pricing-container">
                <h2>Our Packages</h2>
                <div className="pricing-cards">
                    {packages.map((pkg, index) => (
                        <PricingCard key={index} {...pkg} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default OurPackages;
