import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { toast } from 'sonner';
import { PACKAGES } from '../../../constants/packages';
import { ROUTES } from '../../../constants/routes';

const BookingForm = () => {
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDateValue, setSelectedDateValue] = useState(new Date().toISOString().slice(0, 10));
    const [selectedTime, setSelectedTime] = useState('');
    const [age, setAge] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        additionalInfo: ''
    });

    const navigate = useNavigate();
    const { packageName } = useParams();
    const selectedPackage = useMemo(() => {
        return PACKAGES.find(pkg => pkg.slug === packageName) || PACKAGES[0];
    }, [packageName]);

    const timeSlots = ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM'];

    const handleBack = () => {
        if (step === 3) return setStep(2);
        if (step === 2) return setStep(1);
        return navigate(ROUTES.PACKAGES);
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleConfirmAndSend = async () => {
        if (!formData.name || !formData.email || !formData.phone || !selectedTime) {
            toast.error('Please complete all required fields and select a time.');
            return;
        }

        const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || '';
        if (!accessKey) {
            toast.error('Missing form configuration. Please try again later.');
            return;
        }

        const payload = new FormData();
        payload.append('access_key', accessKey);
        payload.append('subject', 'New Swimming Booking Request');
        payload.append('name', formData.name);
        payload.append('email', formData.email);
        payload.append('phone', formData.phone);
        payload.append('package', selectedPackage.title);
        payload.append('date', selectedDateValue ? new Date(selectedDateValue).toLocaleDateString() : '');
        payload.append('time', selectedTime);
        payload.append('age', age || 'Not provided');
        payload.append('additionalInfo', formData.additionalInfo || 'None');

        setIsSubmitting(true);

        const submitPromise = (async () => {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: payload,
            });

            const data = await response.json();
            if (!data.success) {
                throw new Error(data.message || 'Something went wrong. Please try again.');
            }
            return data;
        })();

        toast.promise(submitPromise, {
            loading: 'Submitting your booking...',
            success: () => {
                navigate('/packages/success');
                return 'Booking submitted. We will contact you shortly.';
            },
            error: (err) => err?.message || 'Network error. Please try again.',
        });

        try {
            await submitPromise;
        } catch (err) {
            // toast handles errors
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleNextStep = () => {
        if (!selectedTime || !selectedDateValue) {
            toast.error('Please select a date and time to continue.');
            return;
        }
        setStep(2);
    };

    const handleNextStep2 = () => {
        if (!formData.name || !formData.email || !formData.phone) {
            toast.error('Please complete all required fields to continue.');
            return;
        }
        setStep(3);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [step]);

    return (
        <section className="bg-white min-h-screen flex items-start justify-center pt-32 pb-16 px-4">
            <div className="w-full max-w-5xl">
                <div className="mb-10 flex items-center justify-between">
                    <button onClick={handleBack} className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                        <FaArrowLeft />
                        Back
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
                    {/* Left - Reservation Form Card */}
                    <div className="bg-white">
                        <div className="px-2 md:px-4">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-semibold text-[#013b59] uppercase tracking-[0.2em] text-center md:text-left">Request Booking</h2>
                                    <p className="text-sm text-gray-500 mt-3">Select a date and time, then leave your details. We will contact you to complete payment.</p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-gray-400">
                                    <span className={`h-6 w-6 rounded-full flex items-center justify-center ${step === 1 ? 'bg-[#c9a24d] text-white' : 'bg-gray-200 text-gray-500'}`}>1</span>
                                    Date & Time
                                    <span className="text-gray-300">|</span>
                                    <span className={`h-6 w-6 rounded-full flex items-center justify-center ${step === 2 ? 'bg-[#c9a24d] text-white' : 'bg-gray-200 text-gray-500'}`}>2</span>
                                    Details
                                    <span className="text-gray-300">|</span>
                                    <span className={`h-6 w-6 rounded-full flex items-center justify-center ${step === 3 ? 'bg-[#c9a24d] text-white' : 'bg-gray-200 text-gray-500'}`}>3</span>
                                    Review
                                </div>

                                {step === 1 && (
                                    <div className="mt-6 space-y-6">
                                        <div>
                                            <label htmlFor="booking-date" className="text-[11px] uppercase tracking-[0.25em] text-gray-500">Date <span className="text-[#c9a24d]">*</span></label>
                                            <div className="mt-3">
                                                <input
                                                    id="booking-date"
                                                    type="date"
                                                    value={selectedDateValue}
                                                    min={new Date().toISOString().slice(0, 10)}
                                                    onChange={(e) => {
                                                        const value = e.target.value;
                                                        setSelectedDateValue(value);
                                                        if (value) {
                                                            setSelectedDate(new Date(value));
                                                        }
                                                    }}
                                                    autoComplete="off"
                                                    className="w-full border-0 border-b border-gray-300 px-0 py-2 text-sm focus:outline-none focus:border-[#c9a24d]"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-[11px] uppercase tracking-[0.25em] text-gray-500">Time <span className="text-[#c9a24d]">*</span></label>
                                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                                                {timeSlots.map((time) => (
                                                    <button
                                                        key={time}
                                                        onClick={() => setSelectedTime(time)}
                                                        className={`px-3 py-2 text-sm border-b transition ${selectedTime === time ? 'border-[#c9a24d] text-[#013b59]' : 'border-gray-300 text-gray-700 hover:border-[#c9a24d]'}`}
                                                    >
                                                        {time}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex w-full items-center justify-center gap-4 pt-2">
                                            <button
                                                onClick={handleNextStep}
                                                className="px-6 py-3 bg-black text-white text-xs uppercase tracking-[0.3em] hover:bg-[#111]"
                                            >
                                                Continue
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="mt-6 space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <div>
                                                <label htmlFor="booking-name" className="text-[11px] uppercase tracking-[0.25em] text-gray-500">Name <span className="text-[#c9a24d]">*</span></label>
                                                <input id="booking-name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" autoComplete="name" className="mt-3 w-full border-0 border-b border-gray-300 px-0 py-2 text-sm focus:outline-none focus:border-[#c9a24d]" />
                                            </div>
                                            <div>
                                                <label htmlFor="booking-email" className="text-[11px] uppercase tracking-[0.25em] text-gray-500">Email <span className="text-[#c9a24d]">*</span></label>
                                                <input id="booking-email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" className="mt-3 w-full border-0 border-b border-gray-300 px-0 py-2 text-sm focus:outline-none focus:border-[#c9a24d]" />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="booking-phone" className="text-[11px] uppercase tracking-[0.25em] text-gray-500">Phone <span className="text-[#c9a24d]">*</span></label>
                                            <input id="booking-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. +233 24 000 0000" autoComplete="tel" className="mt-3 w-full border-0 border-b border-gray-300 px-0 py-2 text-sm focus:outline-none focus:border-[#c9a24d]" />
                                        </div>

                                        <div>
                                            <label htmlFor="booking-age" className="text-[11px] uppercase tracking-[0.25em] text-gray-500">Age</label>
                                            <input id="booking-age" name="age" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Your age" autoComplete="bday" className="mt-3 w-full border-0 border-b border-gray-300 px-0 py-2 text-sm focus:outline-none focus:border-[#c9a24d]" />
                                        </div>

                                        <div>
                                            <label htmlFor="booking-notes" className="text-[11px] uppercase tracking-[0.25em] text-gray-500">Notes</label>
                                            <textarea id="booking-notes" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} placeholder="Any notes or special requests" autoComplete="off" className="mt-3 w-full border-0 border-b border-gray-300 px-0 py-2 text-sm focus:outline-none focus:border-[#c9a24d]" rows={3} />
                                        </div>

                                        <div className="flex w-full items-center justify-center gap-4 pt-2">
                                            <button
                                                onClick={handleNextStep2}
                                                className="px-6 py-3 bg-black text-white text-xs uppercase tracking-[0.3em] hover:bg-[#111]"
                                            >
                                                Continue
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="mt-6 space-y-6">
                                        <div className="border border-gray-200 p-5">
                                            <h3 className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-3">Review</h3>
                                            <div className="text-sm text-gray-700 space-y-2">
                                                <p><strong>Package:</strong> {selectedPackage.title}</p>
                                                <p><strong>Price:</strong> GHS {selectedPackage.price} / person</p>
                                                <p><strong>Date:</strong> {selectedDateValue ? new Date(selectedDateValue).toLocaleDateString() : 'Not selected'}</p>
                                                <p><strong>Time:</strong> {selectedTime || 'Not selected'}</p>
                                                <p><strong>Name:</strong> {formData.name || 'Not provided'}</p>
                                                <p><strong>Email:</strong> {formData.email || 'Not provided'}</p>
                                                <p><strong>Phone:</strong> {formData.phone || 'Not provided'}</p>
                                                <p><strong>Age:</strong> {age || 'Not provided'}</p>
                                                <p><strong>Notes:</strong> {formData.additionalInfo || 'None'}</p>
                                            </div>
                                        </div>

                                        <div className="flex w-full items-center justify-center gap-4 pt-2">
                                            <button
                                                onClick={handleConfirmAndSend}
                                                className="px-6 py-3 bg-black text-white text-xs uppercase tracking-[0.3em] hover:bg-[#111] disabled:opacity-60"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? 'Sending...' : 'Confirm Booking'}
                                            </button>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                    {/* Right - Visual / Note */}
                    <div className="flex flex-col gap-6">
                        <div className="border border-gray-200 overflow-hidden">
                            <img src={selectedPackage.image} alt="program" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h4 className="text-sm uppercase tracking-[0.25em] text-gray-500">About This Program</h4>
                                <p className="text-sm text-gray-600 mt-3">GHS {selectedPackage.price} / person</p>
                                <p className="text-sm text-gray-600 mt-2">{selectedPackage.features[0]}</p>
                                <p className="text-sm text-gray-600 mt-2">{selectedPackage.features[1]}</p>
                                <p className="text-sm text-gray-600 mt-2">{selectedPackage.features[2]}</p>

                            </div>
                        </div>
                        <div className="hidden lg:block border border-[#c9a24d]/30 bg-[#c9a24d]/10 p-5 text-sm text-[#7a5a1a]">
                            Payment is handled manually. After you submit, our team will contact you with payment instructions.
                        </div>
                    </div>
                </div>

                <div className="mt-8 lg:hidden border border-[#c9a24d]/30 bg-[#c9a24d]/10 p-5 text-sm text-[#7a5a1a]">
                    Payment is handled manually. After you submit, our team will contact you with payment instructions.
                </div>
            </div>
        </section>
    );
};

export default BookingForm;
