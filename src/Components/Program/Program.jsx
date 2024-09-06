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
            name: 'Breaststroke',
            image: breaststroke,
            // icon: breaststrokeIcon,
            price: '₵700',
            description: 'Master the frog kick and wave-like body motion'
        },
        {
            name: 'Freestyle',
            image: freestyle,
            // icon: freestyleIcon,
            price: '₵1000',
            description: 'Learn the fastest and most efficient swimming stroke'
        },
        {
            name: 'Backstroke',
            image: backstroke,
            // icon: backstrokeIcon,
            price: '₵900',
            description: 'Perfect your balance and back-lying position'
        },
    ];

    const handleEnroll = (programName) => {
        alert(`You've enrolled in the ${programName} `);
    }

    return (
        <div className='head '>
            <h2>Our Swimming Programs</h2>
            <p>Choose a style and start your journey with our experienced instructors.</p>
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
                            <p className='price'>{program.price}</p>
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