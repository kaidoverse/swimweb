import React from 'react';
import { useNavigate } from 'react-router-dom';

import breaststroke from '@assets/breaststroke.png';
import freestyle from '@assets/freestyle.png';
import backstroke from '@assets/backstroke.png';

const Program = () => {
    const navigate = useNavigate();

    const programs = [
        {
            name: 'Recommended',
            image: breaststroke,
            description: 'Top pick for beginners',
            path: '/breaststroke',
        },
        {
            name: 'Packages',
            image: freestyle,
            description: 'Build your own package',
            path: '/Packages',
        },
        {
            name: 'Membership',
            image: backstroke,
            description: 'Long-term commitment',
            path: '/membership',
        },
    ];

    return (
        <section className="bg-black py-20 px-6 lg:px-12">
            {/* Container */}
            <div className="max-w-[1300px] mx-auto">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-wide">
                        Our Swimming Programs
                    </h2>
                    <div className="mt-4 h-[2px] w-20 bg-[#c9a24d] mx-auto" />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(program.path)}
                            className="group relative h-[460px] cursor-pointer overflow-hidden rounded-sm"
                        >
                            {/* Image */}
                            <img
                                src={program.image}
                                alt={`${program.name} swimming technique`}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                            {/* Content */}
                            <div className="relative z-10 flex h-full flex-col justify-end p-8">
                                <h3 className="text-xl font-semibold text-white mb-1">
                                    {program.name}
                                </h3>

                                <p className="text-sm text-white/70 mb-6">
                                    {program.description}
                                </p>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(program.path);
                                    }}
                                    className="flex items-center gap-2 text-sm font-medium text-[#c9a24d] uppercase tracking-wider hover:gap-3 transition-all"
                                >
                                    Enroll Now
                                    <span className="text-lg">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Program;
