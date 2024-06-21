import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Swaglogo3 from '../../assets/Swaglogo3.png'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => [
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        ])
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={Swaglogo3} alt="" className='Swaglogo3' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
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