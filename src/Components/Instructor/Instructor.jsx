import React, { useEffect, useState, useCallback } from "react";
import "./Instructor.css";

export default function App() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            text: "It's never too late to learn! At 40, I finally conquered my fear of water. Truly life-changing.",
            name: "Theresa",
        },
        {
            text: "My kids love their swimming lessons. The instructors are patient and make learning fun.",
            name: "Anna",
        },
        {
            text: "I never thought I'd be comfortable in water, but thanks to the amazing instructors, I'm now swimming confidently!",
            name: "Serwaa",
        },
    ];

    const maxIndex = testimonials.length - 1;

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNext();
        }, 10000);
        return () => clearInterval(intervalId);
    }, [handleNext]);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [handleNext, handlePrev]);

    return (
        <div className="carousel-container">
            <div className="header">
                <h1>What our clients say?</h1>

                <div className="carousel-wrapper">
                    <div
                        className="carousel"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                className="carousel-item"
                                key={index}
                                style={{
                                    width: '100%',
                                }}
                            >
                                <p className="lead">"{testimonial.text}"</p>
                                <div className="image-container">
                                    <p className="text-muted">- {testimonial.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="carousel-button prev" onClick={handlePrev}>
                    ❮
                </button>
                <button className="carousel-button next" onClick={handleNext}>
                    ❯
                </button>

                <div className="dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dots__dot ${index === currentIndex ? 'dots__dot--active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        ></button>
                    ))}
                </div>
            </div></div>
    );
}