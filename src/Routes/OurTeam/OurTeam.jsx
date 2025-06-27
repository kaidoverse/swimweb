import React from 'react';
import './OurTeam.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import teach1 from '../../assets/teach1.png';
import ceo from '../../assets/ceo.jpeg';

const OurTeam = () => {
    return (
        <>
            <Navbar />

            <div className="ourteam-container">
                <section className="ourteam-section">
                    <h2>About Us</h2>
                    <div className="ourteam-line"></div>
                    <p>
                        At SWA, we believe that swimming is not just a skill, it's a life-saving ability and a gateway to a lifetime of aquatic enjoyment. Our passion is to instill confidence, safety, and love for the water in swimmers of all ages and abilities.
                    </p>
                </section>

                <img
                    src={teach1}
                    alt="Swimming pool with instructors and students"
                    className="ourteam-image"
                />

                <section className="ourteam-section ourteam-two-column">
                    <div className="ourteam-image-container">
                        {/* Optional image or keep empty */}
                    </div>
                    <div>
                        <h2>Our Mission</h2>
                        <div className="ourteam-line"></div>
                        <p>
                            Our mission is to provide high-quality swim instruction in a safe, fun, and encouraging environment.
                            We strive to help each student reach their full potential, whether they're taking their first splash or training for competition.
                            We are a dedicated team of female instructors, committed to imparting swimming skills to individuals of all genders.
                            Our teaching approach typically spans four days, tailored to suit various demographics such as children from the age of 2, young adults, the middle aged, the elderly, and individuals with special needs.
                            Our curriculum covers the fundamentals of four prominent swimming techniques: Breaststroke, Freestyle, Backstroke, and Butterfly.
                        </p>
                    </div>
                </section>

                <section className="ourteam-section ourteam-two-column">
                    <div className="ourteam-content-container">
                        <h2 className="ourteam-wwc">Why Choose Us?</h2>
                        <div className="ourteam-line"></div>
                        <ul className="ourteam-list">
                            <li>Efficient Learning: Our intensive four-day program ensures that every client learns to swim quickly and effectively, all while having a great time and without feeling overwhelmed</li>
                            <li>Personalized Attention: Each client receives individualized instruction with our one-on-one private lessons, tailored to their specific needs and skill level</li>
                            <li>No Extra Charges: We believe in fairness and equality, which is why we do not impose additional fees on slower learners who may require more than four days to master swimming.</li>
                            <li>Ongoing Improvement: Upon completing lessons, clients have the opportunity to join our membership program. This allows them to continue honing their skills under the guidance of our experienced instructors, ensuring long-term progress and confidence in the water.</li>
                            <li>Classes for all ages: infants, children, teens, and adults</li>
                        </ul>
                    </div>
                    <div className="ourteam-image-container">
                        <img src={teach1} alt="Why choose us" className="ourteam-section-image" />
                    </div>
                </section>

                <div className="ourteam-line"></div>

                <section className="ourteam-section ourteam-two-column">
                    <div className="ourteam-image-container">
                        <img src={ceo} alt="Our history" className="ourteam-section-image" />
                    </div>
                    <div className="ourteam-content-container">
                        <h2 className="ourteam-wccc">Our History</h2>
                        <p>
                            Established in 2018 by our founder, Ama Governor, SWA Swim School has quickly become a trusted name in swim education.
                            Ama's passion for swimming began in her teens, and over the years, she developed a deep love for the sport. Inspired by her own experiences in the water, she envisioned a school dedicated to teaching others the skills she had mastered.
                            With a focus on safety, confidence, and enjoyment, SWA Swim School was born. Since opening our doors, we have proudly taught countless students, helping them discover the joys of swimming.
                            Our commitment to excellence has set us apart, creating a welcoming environment for swimmers of all ages. We continue to grow and evolve, ensuring that every student has the opportunity to thrive in the water.
                        </p>
                    </div>
                </section>

                <section className="ourteam-section">
                    <h2>Contact Us</h2>
                    <div className="ourteam-line"></div>
                    <p>Ready to dive in? Contact us to learn more about our programs or to schedule a free assessment.</p>
                    <p>Phone: +233 541 353 040</p>
                    <p>Email: swa@gmail.com</p>
                    <p>Address: AH Hotel and Conference, Boundary Road, Accra, Ghana</p>
                </section>
            </div>

            <Footer />
        </>
    );
};

export default OurTeam;
