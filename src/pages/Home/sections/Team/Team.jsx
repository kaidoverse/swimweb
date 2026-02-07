import React, { useEffect, useRef, useState } from 'react';

import ceo from '@assets/ceo.jpeg';
import manager from '@assets/manager.jpeg';
import instructer from '@assets/instructer.jpeg';

const teamMembers = [
    { name: 'Ama Governor', role: 'CEO', image: ceo },
    { name: 'Richard Ababio', role: 'Manager', image: manager },
    { name: 'Firdaus & Zoey', role: 'Instructors', image: instructer },
];

const MeetOurTeam = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-white py-24 px-6 lg:px-12"
        >
            <div className="max-w-[1300px] mx-auto">
                {/* Heading */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ease-out
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-wide">
                        Meet Our Team
                    </h2>
                    <div className="mt-4 h-[2px] w-20 bg-[#c9a24d] mx-auto" />
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            style={{ transitionDelay: `${index * 150}ms` }}
                            className={`
                                group relative h-[460px] overflow-hidden rounded-sm cursor-pointer
                                shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                                transition-all duration-700 ease-out
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                            `}
                        >
                            {/* Image */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                            {/* Content */}
                            <div className="relative z-10 flex h-full flex-col justify-end p-8">
                                <h3 className="text-xl font-semibold text-white mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-sm uppercase tracking-wider text-[#c9a24d]">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MeetOurTeam;
