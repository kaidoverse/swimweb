import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

import teach1 from '../../assets/teach1.webp';
import newimg from '../../assets/newimg.webp';
import manager_1 from '../../assets/manager-1.webp';

const Hero = () => {
    const images = [
        {
            src: teach1,
            text: 'Learn to swim in just 4 days',
            buttonText: 'Learn More',
            path: '/OurPackages'
        },
        {
            src: newimg,
            text: 'All-female instructor team',
            buttonText: 'Our Team',
            path: '/InstructPage'
        },
        {
            src: manager_1,
            text: 'Set and manage your swim goals',
            buttonText: 'Get Started',
            path: '/Contact'
        },
    ];

    const navigate = useNavigate();
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const timerRef = useRef(null);

    const startTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(() => {
            setActiveImageIndex(prev => (prev + 1) % images.length);
        }, 8000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    const handleButtonClick = (path) => {
        navigate(path);
    };

    const goToSlide = (index) => {
        setActiveImageIndex(index);
        startTimer();
    };

    return (
        <div className="hero container">
            <div className="hero-images" role="presentation">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.text}
                        className={`hero-image ${activeImageIndex === index ? 'active' : ''}`}
                        loading="lazy"
                        decoding="async"
                        fetchpriority={activeImageIndex === index ? 'high' : 'low'}
                    />
                ))}
                <div className="hero-images-overlay"></div>
            </div>

            <div key={activeImageIndex} className="hero-text">
                <h1 className="animate-text">{images[activeImageIndex].text}</h1>
                <button
                    className="btn animate-btn"
                    onClick={() => handleButtonClick(images[activeImageIndex].path)}
                    aria-label={images[activeImageIndex].text}
                >
                    {images[activeImageIndex].buttonText}
                </button>
            </div>

            <div className="pagination-dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${activeImageIndex === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;