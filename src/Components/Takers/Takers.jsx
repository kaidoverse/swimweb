// Takers.js
import React, { useEffect, useRef, useState } from 'react';
import './Takers.css';
import difference from '../../assets/difference.png';
import lap_swimmer from '../../assets/lap-swimmer.png';
import watericon from '../../assets/watericon.png';

const Takers = () => {
    const takersRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.15 }
        );

        if (takersRef.current) observer.observe(takersRef.current);

        return () => {
            if (takersRef.current) observer.unobserve(takersRef.current);
        };
    }, []);

    return (
        <div
            className={`takers-container ${isVisible ? 'visible' : ''}`}
            ref={takersRef}
        >
            <h1 className="takers-heading">Why Choose Us?</h1>
            <div className="takers-items">
                <div className="takers-card">
                    <img src={difference} alt="Safety Approach" />
                    <h1>Safety-Centric Approach</h1>
                    <p>We believe that stronger swimmers are safer swimmers.</p>
                </div>
                <div className="takers-card">
                    <img src={lap_swimmer} alt="Custom Learning" />
                    <h1>Custom Learning Experience</h1>
                    <p>Personalized learning plans based on a child's skill level.</p>
                </div>
                <div className="takers-card">
                    <img src={watericon} alt="Qualified Instructors" />
                    <h1>Qualified and Caring Instructors</h1>
                    <p>Our instructors are dedicated to supporting students' progress.</p>
                </div>
            </div>
        </div>
    );
};

export default Takers;