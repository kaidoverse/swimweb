import React, { useEffect, useRef, useState } from 'react';

import difference from '@assets/difference.png';
import lap_swimmer from '@assets/lap-swimmer.png';
import watericon from '@assets/watericon.png';

const Takers = () => {
    const takersRef = useRef(null);
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

        if (takersRef.current) observer.observe(takersRef.current);
        return () => observer.disconnect();
    }, []);

    const takersData = [
        {
            img: difference,
            alt: 'Safety Approach',
            title: 'Safety-Centric Approach',
            desc: 'We believe that stronger swimmers are safer swimmers.',
        },
        {
            img: lap_swimmer,
            alt: 'Custom Learning',
            title: 'Custom Learning Experience',
            desc: "Personalized learning plans based on a child's skill level.",
        },
        {
            img: watericon,
            alt: 'Qualified Instructors',
            title: 'Qualified and Caring Instructors',
            desc: "Our instructors are dedicated to supporting students' progress.",
        },
    ];

    return (
        <section
            ref={takersRef}
            className="bg-white py-20 lg:py-24 px-6 lg:px-12"
        >
            {/* Container */}
            <div className="max-w-[1300px] mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
                        Why Choose Us?
                    </h2>
                    <div className="mt-4 h-[2px] w-20 bg-[#c9a24d] mx-auto" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {takersData.map((item, index) => (
                        <div
                            key={index}
                            style={{ transitionDelay: `${index * 150}ms` }}
                            className={`
                                group relative h-[360px] cursor-pointer overflow-hidden rounded-sm
                                shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                                transition-[opacity,transform] duration-700 ease-out
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                            `}
                        >
                            <img
                                src={item.img}
                                alt={item.alt}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                            <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Takers;
