import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { PACKAGES } from '../../constants/packages';

const PricingCard = ({ title, price, features, image, slug }) => {
    const navigate = useNavigate();

    const handleBookingClick = () => {
        navigate(ROUTES.PACKAGES_BOOKING(slug));
    };

    return (
        <div
            className="group relative h-[460px] cursor-pointer overflow-hidden rounded-sm"
            onClick={handleBookingClick}
        >
            <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

            <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
                <p className="text-sm text-white/70 mb-4">{features[0]}</p>

                <div className="flex items-center justify-between w-full">
                    <div className="text-sm text-white font-medium">
                        ₵{price} <span className="text-white/70">/person</span>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleBookingClick();
                        }}
                        className="flex items-center gap-2 text-sm font-medium text-[#c9a24d] uppercase tracking-wider transition-all group"
                    >
                        Sign Up
                        <span className="flex items-center gap-2 text-sm font-medium text-[#c9a24d] uppercase tracking-wider hover:gap-3 transition-all"
                        >→</span>
                    </button>


                </div>
            </div>
        </div>
    );
};

const OurPackages = () => {
    return (
        <>

            <section className="bg-white pt-24 pb-10 px-6 lg:px-12 md:pt-28 lg:pt-32">
                <div className="max-w-[1300px] mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-wide scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">Our Packages</h2>
                        <div className="mt-4 h-[2px] w-20 bg-[#c9a24d] mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {PACKAGES.map((pkg, index) => (
                            <PricingCard key={index} {...pkg} />
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default OurPackages;
