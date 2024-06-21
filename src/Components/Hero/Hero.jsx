import React, { useState, useEffect } from 'react';
import './Hero.css';

import teach1 from '../../assets/teach1.png';
import newimg from '../../assets/newimg.png';
import manager_1 from '../../assets/manager-1.png';

const Hero = () => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImageIndex(prevIndex => (prevIndex + 1) % 3);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='hero container'>
            <div className='hero-images'>
                <img src={teach1} alt="Image 1" className={`hero-image ${activeImageIndex === 0 ? 'active' : ''}`} />
                <img src={newimg} alt="Image 2" className={`hero-image ${activeImageIndex === 1 ? 'active' : ''}`} />
                <img src={manager_1} alt="Image 3" className={`hero-image ${activeImageIndex === 2 ? 'active' : ''}`} />
            </div>
            <div className='hero-text'>
                <h1>Learn to swim in 4 days</h1>
                <p>Our unique teaching style is designed to equip you with high-end swimming skills in just 4 days.</p>
                <button className='btn'>Explore More</button>
            </div>
        </div>
    );
};

export default Hero;
