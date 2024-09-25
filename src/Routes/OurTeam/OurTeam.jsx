import React from 'react'
import './OurTeam.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Hero from '../../Components/Hero/Hero';
import teach1 from '../../assets/teach1.png';
import ceo from '../../assets/ceo.jpeg';


const OurTeam = () => {
    return (
        <>
            <Navbar />
            <Hero />



            <div className="about-container">
                {/* <h1 className="about-header">About Our Swim School</h1> */}
                <section className="about-section">
                    <h2>Welcome to Swim With Ama Governor!</h2>
                    <div className="line"></div>
                    <p>At SWA, we believe that swimming is not just a skill, it's a life-saving ability and a gateway to a lifetime of aquatic enjoyment. Our passion is to instill confidence, safety, and love for the water in swimmers of all ages and abilities.</p>
                </section>

                <img
                    src={teach1}
                    alt="Swimming pool with instructors and students"
                    className="about-image"
                />

                <section className="about-section two-column">
                    <div className="image-container">
                        {/* <img src={teach1} alt="Our mission" className="section-image" /> */}
                    </div>
                    <div>
                        <h2>Our Mission</h2>
                        <div className="line"></div>
                        <p>Our mission is to provide high-quality swim instruction in a safe, fun, and encouraging environment.
                            We strive to help each student reach their full potential, whether they're taking their first splash or training for competition.
                            We are a dedicated team of female instructors, committed to imparting swimming skills to individuals of all genders.
                            Our teaching approach typically spans four days, tailored to suit various demographics such as children from the age of  2, young adults, the middle aged, the elderly, and individuals with special needs.
                            Our curriculum covers the fundamentals of four prominent swimming techniques: Breaststroke, Freestyle, Backstroke, and Butterfly.
                        </p>
                    </div>
                </section>

                <section className="about-section two-column">
                    <div className="content-container">
                        <h2 className='wwc'>Why Choose Us?</h2>
                        <div className="line"></div>
                        <ul className="about-list">
                            <li>Efficient Learning: Our intensive four-day program ensures that every client learns to swim quickly and effectively, all while having a great time and without feeling overwhelmed</li>
                            <li>Personalized Attention: Each client receives individualized instruction with our one-on-one private lessons, tailored to their specific needs and skill level</li>
                            <li>No Extra Charges: We believe in fairness and equality, which is why we do not impose additional fees on slower learners who may require more than four days to master swimming.</li>
                            <li>Ongoing Improvement: Upon completing lessons, clients have the opportunity to join our membership program. This allows them to continue honing their skills under the guidance of our experienced instructors, ensuring long-term progress and confidence in the water.</li>
                            <li>Classes for all ages: infants, children, teens, and adults</li>
                        </ul>
                    </div>
                    <br />
                    <div className="image-container">
                        <img src={teach1} alt="Why choose us" className="section-image" />
                    </div>
                </section>
                <div className="line"></div>
                <section className="about-section two-column">
                    <div className="image-container">
                        <img src={ceo} alt="Our history" className="section-image" />
                    </div>
                    <div className="content-container">
                        <h2 className='wccc'>Our History</h2>
                        <p>Established in 2018 by our founder, Ama Governor, SWA Swim School has quickly become a trusted name in swim education.
                            Ama's passion for swimming began in her teens, and over the years, she developed a deep love for the sport. Inspired by her own experiences in the water, she envisioned a school dedicated to teaching others the skills she had mastered.
                            With a focus on safety, confidence, and enjoyment, SWA Swim School was born. Since opening our doors, we have proudly taught countless students, helping them discover the joys of swimming.
                            Our commitment to excellence has set us apart, creating a welcoming environment for swimmers of all ages. We continue to grow and evolve, ensuring that every student has the opportunity to thrive in the water..</p>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Contact Us</h2>
                    <div className="line"></div>
                    <p>Ready to dive in? Contact us to learn more about our programs or to schedule a free assessment.</p>
                    <p>Phone: (555) 123-4567</p>
                    <p>Email: info@splashmasters.com</p>
                    <p>Address: 123 Aqua Lane, Wavetown, WA 98765</p>
                </section>
            </div>


            <Footer />
        </>
    )
}

export default OurTeam