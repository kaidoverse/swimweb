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
            if (location.pathname === '/') {
                setSticky(window.scrollY > 50);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

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
                <li><Link to='/programpage'>Program</Link></li>
                <li><Link to='/aboutpage'>About us</Link></li>
                <li><Link to='/InstructorsPage'>Instructors</Link></li>
                <li><Link to='/TestimonialsPage'>Testimonials</Link></li>
                <li><Link to='/ContactPage'><button className='btn'>Contact us</button></Link></li>
            </ul>
            <img src={menu_icon} alt="Menu Icon" className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
}

export default Navbar;
