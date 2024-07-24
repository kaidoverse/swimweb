import React from 'react'
import './Footer.css'
import Swaglogo3 from '../../assets/Swaglogo3.png'
import { SiDatabricks } from 'react-icons/si'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import ScrollToTop from 'react-scroll-to-top'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <img src={Swaglogo3} alt="" className='logo-footer' />
                <ScrollToTop smooth />
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
                        <h3>Contact</h3>
                        <p>123 Citrus Lane</p>
                        <p>123-456-7890</p>
                        <p>Swama@swa.com</p>

                    </div>
                    <div className="col">
                        <h3>Information</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
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