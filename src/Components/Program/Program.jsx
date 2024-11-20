import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Program.css';
import breaststroke from '../../assets/breaststroke.png';
import freestyle from '../../assets/freestyle.png';
import backstroke from '../../assets/backstroke.png';

const Program = () => {
    const navigate = useNavigate();

    const programs = [
        {
            name: 'Recommended',
            image: breaststroke,
            description: 'Recommended starting point for beginners',
            path: '/breaststroke',
        },
        {
            name: 'Packages',
            image: freestyle,
            description: 'Build your own personalized package',
            path: '/OurPackages',
        },
        {
            name: 'Membership',
            image: backstroke,
            description: 'Long-term swimming commitment',
            path: '/membership',
        },
    ];

    const handleEnroll = (path) => {
        navigate(path);
    };

    return (
        <div className='head'>
            <h2>Our Swimming Programs</h2>
            <p>Come discover the world of swimming lessons with SWA...</p>
            <div className='program'>
                {programs.map((program, index) => (
                    <div key={index} className='programm'>
                        <img src={program.image} alt={`${program.name} swimming technique`} />
                        {/* <div className='caption'>
                            <p>{program.name}</p>
                        </div> */}
                        <div className='pricing-info'>
                            <h3>{program.name}</h3>
                            <p className='description'>{program.description}</p>
                            <button
                                className='enroll-btn'
                                onClick={() => handleEnroll(program.path)}
                            >
                                Enroll Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Program;
