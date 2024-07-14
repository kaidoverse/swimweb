import React from 'react'
import './Footer.css'
import Swaglogo3 from '../../assets/Swaglogo3.png'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <img src={Swaglogo3} alt="logo-footer" className="footer-logo" />
                <div className="footer-site-map">
                    <p className="footer-title">SITEMAP</p>
                    <Link className='footer-item' to='hero' smooth={true} offset={0} duration={500}>Home</Link>
                    <Link className='footer-item' to='program' smooth={true} offset={0} duration={500}>Program</Link>
                    <Link className='footer-item' to='about' smooth={true} offset={0} duration={500}>About us</Link>
                    <Link className='footer-item' to='instructors' smooth={true} offset={0} duration={500}>Instructors</Link>
                    <Link className='footer-item' to='testimonials' smooth={true} offset={0} duration={500}>Testimonials</Link>
                </div>
                <div className="footer-contact">
                    <p className="footer-title">CONTACT</p>
                    <p className="footer-item">AH hotel conference</p>
                    <p className="footer-item">123-456-7890</p>
                    <p className="footer-item">swimwithama@swa.com</p>
                </div>
                <div className="footer-social">
                    <p className="footer-title">SOCIAL MEDIA LINKS</p>
                    <a className="footer-item" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a className="footer-item" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a className="footer-item" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>

                </div>
            </div>
        </div>
    )
}

export default Footer