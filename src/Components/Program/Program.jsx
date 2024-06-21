import React from 'react'
import './Program.css'
import teach1 from '../../assets/teach1.png'
import image_1 from '../../assets/image-1.png'
import image_2 from '../../assets/image-2.png'
import image_3 from '../../assets/image-3.png'




const Program = () => {
    return (
        <div className='program'>
            <div className='programm'>
                <img src={teach1} alt="" />
                <div className='caption'>
                    <img src={image_1} alt="" />
                    <p>Aqua Babies</p>
                </div>
            </div>
            <div className='programm'>
                <img src={teach1} alt="" />
                <div className='caption'>
                    <img src={image_2} alt="" />
                    <p>Young Adults</p>
                </div>
            </div>
            <div className='programm'>
                <img src={teach1} alt="" />
                <div className='caption'>
                    <img src={image_3} alt="" />
                    <p>Adults</p>
                </div>
            </div>

        </div>
    )
}

export default Program
