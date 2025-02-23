import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

import teach1 from '../../assets/teach1.png';
import newimg from '../../assets/newimg.png';
import manager_1 from '../../assets/manager-1.png';

const Hero = () => {
    const images = [
        { src: teach1, text: 'Learn to swim in 4 days', },
        { src: newimg, text: 'All female instructor group' },
        { src: manager_1, text: 'Manage your swimming goals' }
    ];

    const navigate = useNavigate();

    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImageIndex(prevIndex => (prevIndex + 1) % 3);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    const handleExploreClick = () => {
        navigate('/ourPackages'); // Navigate to the programs page
    };
    return (
        <div className='hero container'>
            <div className='hero-images'>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={`Image ${index + 1}`}
                        className={`hero-image ${activeImageIndex === index ? 'active' : ''}`}
                    />
                ))}
            </div>
            <div className='hero-text'>
                <h1>{images[activeImageIndex].text}</h1>
                {/* <p>Our unique teaching style is designed to equip you with high-end swimming skills in just 4 days.</p> */}
                <button className='btn' onClick={handleExploreClick}>Explore More</button>
            </div>
        </div>
    );
};

export default Hero; 