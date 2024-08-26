import React from 'react';
import './WhyLearn.css';
import healthcare from '../../assets/healthcare.png';
import mental_health from '../../assets/mental-health.png';
import stress_relief from '../../assets/stress-relief.png';

const WhyLearn = () => {
    return (
        <div className="whylearn">
            <h1 className="heading"> Why Learn Swimming?</h1>
            <div className="items">
                <div className="itemm">
                    <div className="item-card">
                        <div className="image">
                            <img src={healthcare} alt="healthcare" />
                        </div>
                        <div className="text">
                            Improves
                            physical health
                        </div>
                    </div>
                </div>
                <div className="itemm">
                    <div className="item-card">
                        <div className="image">
                            <img src={mental_health} alt="mental-health" />
                        </div>
                        <div className="text">
                            Improves
                            mental health
                            {/* <p>We believe that stronger swimmers are safer swimmers.</p> */}
                        </div>
                    </div>
                </div>
                <div className="itemm">
                    <div className="item-card">
                        <div className="image">
                            <img src={stress_relief} alt="stress-relief" />
                        </div>
                        <div className="text">
                            Helps reduce
                            stress and anxiety
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhyLearn;

