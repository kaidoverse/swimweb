import React, { useEffect, useRef, useState } from 'react';
import './WhyLearn.css';
import healthcare from '../../assets/healthcare.png';
import mental_health from '../../assets/mental-health.png';
import stress_relief from '../../assets/stress-relief.png';

const WhyLearn = () => {
    const sectionRef = useRef();
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

        if (sectionRef.current) observer.observe(sectionRef.current);
    }, []);

    return (
        <div className="whylearn">
            <div
                ref={sectionRef}
                className={`section whylearn-section ${!isVisible ? 'section--hidden' : ''}`}
            >
                <h1 className="heading">Why Learn Swimming?</h1>
                <div className="items">
                    <div className="itemm">
                        <div className="item-card">
                            <div className="image">
                                <img src={healthcare} alt="healthcare" />
                            </div>
                            <div className="text">Improves physical health</div>
                        </div>
                    </div>
                    <div className="itemm">
                        <div className="item-card">
                            <div className="image">
                                <img src={mental_health} alt="mental-health" />
                            </div>
                            <div className="text">Improves mental health</div>
                        </div>
                    </div>
                    <div className="itemm">
                        <div className="item-card">
                            <div className="image">
                                <img src={stress_relief} alt="stress-relief" />
                            </div>
                            <div className="text">Helps reduce stress and anxiety</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyLearn;
