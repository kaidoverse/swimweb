import React, { useState } from 'react';
import './contact.css';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Contact = () => {
    const [result, setResult] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult('');
        setSubmitting(true);

        const formData = new FormData(event.target);
        formData.append('access_key', '3710ed86-9206-41a5-819c-6325967465af');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult('✅ Message sent successfully!');
                event.target.reset();
            } else {
                setResult(`❌ ${data.message}`);
            }
        } catch (error) {
            setResult('❌ Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="contact-container">
            <Navbar />

            <div className="contact-hero">
                <h1>Get In Touch</h1>
                <p>Have questions or ready to start your swimming journey? Reach out to us today.</p>
            </div>

            <div className="contact-content">
                <div className="contact-info-section">
                    <div className="contact-methods">
                        <div className="contact-method">
                            <div className="contact-icon">
                                <img src={mail_icon} alt="Email" />
                            </div>
                            <div className="contact-details">
                                <h3>Email Us</h3>
                                <p>contact@swamschool.com</p>
                            </div>
                        </div>

                        <div className="contact-method">
                            <div className="contact-icon">
                                <img src={phone_icon} alt="Phone" />
                            </div>
                            <div className="contact-details">
                                <h3>Call Us</h3>
                                <p>+233 541 353 040</p>
                            </div>
                        </div>

                        <div className="contact-method">
                            <div className="contact-icon">
                                <img src={location_icon} alt="Location" />
                            </div>
                            <div className="contact-details">
                                <h3>Visit Us</h3>
                                <p>AH Hotel and Conference, Boundary Rd, Accra</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-section">
                    <h2>Send Us a Message</h2>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                autoComplete="name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                autoComplete="tel"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                autoComplete="off"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn" disabled={submitting}>
                            {submitting ? 'Sending...' : 'Send Message'}
                        </button>

                        {result && <div className="form-result">{result}</div>}
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
