import React, { useState, useEffect } from 'react';
import './Footer.css';
import Swaglogo3 from '../../assets/Swaglogo3.png';
import { FiMail } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-to-top';
import { Link } from 'react-router-dom';
const Footer = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Subscribing...");
        const formData = new FormData(event.target);
        formData.append("access_key", "3710ed86-9206-41a5-819c-6325967465af");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("You’re subscribed! 🎉");
            event.target.reset();
        } else {
            setResult("Something went wrong. Please try again.");
            console.error("Web3Forms Error:", data);
        }
    };

    useEffect(() => {
        if (result && result !== "Subscribing...") {
            const timeout = setTimeout(() => setResult(""), 3000);
            return () => clearTimeout(timeout);
        }
    }, [result]);

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={Swaglogo3} alt="Logo" className="logo-footer" />
                    <ScrollToTop smooth />
                </div>

                <div className="footer-content">
                    <div className="footer-column">
                        <h3>Navigation</h3>
                        <ul>
                            {/* <li><Link to="/">Home</Link></li> */}
                            <li><Link to="/OurPackages">Program</Link></li>
                            <li><Link to="/OurTeam">About</Link></li>
                            <li><Link to="/InstructPage">Instructors</Link></li>

                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Contact</h3>
                        <ul>
                            <li>123 Citrus Lane</li>
                            <li>123-456-7890</li>
                            <li>Swama@swa.com</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Join Our Newsletter</h3>
                        <form onSubmit={onSubmit}>
                            <input type="email" name="email" placeholder="Enter your email" autoComplete="email" required />
                            <button type="submit" className="newsletter-submit">
                                <FiMail className="mail-icon" />
                            </button>
                        </form>
                        {result && <span className="newsletter-result">{result}</span>}

                        <div className="social-group">
                            <a href="https://www.instagram.com/swimwithama/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="social-icon" />
                            </a>
                            <a href="https://www.facebook.com/swimwithama/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="social-icon" />
                            </a>
                            <a href="https://www.linkedin.com/swimwithama/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="social-icon" />
                            </a>
                            <a href="https://www.twitter.com/swimwithama/" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <h3>&copy; {new Date().getFullYear()} SWA. All rights reserved.</h3>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
