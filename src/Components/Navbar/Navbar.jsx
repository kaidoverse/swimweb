import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import swam_logo from '../../assets/swam-logo.png';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setSticky(window.scrollY > 50);
        if (location.pathname === '/') {
            window.addEventListener('scroll', handleScroll);
        } else {
            setSticky(true);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) setMobileMenu(false);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', mobileMenu);
        return () => document.body.classList.remove('no-scroll');
    }, [mobileMenu]);

    const toggleMenu = (e) => {
        e.preventDefault();
        setMobileMenu(prev => !prev);
    };

    const handleLinkClick = () => setMobileMenu(false);

    return (
        <nav className={`containerr ${sticky ? 'dark-nav' : ''}`}>
            <img src={swam_logo} alt="SWAM Logo" className="Swaglogo12" />

            {mobileMenu && (
                <div className="mobile-menu-overlay" onClick={toggleMenu}></div>
            )}

            <ul className={mobileMenu ? 'mobile-menu-open' : ''}>
                {['/', '/OurPackages', '/OurTeam', '/InstructPage'].map((path, idx) => (
                    <li key={idx}>
                        <Link
                            to={path}
                            onClick={handleLinkClick}
                            className={location.pathname === path ? 'active-link' : ''}
                        >
                            {path === '/' ? 'Home' :
                                path === '/OurPackages' ? 'Program' :
                                    path === '/OurTeam' ? 'About us' :
                                        'Instructors'}
                        </Link>
                    </li>
                ))}
                <li>
                    <Link to="/Contact" onClick={handleLinkClick}>
                        <button className="bbtn">Contact us</button>
                    </Link>
                </li>
            </ul>

            <button className="menu-toggle-button" onClick={toggleMenu} aria-label="Toggle menu">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    fill="white"
                >
                    {mobileMenu ? (
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    ) : (
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                    )}
                </svg>
            </button>
        </nav>
    );
};

export default Navbar;
