import React, { useState } from "react";
import "./Instructor.css";

export default function App() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, voluptas nostrum quisquam!",
            img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
            name: "Anna Morian",
        },
        {
            text: "Neque cupiditate assumenda in maiores repudiandae mollitia adipisci maiores repudiandae mollitia consectetur adipisicing architecto elit sed adipiscing elit.",
            img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp",
            name: "Teresa May",
        },
        {
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur est laborum neque cupiditate assumenda in maiores.",
            img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
            name: "Kate Allise",
        },
    ];

    const handleNext = () => {
        // Only increment if not on the last card
        if (currentIndex < testimonials.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        // Only decrement if not on the first card
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

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
                            <div className="image-container">
                                <img
                                    src={testimonial.img}
                                    alt="profile"
                                    className="profile-image"
                                />
                            </div>
                            <p className="text-muted">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="carousel-button prev"
                onClick={handlePrev}
                disabled={currentIndex === 0} // Disable button when on the first card
            >
                &#10094;
            </button>
            <button
                className="carousel-button next"
                onClick={handleNext}
                disabled={currentIndex === testimonials.length - 1} // Disable button when on the last card
            >
                &#10095;
            </button>
        </div>
    );
}
