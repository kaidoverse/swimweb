import React from 'react';
import './WhyChooseUs.css';
import healthcare from '../../assets/healthcare.png';
import mental_health from '../../assets/mental-health.png';
import stress_relief from '../../assets/stress-relief.png';

const WhyChooseUs = () => {
    return (
        <div className="whychoose">
            <h1 className="heading"> Why Learn Swimming?</h1>
            <div className="itemss">
                <div className="itemm">
                    <div className="image">
                        <img src={healthcare} alt="healthcare" />
                    </div>
                    <h1 className="text">Improves physical health</h1>
                </div>
                <div className="itemm">
                    <div className="image">
                        <img src={mental_health} alt="mental-health" />
                    </div>
                    <div className="text">Improves mental health</div>
                </div>
                <div className="itemm">
                    <div className="image">
                        <img src={stress_relief} alt="stress-relief" />
                    </div>
                    <div className="text">Helps reduce stress and anxiety</div>
                </div>
            </div>

        </div>
    );
};

export default WhyChooseUs;

