import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './TestimonialCarousel.css';

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        role: "Beginner Swimmer",
        content: "I never thought I'd be comfortable in water, but thanks to the amazing instructors, I'm now swimming confidently!"
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Competitive Swimmer",
        content: "The advanced techniques I learned here have significantly improved my performance in competitions."
    },
    {
        id: 3,
        name: "Mike Johnson",
        role: "Parent",
        content: "My kids love their swimming lessons. The instructors are patient and make learning fun."
    },
    {
        id: 4,
        name: "Emily Brown",
        role: "Adult Learner",
        content: "It's never too late to learn! At 40, I finally conquered my fear of water. Truly life-changing."
    },
    {
        id: 5,
        name: "Alex Lee",
        role: "Fitness Enthusiast",
        content: "Swimming has become my favorite workout. The pool facilities here are top-notch!"
    }
];

const TestimonialCarousel = () => {
    const slider = useRef();
    const [tx, setTx] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const slideForward = () => {
        if (tx > -75 && !isTransitioning) {
            setIsTransitioning(true);
            setTx(prevTx => prevTx - 25);
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    const slideBackward = () => {
        if (tx < 0 && !isTransitioning) {
            setIsTransitioning(true);
            setTx(prevTx => prevTx + 25);
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    return (
        <div className="testimonial-carousel">
            <button className="nav-button prev" onClick={slideBackward} disabled={isTransitioning || tx === 0}>
                <ChevronLeft size={24} />
            </button>
            <div className="testimonial-container" ref={slider} style={{ transform: `translateX(${tx}%)` }}>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-card">
                        <p className="testimonial-content">"{testimonial.content}"</p>
                        <h3 className="testimonial-name">{testimonial.name}</h3>
                        <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                ))}
            </div>
            <button className="nav-button next" onClick={slideForward} disabled={isTransitioning || tx === -75}>
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

export default TestimonialCarousel;