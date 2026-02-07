import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const Breaststroke = () => {
    const navigate = useNavigate();

    const handleBack = () => navigate('/#program-section', { replace: true });
    const handleBooking = () => navigate(ROUTES.PACKAGES_BOOKING('breaststroke'));

    return (
        <>
            <div className="min-h-screen bg-white text-[#013b59] pt-[110px] pb-16">
                <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
                    <button
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#013b59] hover:text-[#c9a24d] transition-colors"
                        onClick={handleBack}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Back to Programs
                    </button>

                    <div className="mt-6 rounded-3xl border border-gray-200 bg-white px-6 py-10 text-center shadow-[0_8px_30px_rgba(1,59,89,0.12)] sm:px-10">
                        <p className="text-xs font-semibold tracking-[0.28em] text-[#c9a24d] uppercase">Signature Program</p>
                        <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold">Breaststroke Swimming Program</h1>
                        <div className="mx-auto mt-4 h-[2px] w-16 bg-[#c9a24d]" />
                        <p className="mt-4 text-base sm:text-lg text-[#4a4f63]">Master breaststroke in just 4-7 days with our expert instructors</p>
                    </div>

                    <div className="mt-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_10px_22px_rgba(1,59,89,0.08)]">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c9a24d]/15 text-[#c9a24d]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-xs uppercase tracking-wider text-[#94a3b8]">Duration</span>
                                    <span className="block text-base font-semibold text-[#013b59]">2 hours/session</span>
                                </div>
                            </div>
                            {/* Repeat for other cards with appropriate icons */}
                        </div>
                    </div>

                    <button
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#013b59] px-8 py-3 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-[#025a8e]"
                        onClick={handleBooking}
                    >
                        Book Now
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#c9a24d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#c9a24d]/40 to-transparent" />

                    <div>
                        <h2 className="text-2xl font-semibold text-[#013b59]">About This Program</h2>
                        <div className="mt-4">
                            <p className="text-[#4a4f63]">Breaststroke is the easiest to learn and most beginner-friendly swimming style.</p>
                            <ul className="mt-5 space-y-2 text-[#4a4f63]">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-[#c9a24d]" />
                                    Structured learning path
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-[#c9a24d]" />
                                    Personalized feedback
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-[#c9a24d]" />
                                    Small class sizes
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h3 className="text-xl font-semibold text-[#013b59]">What Our Students Say</h3>
                        <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_10px_24px_rgba(1,59,89,0.08)]">
                            <div className="text-base italic text-[#4a4f63]">
                                "I went from afraid to confident in just one week!"
                            </div>
                            <div className="mt-3 font-semibold text-[#c9a24d]">- Ama K.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Breaststroke;
