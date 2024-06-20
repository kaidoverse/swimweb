import React from 'react'
import './Navbar.css'
import Swaglogo3 from '../../assets/Swaglogo3.png'

const Navbar = () => {
    return (
        <nav className='container'>
            <img src={Swaglogo3} alt="" className='Swaglogo3' />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Instructors</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contact us</button></li>
            </ul>
        </nav>
    )
}

export default Navbar