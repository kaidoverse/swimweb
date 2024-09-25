import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import swam_logo from '../../assets/swam-logo.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // No dependencies now


    useEffect(() => {
        // Set sticky to true if not on the home page (App.jsx)
        if (location.pathname !== '/') {
            setSticky(true);
        } else {
            // Reset sticky to false when on the home page and at the top
            setSticky(window.scrollY > 50);
        }
    }, [location.pathname]);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <nav className={`containerr ${sticky ? 'dark-nav' : ''}`}>
            <img src={swam_logo} alt="Logo" className='Swaglogo12' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/OurPackages'>Program</Link></li>
                <li><Link to='/OurTeam'>About us</Link></li>
                <li><Link to='/InstructPage'>Instructors</Link></li>
                <li><Link to='/ClientSays'>Testimonials</Link></li>
                <li><Link to='/ContactUs'><button className='btn'>Contact us</button></Link></li>
            </ul>
            <img src={menu_icon} alt="Menu Icon" className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
}

export default Navbar;
