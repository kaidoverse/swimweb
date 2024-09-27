import React, { useState, useEffect } from 'react';
import './Footer.css';
import Swaglogo3 from '../../assets/Swaglogo3.png';
import { FiMail } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {
    const [visibleSections, setVisibleSections] = useState({});
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

    const toggleVisibility = (index) => {
        setVisibleSections((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 768;
            setIsMobileView(isMobile);
            if (isMobile) {
                setVisibleSections({}); // Hide all sections when switching to mobile view
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='footer'>
            <div className="container">
                <img src={Swaglogo3} alt="" className='logo-footer' />
                <ScrollToTop smooth />
                <div className="col-container">
                    <div className="col">
                        <h3 onClick={() => toggleVisibility(1)}>Navigation</h3>
                        {(!isMobileView || visibleSections[1]) && (
                            <>
                                <p>Home</p>
                                <p>Program</p>
                                <p>About</p>
                                <p>Instructors</p>
                                <p>Testimonials</p>
                                <p>Contact</p>
                            </>
                        )}
                    </div>
                    <div className="col">
                        <h3 onClick={() => toggleVisibility(2)}>Contact</h3>
                        {(!isMobileView || visibleSections[2]) && (
                            <>
                                <p>123 Citrus Lane</p>
                                <p>123-456-7890</p>
                                <p>Swama@swa.com</p>
                            </>
                        )}
                    </div>
                    <div className="col">
                        <h3 onClick={() => toggleVisibility(3)}>Information</h3>
                        {(!isMobileView || visibleSections[3]) && (
                            <>
                                <p>Home</p>
                                <p>Data</p>
                                <p>Cloud</p>
                                <p>Contact</p>
                            </>
                        )}
                    </div>
                    <div className="col">
                        <h3 onClick={() => toggleVisibility(4)}>Legal</h3>
                        {(!isMobileView || visibleSections[4]) && (
                            <>
                                <p>Home</p>
                                <p>Program</p>
                                <p>About</p>
                                <p>Instructors</p>
                                <p>Testimonials</p>
                                <p>Contact</p>
                            </>
                        )}
                    </div>
                    <div className="newsletter">
                        <h3>Join Our Newsletter</h3>
                        <form>
                            <input type="email" placeholder='Enter your email' />
                            <FiMail className='mail-icon' />
                        </form>
                        <div className="social-group">
                            <FaInstagram className='social-icon' />
                            <FaFacebook className='social-icon' />
                            <FaLinkedin className='social-icon' />
                            <FaTwitter className='social-icon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
