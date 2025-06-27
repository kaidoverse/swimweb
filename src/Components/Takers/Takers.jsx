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

    const takersData = [
        {
            img: difference,
            alt: 'Safety Approach',
            title: 'Safety-Centric Approach',
            desc: 'We believe that stronger swimmers are safer swimmers.',
        },
        {
            img: lap_swimmer,
            alt: 'Custom Learning',
            title: 'Custom Learning Experience',
            desc: "Personalized learning plans based on a child's skill level.",
        },
        {
            img: watericon,
            alt: 'Qualified Instructors',
            title: 'Qualified and Caring Instructors',
            desc: 'Our instructors are dedicated to supporting students\' progress.',
        },
    ];

    return (
        <div className={`takers-container ${isVisible ? 'visible' : ''}`} ref={takersRef}>
            <h1 className="takers-heading">Why Choose Us?</h1>
            <div className="takers-items">
                {takersData.map((item, index) => (
                    <div
                        className={`takers-card ${isVisible ? 'fade-in' : ''}`}
                        style={{ transitionDelay: `${index * 0.2}s` }}
                        key={index}
                    >
                        <img src={item.img} alt={item.alt} />
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Takers;
