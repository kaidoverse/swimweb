import React from 'react';
import Swaglogo3 from '@assets/Swaglogo3.png';
import { ROUTES } from '../../constants/routes';

import { FiMail } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-to-top';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const Footer = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "";
        if (!accessKey) {
            toast.error("Form configuration missing. Please try again later.");
            return;
        }

        const formData = new FormData(event.target);
        formData.append("access_key", accessKey);

        const submitPromise = (async () => {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            if (!data.success) {
                throw new Error("Something went wrong. Please try again.");
            }
            return data;
        })();

        toast.promise(submitPromise, {
            loading: "Subscribing...",
            success: () => {
                event.target.reset();
                return "You're subscribed!";
            },
            error: (err) => err?.message || "Something went wrong. Please try again.",
        });

        try {
            await submitPromise;
        } catch (err) {
        }
    };

    return (
        <footer className="bg-black text-gray-300">
            <div className="max-w-[1200px] mx-auto px-6 py-16">
                {/* Logo */}
                <div className="flex justify-center mb-12">
                    <img src={Swaglogo3} alt="Logo" className="h-12 object-contain" />
                    <ScrollToTop
                        smooth
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    />
                </div>

                {/* Main content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Navigation */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 tracking-wide">
                            Navigation
                        </h3>
                        <ul className="space-y-2">
                            <li><Link to={ROUTES.PACKAGES} className="hover:text-white transition">Program</Link></li>
                            <li><Link to={ROUTES.TEAM} className="hover:text-white transition">About</Link></li>
                            <li><Link to={ROUTES.INSTRUCTORS} className="hover:text-white transition">Instructors</Link></li>
                            <li><Link to={ROUTES.CONTACT} className="hover:text-white transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 tracking-wide">
                            Contact
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>AH Hotel and Conference, <br /> Boundary Rd, Accra</li>
                            <li>123-456-7890</li>
                            <li>Swama@swa.com</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 tracking-wide">
                            Join Our Newsletter
                        </h3>

                        <form onSubmit={onSubmit} className="flex items-center border border-white/20 rounded-md overflow-hidden">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-400 outline-none"
                            />
                            <button
                                type="submit"
                                className="px-4 text-white hover:text-[#c9a24d] transition"
                            >
                                <FiMail />
                            </button>
                        </form>

                        {/* Socials */}
                        <div className="flex gap-4 mt-6">
                            <a href="https://www.instagram.com/swimwithama/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="hover:text-white transition" />
                            </a>
                            <a href="https://www.facebook.com/swimwithama/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="hover:text-white transition" />
                            </a>
                            <a href="https://www.linkedin.com/swimwithama/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="hover:text-white transition" />
                            </a>
                            <a href="https://www.twitter.com/swimwithama/" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="hover:text-white transition" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 mt-16 pt-6 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} SWA. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
