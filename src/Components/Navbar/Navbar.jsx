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

        window.scrollTo(0, 0);


        const handleScroll = () => {
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        // Apply scroll-based stickiness only on the home page
        if (location.pathname === '/') {
            window.addEventListener('scroll', handleScroll);
        }

        // Set sticky to true for all other pages
        if (location.pathname !== '/') {
            setSticky(true);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up
        };
    }, [location.pathname]); // Re-run effect when the path changes

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
                {/* <li><Link to='/ClientSays'>Testimonials</Link></li> */}
                <li><Link to='/ContactUs'><button className='btn'>Contact us</button></Link></li>
            </ul>
            <img src={menu_icon} alt="Menu Icon" className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
