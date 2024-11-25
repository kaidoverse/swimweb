// InstructPage.js
import React from 'react';
import './InstructPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Footer from '../../Components/Footer/Footer';
import instructor_11 from '../../assets/instructor-11.png';
import zoey from '../../assets/zoey.png';

const InstructPage = () => {
    const instructors = [
        {
            name: "Zoey",
            title: "Instructor",
            bio: "Avid swimmer with 15 years of coaching experience. Specializes in advanced techniques and competition training.",
            image: instructor_11
        },
        {
            name: "Firdaus",
            title: "Instructor",
            bio: "Certified lifeguard and swim instructor. Expert in teaching water safety and beginner swim lessons for all ages.",
            image: zoey
        },
        // {
        //     name: "Emma Rodriguez",
        //     title: "Adaptive Swim Specialist",
        //     bio: "Specializes in working with individuals with special needs. Certified in adaptive aquatics and therapeutic swimming.",
        //     image: "/api/placeholder/200/200"
        // },
        // {
        //     name: "Tom Baker",
        //     title: "Fitness Instructor",
        //     bio: "Focuses on aqua fitness and endurance training. Helps adults improve their swimming for exercise and triathlon preparation.",
        //     image: "/api/placeholder/200/200"
        // }
    ];

    return (
        <>
            <Navbar />

            <div className="instructors-container">
                <h1 className="instructors-header">Our Instructors</h1>
                <p className="instructors-intro">
                    Meet our team of experienced and passionate swim instructors. Each instructor is certified and committed to helping you achieve your swimming goals.
                </p>
                <div className="instructors-grid">
                    {instructors.map((instructor, index) => (
                        <div className="instructor-card" key={index}>
                            <img src={instructor.image} alt={instructor.name} className="instructor-image" />
                            <div className="instructor-info">
                                <h2 className="instructor-name">{instructor.name}</h2>
                                <h3 className="instructor-title">{instructor.title}</h3>
                                <p className="instructor-bio">{instructor.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default InstructPage;
