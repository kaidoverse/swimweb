import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import swam_logo from '../../assets/swam-logo.png';

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
            <img src={swam_logo} alt="Logo" className="Swaglogo12" />
            {/* Overlay for mobile menu */}
            {mobileMenu && (
                <div className="mobile-menu-overlay" onClick={toggleMenu}></div>
            )}
            {/* Mobile menu */}
            <ul className={mobileMenu ? 'mobile-menu-open' : ''}>
                <li>
                    <Link to="/" onClick={toggleMenu}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/OurPackages" onClick={toggleMenu}>
                        Program
                    </Link>
                </li>
                <li>
                    <Link to="/OurTeam" onClick={toggleMenu}>
                        About us
                    </Link>
                </li>
                <li>
                    <Link to="/InstructPage" onClick={toggleMenu}>
                        Instructors
                    </Link>
                </li>
                <li>
                    <button className="bbtn">Contact us</button>
                </li>
            </ul>
            {mobileMenu ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    fill="white"
                    className="menu-icon"
                    onClick={toggleMenu}
                >
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    fill="white"
                    className="menu-icon"
                    onClick={toggleMenu}
                >
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
            )}
        </nav>
    );
};

export default Navbar;