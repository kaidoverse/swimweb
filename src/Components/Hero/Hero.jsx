import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'


const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>Learn to swim in 4 days</h1>
                <p>Our unique teaching style is designed to equip you with high end swimming skills in just 4 days.</p>
                <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero