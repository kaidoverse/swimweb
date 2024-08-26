import React from 'react';
import './Program.css';
import breaststroke from '../../assets/breaststroke.png';
import freestyle from '../../assets/freestyle.png';
import backstroke from '../../assets/backstroke.png';
import breaststroke2 from '../../assets/breaststroke2.png';
import image_2 from '../../assets/image-2.png';
import backstroke1 from '../../assets/backstroke1.png';

const Program = () => {
    return (
        <div className='head container'>
            <div className="program-text">
                <h2>Our Swimming Programs</h2>
                <p>Choose a style and start your journey with our experienced instructors.</p>

            </div>
            <div className='program'>
                <div className='programm'>
                    <img src={breaststroke} alt="Breaststroke" />
                    <div className='caption'>
                        <img src={breaststroke2} alt="Breaststroke Icon" />
                        <p>Breaststroke</p>
                    </div>
                </div>
                <div className='programm'>
                    <img src={freestyle} alt="Freestyle" />
                    <div className='caption'>
                        <img src={image_2} alt="Freestyle Icon" />
                        <p>Freestyle</p>
                    </div>
                </div>
                <div className='programm'>
                    <img src={backstroke} alt="Backstroke" />
                    <div className='caption'>
                        <img src={backstroke1} alt="Backstroke Icon" />
                        <p>Backstroke</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Program;
