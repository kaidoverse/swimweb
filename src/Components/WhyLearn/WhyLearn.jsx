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
        <section className="whylearn">
            <div
                ref={sectionRef}
                className={`whylearn-section ${isVisible ? 'visible' : 'hidden'}`}
            >
                <h2 className="heading">Why Learn Swimming?</h2>
                <div className="items">
                    <div className="itemm" role="region" aria-label="Physical health benefit">
                        <div className="item-card">
                            <div className="image">
                                <img src={healthcare} alt="Improves physical health" loading="lazy" decoding="async" />
                            </div>
                            <div className="text">Improves physical health</div>
                        </div>
                    </div>

                    <div className="itemm" role="region" aria-label="Mental health benefit">
                        <div className="item-card">
                            <div className="image">
                                <img src={mental_health} alt="Improves mental health" loading="lazy" decoding="async" />
                            </div>
                            <div className="text">Improves mental health</div>
                        </div>
                    </div>

                    <div className="itemm" role="region" aria-label="Stress relief benefit">
                        <div className="item-card">
                            <div className="image">
                                <img src={stress_relief} alt="Reduces stress and anxiety" loading="lazy" decoding="async" />
                            </div>
                            <div className="text">Reduces stress and anxiety</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyLearn;
