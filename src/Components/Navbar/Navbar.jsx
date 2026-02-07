import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import swam_logo from '@assets/swam-logo.png';
import { ROUTES, NAV_LINKS } from '../../constants/routes';

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMobileMenu(false);
    }, [location.pathname]);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenu(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        document.body.style.overflow = mobileMenu ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenu]);

    const toggleMenu = () => {
        setMobileMenu(prev => !prev);
    };

    const navLinks = [
        { path: ROUTES.HOME, label: 'Home' },
        ...NAV_LINKS,
    ];

    return (
        <>
            <style>{`
                /* Force desktop nav to show on larger screens */
                @media (min-width: 768px) {
                    .desktop-nav {
                        display: flex !important;
                    }
                    .mobile-toggle {
                        display: none !important;
                    }
                }
                
                /* Force desktop nav to hide on mobile */
                @media (max-width: 767px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .mobile-toggle {
                        display: block !important;
                    }
                }
            `}</style>

            <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-5">
                <nav className="bg-black text-white rounded-[50px] py-3 px-8 flex items-center justify-between max-w-[1200px] w-full shadow-[0_4px_20px_rgba(0,0,0,0.3)]">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <div className=" w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden p-1">
                            <img
                                src={swam_logo}
                                alt="SWAM Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </Link>


                    {/* Desktop Nav */}
                    <ul className="desktop-nav items-center gap-8 list-none m-0 p-0">
                        {navLinks.map(({ path, label }) => (
                            <li key={path} className="m-0 p-0">
                                <Link
                                    to={path}
                                    className={`text-white no-underline text-[15px] transition-colors hover:text-gray-300 ${location.pathname === path ? 'font-semibold' : 'font-normal'
                                        }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <li className="m-0 p-0">
                            <Link to={ROUTES.CONTACT}>
                                <button className="bg-white text-[#013b59] rounded-[50px] px-6 py-2.5 text-[14px] font-medium hover:bg-gray-100 transition-colors border-none cursor-pointer">
                                    Contact us
                                </button>
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="mobile-toggle p-2 bg-transparent border-none cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="26"
                            height="26"
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
            </div>

            {/* ================= Mobile Overlay ================= */}
            {mobileMenu && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={toggleMenu}
                />
            )}

            {mobileMenu && (
                <div className="fixed top-[88px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-40px)] max-w-[1200px] px-2">
                    <aside className="bg-black text-white rounded-[28px] px-6 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] animate-[fadeSlideIn_0.25s_ease_forwards]">
                        <ul className="flex flex-col gap-0 list-none m-0 p-0">
                            {navLinks.map(({ path, label }) => (
                                <li key={path} className="my-5 mx-0">
                                    <Link
                                        to={path}
                                        className={`text-white no-underline text-lg transition-colors hover:text-gray-300 ${location.pathname === path ? 'font-semibold' : 'font-normal'
                                            }`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                            <li className="my-5 mx-0">
                                <Link to={ROUTES.CONTACT}>
                                    <button className="w-full bg-white text-[#013b59] rounded-md py-3 font-medium hover:bg-gray-100 transition-colors border-none cursor-pointer">
                                        Contact us
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </aside>
                </div>
            )}
        </>
    );
};

export default Navbar;
