import React from 'react'
import './About.css'
import instructor_1 from '../../assets/instructor-1.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img src={instructor_1} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' />

            </div>

            <div className='about-right'>
                <h3>ABOUT US</h3>
                <h2>We are an all female instructor group</h2>
                <p> equipped to teach you how to swim in 4 days.
                    SWA conducts classes for both children and adults in the field of swimming.
                    Our staff is perfectly trained in a calm and pleasant atmosphere
                    to make each participant of the course overcome the fear of water and
                    learn various swimming techniques.
                </p>
                <p>
                    SWA wants you and your children to love the water -
                    so it is our goal and promise to educate all swimmers in a fun and happy environment!
                    If we can get swimmers excited about swim lessons, then they will truly want to learn how to become safer in the water,
                    guaranteeing a lifelong love of swimming.
                </p>
                {/* <p>
                    We understand that as a parent, your child's safety is paramount.
                    At SWA, we believe your swimmers deserve to be in the best hands at all times,
                    which is why our instructors go through an extensive recruitment process and a comprehensive training period.
                    In addition, we always try to keep our classes small and provide a maximum number of instructors.
                </p> */}
            </div>
        </div>

    )
}

export default About