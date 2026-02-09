import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { ROUTES } from '../../constants/routes';
import teach1 from '@assets/teach1.webp';

const Membership = () => {
    const navigate = useNavigate();
    const plans = [
        {
            name: 'Starter',
            price: 'GHS 299',
            cadence: 'per month',
            blurb: 'For beginners building confidence in the water.',
            features: ['2 sessions / week', 'Small group classes', 'Progress tracking'],
        },
        {
            name: 'Pro',
            price: 'GHS 499',
            cadence: 'per month',
            blurb: 'For swimmers focused on technique and speed.',
            features: ['3 sessions / week', 'Video technique review', 'Priority scheduling'],
            highlight: true,
        },
        {
            name: 'Family',
            price: 'GHS 899',
            cadence: 'per month',
            blurb: 'For families training together with flexibility.',
            features: ['Up to 4 members', 'Flexible time slots', 'Family progress dashboard'],
        },
    ];

    const benefits = [
        'Certified instructors with personalized feedback',
        'Access to structured learning plans',
        'Flexible rescheduling for missed classes',
        'Quarterly skill assessments',
        'Member-only swim clinics',
        'Priority booking windows',
    ];

    const faqs = [
        {
            q: 'Can I pause my membership?',
            a: 'Yes. Memberships can be paused once per quarter with 7 days notice.',
        },
        {
            q: 'Do I need to bring my own gear?',
            a: 'Swim cap and goggles are recommended. We provide training aids when needed.',
        },
        {
            q: 'Can I switch plans later?',
            a: 'Absolutely. You can upgrade or downgrade at the start of a new billing cycle.',
        },
        {
            q: 'Are private lessons included?',
            a: 'Private lessons are available as add-ons for any membership tier.',
        },
    ];

    return (
        <section className="bg-white text-[#013b59] pb-20">
            <div className="relative overflow-hidden bg-black text-white pt-28 pb-20">
                <div className="absolute inset-0">
                    <img src={teach1} alt="" className="h-full w-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85" />
                </div>
                <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
                    <div className="mb-10 flex items-center justify-between">
                        <button
                            onClick={() => navigate(-1)}
                            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
                        >
                            <FaArrowLeft />
                            Back
                        </button>
                    </div>
                    <div className="max-w-3xl">
                        <p className="text-[11px] uppercase tracking-[0.35em] text-[#c9a24d]">Memberships</p>
                        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                            Build Consistency, Swim With Confidence
                        </h1>
                        <div className="mt-5 h-[2px] w-16 bg-[#c9a24d]" />
                        <p className="mt-5 text-base sm:text-lg text-white/80">
                            Choose a membership that matches your pace. All plans include structured training,
                            coach feedback, and a clear pathway to mastery.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                            <Link
                                to={ROUTES.PACKAGES}
                                className="px-7 py-3 bg-white text-[#013b59] text-xs uppercase tracking-[0.3em] hover:bg-gray-100"
                            >
                                View Packages
                            </Link>
                            <Link
                                to={ROUTES.CONTACT}
                                className="px-7 py-3 border border-white/30 text-xs uppercase tracking-[0.3em] text-white hover:border-[#c9a24d]"
                            >
                                Talk to Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-5 sm:px-8 mt-12">

                <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`rounded-3xl border ${plan.highlight ? 'border-[#c9a24d] shadow-[0_16px_35px_rgba(201,162,77,0.25)]' : 'border-gray-200'
                                } bg-white p-7`}
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold">{plan.name}</h3>
                                {plan.highlight && (
                                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#c9a24d]">
                                        Most Popular
                                    </span>
                                )}
                            </div>
                            <p className="mt-2 text-sm text-[#4a4f63]">{plan.blurb}</p>
                            <div className="mt-6">
                                <span className="text-3xl font-semibold">{plan.price}</span>
                                <span className="ml-2 text-sm text-[#4a4f63]">{plan.cadence}</span>
                            </div>
                            <div className="mt-6 space-y-3 text-sm text-[#4a4f63]">
                                {plan.features.map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-[#c9a24d]" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link
                                to={ROUTES.CONTACT}
                                className={`mt-8 inline-flex w-full items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.3em] ${plan.highlight
                                        ? 'bg-black text-white hover:bg-[#111]'
                                        : 'border border-gray-300 text-gray-700 hover:border-[#c9a24d]'
                                    }`}
                            >
                                Get Started
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                    <div className="rounded-3xl border border-gray-200 p-8">
                        <h2 className="text-2xl font-semibold">What Your Membership Includes</h2>
                        <p className="mt-3 text-sm text-[#4a4f63]">
                            Everything you need to build confidence in the water, with consistent guidance from our team.
                        </p>
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#4a4f63]">
                            {benefits.map((benefit) => (
                                <div key={benefit} className="flex items-start gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-[#c9a24d]" />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-[#c9a24d]/30 bg-[#c9a24d]/10 p-8">
                        <h2 className="text-2xl font-semibold">Need A Custom Plan?</h2>
                        <p className="mt-3 text-sm text-[#7a5a1a]">
                            We can build a schedule for competitive swimmers, adult learners, or corporate teams.
                        </p>
                        <Link
                            to={ROUTES.CONTACT}
                            className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-black text-white text-xs uppercase tracking-[0.3em] hover:bg-[#111]"
                        >
                            Request Custom Plan
                        </Link>
                    </div>
                </div>

                <div className="mt-16">
                    <div className="text-center">
                        <p className="text-[11px] uppercase tracking-[0.35em] text-[#c9a24d]">FAQ</p>
                        <h2 className="mt-4 text-2xl sm:text-3xl font-semibold">Common Questions</h2>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {faqs.map((item) => (
                            <div key={item.q} className="rounded-2xl border border-gray-200 p-6">
                                <h3 className="text-base font-semibold">{item.q}</h3>
                                <p className="mt-2 text-sm text-[#4a4f63]">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 rounded-3xl bg-[#013b59] text-white px-8 py-10 text-center">
                    <h2 className="text-2xl sm:text-3xl font-semibold">Ready to start training?</h2>
                    <p className="mt-3 text-sm text-white/80 max-w-2xl mx-auto">
                        Book a session today or chat with our team to find the best membership for you.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to={ROUTES.PACKAGES}
                            className="px-7 py-3 bg-white text-[#013b59] text-xs uppercase tracking-[0.3em] hover:bg-gray-100"
                        >
                            Book Now
                        </Link>
                        <Link
                            to={ROUTES.CONTACT}
                            className="px-7 py-3 border border-white/30 text-xs uppercase tracking-[0.3em] text-white hover:border-[#c9a24d]"
                        >
                            Contact Team
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Membership;
