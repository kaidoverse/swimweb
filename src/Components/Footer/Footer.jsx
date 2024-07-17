import React from 'react'
import './Footer.css'
import swam_logo from '../../assets/swam-logo.png'
import { SiDatabricks } from 'react-icons/si'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import ScrollToTop from 'react-scroll-to-top'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer"><SiDatabricks className='icon' />
                        <img src={swam_logo} alt="" />
                    </div>
                    <ScrollToTop smooth />

                    <BsFillArrowUpCircleFill className='icon' />
                </div>
                <div className="col-container">
                    <div className="col">
                        <h3>Navigation</h3>
                        <p>Home</p>
                        <p>Program</p>
                        <p>About</p>
                        <p>Instructors</p>
                        <p>Testimonials</p>
                        <p>Contact</p>
                    </div>
                    <div className="col">
                        <h3>My Account</h3>
                        <p>Home</p>
                        <p>Program</p>
                        <p>About</p>
                        <p>Instructors</p>
                        <p>Testimonials</p>
                        <p>Contact</p>
                    </div>
                    <div className="col">
                        <h3>Information</h3>
                        <p>Home</p>
                        <p>Program</p>
                        <p>About</p>
                        <p>Instructors</p>
                        <p>Testimonials</p>
                        <p>Contact</p>
                    </div>
                    <div className="col">
                        <h3>Legal</h3>
                        <p>Home</p>
                        <p>Program</p>
                        <p>About</p>
                        <p>Instructors</p>
                        <p>Testimonials</p>
                        <p>Contact</p>
                    </div>
                    <form>
                        <h3>Join Our Newsletter</h3>
                        <input type="email" placeholder='Enter your email' />
                        <FiMail className='mail-icon' />
                        <div className="social-group">
                            <FaInstagram className='social-icon' />
                            <FaFacebook className='social-icon' />
                            <FaLinkedin className='social-icon' />
                            <FaTwitter className='social-icon' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer