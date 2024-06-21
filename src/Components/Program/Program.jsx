import React from 'react'
import './Program.css'

import teach1 from '../../assets/lesson.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program_icon_2.png'
import program_icon_3 from '../../assets/program_icon_3.png'

const Program = () => {
    return (
        <div className='program'>
            <div className='programm'>
                <img src={teach1} alt="" />
                <div className='caption'>
                    <img src={program_icon_1} alt="" />
                    <p>Aqua Babies</p>
                </div>
            </div>
            <div className='programm'>
                <img src={teach1} alt="" />
                <div className='caption'>
                    <img src={program_icon_2} alt="" />
                    <p>Young Adults</p>
                </div>
            </div>
            <div className='programm'>
                <img src={teach1} alt="" />
                <div className='caption'>
                    <img src={program_icon_3} alt="" />
                    <p>Adults</p>
                </div>
            </div>
        </div>
    )
}

export default Program