import React from 'react';
import './Takers.css';
import difference from '../../assets/difference.png';
import lap_swimmer from '../../assets/lap-swimmer.png';
import watericon from '../../assets/watericon.png';

const Takers = () => {
    return (
        <div className="Takers">
            <h1 className="heading-0"> Why Choose Us?</h1>
            <div className="itemsx">
                <div className="image">
                    <img src={difference} alt="healthcare" />
                    <h1>Safety-Centric Approach</h1>
                    <p>We believe that stronger swimmers are safer swimmers.</p>
                </div>
                <div className="image">
                    <img src={lap_swimmer} alt="healthcare" />
                    <h1>Customized Learning Experience</h1>
                    <p>We offer personalized learning plans based on a child's skill level and learning pace</p>
                </div>
                <div className="image">
                    <img src={watericon} alt="healthcare" />
                    <h1>Qualified and Caring Instructors</h1>
                    <p>Our network of swim instructors are dedicated to nurturing and supporting students’ progress.</p>
                </div>
            </div>
            {/* <div className="custom-shape-divider-bottom">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </div> */}
        </div>
    );
};

export default Takers;

