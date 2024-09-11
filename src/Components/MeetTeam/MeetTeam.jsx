import React from 'react';
import './MeetTeam.css';
import ceo from '../../assets/ceo.jpeg';
import manager from '../../assets/manager.jpeg';
import instructer from '../../assets/instructer.jpeg';

const teamMembers = [
    { name: "Ama Governor", role: "CEO", image: ceo },
    { name: "Richard Ababio", role: "Manager", image: manager },
    { name: "Firdaus & Zoey", role: "Instructors", image: instructer }
];

const TeamMember = ({ name, role, image }) => (
    <div className="team-member">
        <img src={image} alt={name} className="member-image" />
        <h3>{name}</h3>
        <p className="member-role">{role}</p>
    </div>
);

const MeetOurTeam = () => {
    return (
        <div className="meet-our-team">
            <h2>Meet Our Team</h2>
            <div className="team-carousel">
                <div className="team-members-container">
                    <ul className="team-members-slider">
                        {teamMembers.map((member, index) => (
                            <li key={index}>
                                <TeamMember {...member} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MeetOurTeam;
