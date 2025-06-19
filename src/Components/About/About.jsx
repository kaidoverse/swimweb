import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import inst1 from '../../assets/inst1.png';
import play_icon from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
    const aboutRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }
    }, []);

    return (
        <div
            ref={aboutRef}
            className={`about ${isVisible ? 'visible' : ''}`}
        >
            <div className="about-left">
                <img src={inst1} alt="Instructor teaching swimming" className="about-img" />
                <img
                    src={play_icon}
                    alt="Play button"
                    className="play-icon"
                    onClick={() => setPlayState(true)}
                />
            </div>
            <div className="about-right">
                <h3>ABOUT US</h3>
                <h2>We are an all-female instructor group</h2>
                <p>
                    Equipped to teach you how to swim in just four days, SWA conducts classes for both
                    children and adults in the field of swimming. Our staff is perfectly trained to help
                    participants overcome the fear of water and master various swimming techniques in a
                    calm and pleasant atmosphere. SWA's mission is to instill a lifelong love of swimming and water safety. By creating a
                    fun and happy learning environment, we ensure that swimmers are excited about lessons
                    and motivated to become safer in the water.
                </p>
            </div>
        </div>
    );
};

export default About;
