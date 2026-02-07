import React, { useState, useEffect } from 'react';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';

const Contact = () => {
    const [result, setResult] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult('');
        setSubmitting(true);

        const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || '';
        if (!accessKey) {
            setResult('Form configuration missing. Please try again later.');
            setSubmitting(false);
            return;
        }

        const formData = new FormData(event.target);
        formData.append('access_key', accessKey);

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

    useEffect(() => {
        if (result && result !== 'Sending...') {
            const timeout = setTimeout(() => setResult(''), 4000);
            return () => clearTimeout(timeout);
        }
    }, [result]);

    return (
        <section className="bg-white text-black py-16 px-6 md:px-12">
            <div className="max-w-[1200px] mx-auto flex flex-col space-y-12">

                {/* Hero */}
                <div className="text-center max-w-2xl mx-auto pt-16 space-y-3">
                    <h1 className="text-3xl md:text-4xl font-bold">Get In Touch</h1>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        Have questions or ready to start your swimming journey? Reach out to us today.
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Info */}
                    <div className="space-y-6">
                        {[
                            { icon: mail_icon, title: 'Email Us', details: 'contact@swamschool.com' },
                            { icon: phone_icon, title: 'Call Us', details: '+233 541 353 040' },
                            { icon: location_icon, title: 'Visit Us', details: 'AH Hotel and Conference, Boundary Rd, Accra' },
                        ].map((method, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                                    <img src={method.icon} alt={method.title} className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">{method.title}</h3>
                                    <p className="text-gray-600">{method.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white border border-gray-200 p-6 md:p-8">
                        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                        <form onSubmit={onSubmit} className="space-y-6">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-[11px] uppercase tracking-[0.25em] text-gray-500">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                    autoComplete="name"
                                    className="mt-3 w-full border-0 border-b border-gray-300 px-0 py-2 text-sm focus:outline-none focus:border-[#c9a24d]"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-[11px] uppercase tracking-[0.25em] text-gray-500">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="name@email.com"
                                    required
                                    autoComplete="email"
                                    className="mt-3 w-full border-0 border-b border-gray-300 px-0 py-2 text-sm focus:outline-none focus:border-[#c9a24d]"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="phone" className="text-[11px] uppercase tracking-[0.25em] text-gray-500">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="+233 54 123 4567"
                                    required
                                    autoComplete="tel"
                                    className="mt-3 w-full border-0 border-b border-gray-300 px-0 py-2 text-sm focus:outline-none focus:border-[#c9a24d]"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-[11px] uppercase tracking-[0.25em] text-gray-500">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Write your message here..."
                                    required
                                    autoComplete="off"
                                    className="mt-3 w-full border-0 border-b border-gray-300 px-0 py-2 text-sm focus:outline-none focus:border-[#c9a24d]"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full bg-black text-white text-xs uppercase tracking-[0.3em] py-3 hover:bg-[#111] transition-colors"
                            >
                                {submitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {result && <p className="mt-3 text-center text-gray-700">{result}</p>}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
