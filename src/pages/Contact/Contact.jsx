import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { toast } from 'sonner';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || '';
        if (!accessKey) {
            toast.error('Form configuration missing. Please try again later.');
            return;
        }

        const formData = new FormData(event.target);
        formData.append('access_key', accessKey);

        const submitPromise = (async () => {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (!data.success) {
                throw new Error(data.message || 'Something went wrong. Please try again.');
            }
            return data;
        })();

        toast.promise(submitPromise, {
            loading: 'Sending...',
            success: () => {
                event.target.reset();
                return 'Message sent successfully!';
            },
            error: (err) => err?.message || 'Something went wrong. Please try again.',
        });

        try {
            await submitPromise;
        } catch (error) {
            // toast handles errors
        }
    };

    return (
        <section className="bg-white text-black py-16 px-6 md:px-12">
            <div className="max-w-[1200px] mx-auto flex flex-col space-y-12">

                {/* Hero */}
                <div className="text-center max-w-2xl mx-auto pt-16 space-y-3">
                    <h1 className="text-3xl md:text-4xl font-bold">Get In Touch</h1>
                    <div className="mx-auto h-[2px] w-16 bg-[#c9a24d]" />
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        Have questions or ready to start your swimming journey? Reach out to us today.
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Info */}
                    <div className="space-y-6">
                        {[
                            { icon: FiMail, title: 'Email Us', details: 'contact@swamschool.com' },
                            { icon: FiPhone, title: 'Call Us', details: '+233 541 353 040' },
                            { icon: FiMapPin, title: 'Visit Us', details: 'AH Hotel and Conference, Boundary Rd, Accra' },
                        ].map((method, i) => {
                            const Icon = method.icon;
                            return (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-[#c9a24d]">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">{method.title}</h3>
                                    <p className="text-gray-600">{method.details}</p>
                                </div>
                            </div>
                            );
                        })}
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
                                className="w-full bg-black text-white text-xs uppercase tracking-[0.3em] py-3 hover:bg-[#111] transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
