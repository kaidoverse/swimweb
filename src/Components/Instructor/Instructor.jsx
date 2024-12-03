import React, { useState, useEffect } from "react";
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

    // Function to handle "Next" button click
    const handleNext = () => {
        if (currentIndex < testimonials.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    // Function to handle "Prev" button click
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    // Auto-advance through testimonials every 10 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 10000); // Change testimonial every 10 seconds

        return () => {
            clearInterval(intervalId); // Cleanup interval when component is unmounted
        };
    }, [testimonials.length]); // Effect will run on mount or when `testimonials.length` changes

    return (
        <div className="carousel-container">
            <h1>What our clients say?</h1>
            <div className="carousel-wrapper">
                <div
                    className="carousel"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div className="carousel-item" key={index}>
                            <p className="lead">{testimonial.text}</p>
                            <p className="text-muted">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="carousel-button prev"
                onClick={handlePrev}
                disabled={currentIndex === 0}
            >
                &#10094;
            </button>
            <button
                className="carousel-button next"
                onClick={handleNext}
                disabled={currentIndex === testimonials.length - 1}
            >
                &#10095;
            </button>
        </div>
    );
}
