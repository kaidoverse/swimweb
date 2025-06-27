import React, { useEffect, useRef, useState } from 'react';
import './About.css';

import inst1 from '../../assets/inst1.png';
import play_icon from '../../assets/play-icon.png';

const About = ({ setPlayState, playState }) => {
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

        if (aboutRef.current) observer.observe(aboutRef.current);

        return () => {
            if (aboutRef.current) observer.unobserve(aboutRef.current);
        };
    }, []);

    const handlePlayClick = () => {
        if (!playState) setPlayState(true);
    };

    return (
        <section
            ref={aboutRef}
            className={`about-section ${isVisible ? 'visible' : ''}`}
        >
            <div className="about-left">
                <img
                    src={inst1}
                    alt="Female instructor teaching swimming"
                    className="about-img"
                    loading="lazy"
                    decoding="async"
                />
                <img
                    src={play_icon}
                    alt="Play video"
                    className="play-icon"
                    onClick={handlePlayClick}
                    aria-label="Play introduction video"
                />
            </div>

            <div className="about-right">
                <h3>About Us</h3>
                <h2 className='bvb'>We are an all-female instructor group</h2>
                <p>
                    Equipped to teach you how to swim in just four days, SWA conducts classes for both
                    children and adults. Our staff is perfectly trained to help participants overcome the fear
                    of water and master swimming techniques in a calm and pleasant atmosphere.
                    <br /><br />
                    Our mission is to instill a lifelong love of swimming and water safety. By creating a
                    fun and supportive environment, we ensure swimmers are excited about learning and
                    motivated to become safer in the water.
                </p>
            </div>
        </section>
    );
};

export default About;
