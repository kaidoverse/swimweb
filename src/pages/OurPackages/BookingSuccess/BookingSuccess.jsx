import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';

const BookingSuccess = () => {
    return (
        <section className="bg-white min-h-screen flex items-start justify-center pt-32 pb-16 px-4">
            <div className="w-full max-w-3xl text-center">
                <div className="mx-auto max-w-2xl">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#c9a24d]">Booking Received</p>
                    <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-[#013b59]">Thank you for your request</h1>
                    <p className="mt-4 text-sm text-gray-600">
                        Your booking has been received. Our team will contact you shortly with payment instructions and next steps.
                    </p>
                </div>

                <div className="mt-10 flex items-center justify-center gap-4">
                    <Link
                        to={ROUTES.PACKAGES}
                        className="px-6 py-3 bg-black text-white text-xs uppercase tracking-[0.3em] hover:bg-[#111]"
                    >
                        Back to Packages
                    </Link>
                    <Link
                        to={ROUTES.CONTACT}
                        className="px-6 py-3 border border-gray-300 text-xs uppercase tracking-[0.3em] text-gray-700 hover:border-[#c9a24d]"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BookingSuccess;
