import React from 'react';
import { useRevealOnScroll } from '@hooks/useRevealOnScroll';
import { useVideo } from '../../../../context/VideoContext';
import instructor_1 from '@assets/instructor-1.webp';
import play_icon from '@assets/play-icon.png';

const About = () => {
    const { ref: aboutRef, visible: isVisible } = useRevealOnScroll(0.2);
    const { openVideo } = useVideo();

    const handlePlayClick = () => {
        openVideo();
    };

    return (
        <section
            ref={aboutRef}
            className="bg-black text-white py-12 md:py-16 lg:py-20 px-6 md:px-12"
        >
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center">

                    {/* Left Side - Image */}
                    <div className="relative order-2 lg:order-1">
                        {/* Decorative Grid */}
                        <div className="absolute -left-8 -top-8 w-48 h-48 md:w-64 md:h-64 pointer-events-none hidden lg:block">
                            <svg viewBox="0 0 100 100" className="w-full h-full opacity-20" fill="none" stroke="currentColor" strokeWidth="0.5">
                                {[...Array(11).keys()].map(x => (
                                    <line key={`v-${x}`} x1={x * 10} y1="0" x2={x * 10} y2="100" />
                                ))}
                                {[...Array(11).keys()].map(y => (
                                    <line key={`h-${y}`} x1="0" y1={y * 10} x2="100" y2={y * 10} />
                                ))}
                            </svg>
                        </div>

                        {/* Image Container */}
                        <div className={`relative max-w-sm md:max-w-md lg:max-w-lg mx-0 md:mx-0 lg:ml-0 transition-all duration-1000 ease-out
                                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] lg:h-[500px] xl:h-[550px]">
                                <img
                                    src={instructor_1}
                                    alt="Female instructor teaching swimming"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />

                                {/* Play Button */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center group hover:bg-black/20 transition-all duration-300"
                                >
                                    <button
                                        type="button"
                                        onClick={handlePlayClick}
                                        aria-label="Play introduction video"
                                        className="rounded-full p-5 md:p-6 cursor-pointer group-hover:scale-110 transition-transform duration-300"
                                    >
                                        <img src={play_icon} alt="Play video" className="w-10 h-10 md:w-14 md:h-14" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className={`space-y-6 md:space-y-8 order-1 lg:order-2 transition-all duration-1000 ease-out
                                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {/* Label */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-[2px] bg-white"></div>
                            <span className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-white/80">
                                About Us
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.1] text-white max-w-xl">
                            We are an all-female instructor group
                        </h2>

                        {/* Description */}
                        <div className="space-y-5 text-white/70 text-base md:text-sm leading-relaxed max-w-2xl">
                            <p>
                                Equipped to teach you how to swim in just four days, SWA conducts classes for both
                                children and adults. Our staff is perfectly trained to help participants overcome the fear
                                of water and master swimming techniques in a calm and pleasant atmosphere.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="pt-2">
                            <button className="group inline-flex items-center gap-2 text-white font-medium text-base hover:gap-3 transition-all duration-300">
                                <span>Learn More About Us</span>
                                <svg
                                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
