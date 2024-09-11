import React from 'react'
import './OurPackages.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import { FaSwimmer, FaTrophy, FaUsers } from 'react-icons/fa'


const PricingCard = ({ title, price, features, image, icon }) => (
    <div className="pricing-card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-icon">{icon}</div>
        <h3>{title}</h3>
        <p className="price">
            <span className="price-amount">${price}</span>
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
            title: "Beginner",
            price: 50,
            features: ["2 lessons per week", "Basic techniques", "Pool access"],
            image: "/images/beginner-swim.jpg",
            icon: <FaSwimmer />
        },
        {
            title: "Intermediate",
            price: 75,
            features: ["3 lessons per week", "Advanced techniques", "Pool access"],
            image: "/images/intermediate-swim.jpg",
            icon: <FaTrophy />
        },
        {
            title: "Advanced",
            price: 100,
            features: ["4 lessons per week", "Competition training", "Full facility access"],
            image: "/images/advanced-swim.jpg",
            icon: <FaUsers />
        }
    ]

    return (
        <>
            <Navbar />
            <Hero />
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
    )
}

export default OurPackages