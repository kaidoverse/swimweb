import React from 'react'
import './OurPackages.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import { FaSwimmer, FaTrophy, FaUsers } from 'react-icons/fa'
import breaststroke from '../../assets/breaststroke.png';
import freestyle from '../../assets/freestyle.png';
import backstroke from '../../assets/backstroke.png';
import butterfly from '../../assets/butterfly.png';
import pregnant from '../../assets/pregnant.png';
import special from '../../assets/special.png';

const PricingCard = ({ title, price, features, image, icon }) => (
    <div className="pricing-card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-icon">{icon}</div>
        <h3>{title}</h3>
        <p className="price">
            <span className="price-amount"> ₵{price}</span>
            <span className="price-period">/person</span>
        </p>
        <ul>
            {features.map((feature, index) => (
                <li key={index}>{feature}</li>
            ))}
        </ul>
        <button className="cta-button">Sign Up</button>
    </div>
)

const OurPackages = () => {
    const packages = [
        {
            title: "BreastStroke",
            price: 800,
            features: ["2 lessons per week", "Basic techniques", "Pool access"],
            image: breaststroke,
            // icon: <FaSwimmer />
        },
        {
            title: "Backstroke",
            price: 1000,
            features: ["3 lessons per week", "Advanced techniques", "Pool access"],
            image: backstroke,
            // icon: <FaTrophy />
        },
        {
            title: "Freestyle",
            price: 1200,
            features: ["4 lessons per week", "Competition training", "Full facility access"],
            image: freestyle,
            // icon: <FaUsers />
        },
        {
            title: "Butterfly",
            price: 1500,
            features: ["4 lessons per week", "Competition training", "Full facility access"],
            image: butterfly,
            // icon: <FaUsers />
        },
        {
            title: "Pregnant Woman",
            price: 1000,
            features: ["4 lessons per week", "Competition training", "Full facility access"],
            image: pregnant,
            // icon: <FaUsers />
        },
        {
            title: "Special Needs",
            price: 1200,
            features: ["4 lessons per week", "Competition training", "Full facility access"],
            image: special,
            // icon: <FaUsers />
        }
    ]

    return (
        <>
            <Navbar />
            <Hero />
            <div className="pricing-container">
                <h2>Our Packages</h2>
                <h3 className='swimw'>Swimwithama presents the ‘S.W.A swim club’.
                    A brand new way for clients to stay active and engaged with their swim journey even after they are done with primary lessons. Membership in this club gives clients the opportunity to continually work on their skills weekly under the supervision of an instructor. These sessions are primarily going to be of an educational and relaxing nature, and are only going to increase in intensity depending on a client’s specific goals. Keep your journey going…

                    Keep Swimming</h3>
                <div className="pricing-cards">
                    {packages.map((pkg, index) => (
                        <PricingCard key={index} {...pkg} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OurPackages