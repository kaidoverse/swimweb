import React from 'react';
import './Takers.css';
import difference from '../../assets/difference.png';
import lap_swimmer from '../../assets/lap-swimmer.png';
import watericon from '../../assets/watericon.png';

const Takers = () => {
    return (
        <div className="Takers">
            <h1 className="heading-0"> Why Choose Us?</h1>
            <div className="items">
                <div className="image">
                    <img src={difference} alt="healthcare" />
                    <h1>Safety-Centric Approach</h1>
                    <p>We believe that stronger swimmers are safer swimmers.</p>
                </div>
                <div className="image">
                    <img src={lap_swimmer} alt="healthcare" />
                    <h1>Safety-Centric
                        Approach</h1>
                    <p>We believe that stronger swimmers are safer swimmers.</p>
                </div>
                <div className="image">
                    <img src={watericon} alt="healthcare" />
                    <h1>Safety-Centric Approach</h1>
                    <p>We believe that stronger swimmers are safer swimmers.</p>
                </div>



            </div>
        </div>
    );
};

export default Takers;

