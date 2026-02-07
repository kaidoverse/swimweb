import React from "react";
import { useNavigate } from "react-router-dom";
import useAutoCarousel from "@hooks/useAutoCarousel";
import { ROUTES } from '../../../../constants/routes';

import teach1 from "@assets/teach1.webp";
import newimg from "@assets/newimg.webp";
import manager_1 from "@assets/manager-1.webp";

const slides = [
    { src: teach1, text: "Learn to swim in just 4 days", buttonText: "Learn More", path: ROUTES.PACKAGES },
    { src: newimg, text: "All-female instructor team", buttonText: "Our Team", path: ROUTES.INSTRUCTORS },
    { src: manager_1, text: "Set and manage your swim goals", buttonText: "Get Started", path: ROUTES.CONTACT },
];

const Hero = () => {
    const navigate = useNavigate();
    const { index: activeIndex, goTo } = useAutoCarousel(slides.length, 8000);

    return (
        <>
            {/* Keyframes for fade/zoom animations */}
            <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeZoomIn {
          0% { opacity: 0; transform: scale(0.95) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

            <div className="relative w-full min-h-screen overflow-hidden bg-black">
                {/* Images */}
                {slides.map((slide, idx) => (
                    <img
                        key={idx}
                        src={slide.src}
                        alt={slide.text}
                        loading="lazy"
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === activeIndex ? "opacity-100" : "opacity-0"}`}
                    />
                ))}

                {/* Dark overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

                {/* Content: Text + Button */}
                <div
                    key={activeIndex} // ✅ Remount on slide change to retrigger animation
                    className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center text-center text-white w-full px-5 sm:px-8"
                >
                    <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-semibold leading-tight sm:leading-tight md:leading-[1.15] mb-5 animate-[fadeSlideIn_0.9s_ease-out_forwards] [animation-fill-mode:both]">
                        {slides[activeIndex].text}
                    </h1>
                    <button
                        onClick={() => navigate(slides[activeIndex].path)}
                        aria-label={slides[activeIndex].text}
                        className="bg-white text-[#013b59] px-6 py-3 sm:px-7 sm:py-3.5 whitespace-nowrap text-xs sm:text-sm uppercase tracking-[0.3em] transition-colors duration-300 hover:bg-[#f2f2f2] animate-[fadeSlideIn_0.7s_ease-out_forwards] [animation-delay:0.12s] [animation-fill-mode:both]"
                    >
                        {slides[activeIndex].buttonText}
                    </button>
                </div>

                {/* Carousel dots */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-30">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${i === activeIndex ? "bg-white scale-125" : "bg-white/50"}`}
                            onClick={() => goTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Hero;
