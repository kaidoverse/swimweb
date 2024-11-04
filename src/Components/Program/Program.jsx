import React from 'react';
import './Program.css';
import breaststroke from '../../assets/breaststroke.png';
import freestyle from '../../assets/freestyle.png';
import backstroke from '../../assets/backstroke.png';
// import breaststrokeIcon from '../../assets/breaststroke2.png';
// import freestyleIcon from '../../assets/image-2.png';
// import backstrokeIcon from '../../assets/backstroke1.png';

const Program = () => {
    const programs = [
        {
            name: 'Recommended',
            image: breaststroke,
            // icon: breaststrokeIcon,

            description: 'Recommended starting point for beginners'
        },
        {
            name: 'Packages',
            image: freestyle,
            // icon: freestyleIcon,

            description: 'Build your own personalized package'
        },
        {
            name: 'Membership',
            image: backstroke,
            // icon: backstrokeIcon,

            description: 'Long term swimming commitment'
        },
    ];

    const handleEnroll = (programName) => {
        alert(`You've enrolled in the ${programName} `);
    }

    return (
        <div className='head'>
            <h2>Our Swimming Programs</h2>
            <p>Come discover the world of swimming lessons with SWA We make learning to swim fun and exciting. Everyone is welcome to join, whether you’re a beginner or an advanced swimmer. Our swim school is full of energy and ready to meet your needs.

            </p>
            <div className='program'>
                {programs.map((program, index) => (
                    <div key={index} className='programm'>
                        <img src={program.image} alt={`${program.name} swimming technique`} />
                        <div className='caption'>
                            {/* <img src={program.icon} alt={`${program.name} icon`} /> */}
                            <p>{program.name}</p>
                        </div>
                        <div className='pricing-info'>
                            <h3>{program.name}</h3>
                            {/* <p className='price'>{program.price}</p> */}
                            <p className='description'>{program.description}</p>
                            <button className='enroll-btn' onClick={() => handleEnroll(program.name)}>Enroll Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Program;