import React from 'react'
import './Program.css'
import breaststroke from '../../assets/breaststroke.png'
import freestyle from '../../assets/freestyle.png'
import backstroke from '../../assets/backstroke.png'
import breaststroke2 from '../../assets/breaststroke2.png'
import image_2 from '../../assets/image-2.png'
import backstroke1 from '../../assets/backstroke1.png'




const Program = () => {
    return (
        <div className='head'>
            <h2>Do you want to learn to swim?

                We teach swimming from the very beginning,
                <br />
                where our instructors approach everyone with patience and understanding.</h2>
            <div className='program'>
                <div className='programm'>
                    <img src={breaststroke} alt="" />
                    <div className='caption'>
                        <img src={breaststroke2} alt="" />
                        <p>Breaststroke</p>
                    </div>
                </div>
                <div className='programm'>
                    <img src={freestyle} alt="" />
                    <div className='caption'>
                        <img src={image_2} alt="" />
                        <p>Freestyle</p>
                    </div>
                </div>
                <div className='programm'>
                    <img src={backstroke} alt="" />
                    <div className='caption'>
                        <img src={backstroke1} alt="" />
                        <p>backstroke</p>
                    </div>
                </div>

            </div>

        </div>




    )
}

export default Program
