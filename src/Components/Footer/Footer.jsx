import React, { useState, useEffect } from 'react';
import './Footer.css';
import Swaglogo3 from '../../assets/Swaglogo3.png';
import { FiMail } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo Section */}
                <div className="footer-logo">
                    <img src={Swaglogo3} alt="Logo" className="logo-footer" />
                    <ScrollToTop smooth />
                </div>

                {/* Footer Content */}
                <div className="footer-content">
                    {/* Navigation Section */}
                    <div className="footer-column">
                        <h3>Navigation</h3>
                        <ul>
                            <li>Home</li>
                            <li>Program</li>
                            <li>About</li>
                            <li>Instructors</li>
                            <li>Testimonials</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="footer-column">
                        <h3>Contact</h3>
                        <ul>
                            <li>123 Citrus Lane</li>
                            <li>123-456-7890</li>
                            <li>Swama@swa.com</li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className="footer-column">
                        <h3>Join Our Newsletter</h3>
                        <form>
                            <input type="email" placeholder="Enter your email" />
                            <FiMail className="mail-icon" />
                        </form>
                        <div className="social-group">
                            <FaInstagram className="social-icon" />
                            <FaFacebook className="social-icon" />
                            <FaLinkedin className="social-icon" />
                            <FaTwitter className="social-icon" />
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
