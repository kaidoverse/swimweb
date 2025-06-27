import React from 'react';
import './Breaststroke.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Breaststroke = () => {
    const navigate = useNavigate();

    const handleBack = () => navigate('/#program-section', { replace: true });
    const handleBooking = () => navigate('/ourpackages/breaststroke/booking');

    return (
        <>
            <Navbar />
            <div className="breaststroke-container">
                <div className="breaststroke-content">
                    <button className="back-button" onClick={handleBack}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Back to Programs
                    </button>

                    <div className="breaststroke-header">
                        <h1 className="breaststroke-title">Breaststroke Swimming Program</h1>
                        <p className="breaststroke-subtitle">Master breaststroke in just 4-7 days with our expert instructors</p>
                    </div>

                    <div className="breaststroke-highlights">
                        <div className="detail-grid">
                            <div className="detail-card">
                                <div className="detail-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <div className="detail-content">
                                    <span className="detail-label">Duration</span>
                                    <span className="detail-value">2 hours/session</span>
                                </div>
                            </div>
                            {/* Repeat for other cards with appropriate icons */}
                        </div>
                    </div>

                    <button className="primary-button" onClick={handleBooking}>
                        Book Now
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <div className="section-divider"></div>

                    <div className="program-description">
                        <h2>About This Program</h2>
                        <div className="description-content">
                            <p>Breaststroke is the easiest to learn and most beginner-friendly swimming style.</p>
                            <ul className="feature-list">
                                <li>Structured learning path</li>
                                <li>Personalized feedback</li>
                                <li>Small class sizes</li>
                            </ul>
                        </div>
                    </div>

                    <div className="testimonials-section">
                        <h3>What Our Students Say</h3>
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                "I went from afraid to confident in just one week!"
                            </div>
                            <div className="testimonial-author">- Ama K.</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Breaststroke;