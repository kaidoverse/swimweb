import React from 'react';
import instructor_11 from '../../assets/instructor-11.png';
import zoey from '../../assets/zoey.png';

const InstructPage = () => {
    const instructors = [
        {
            name: "Zoey",
            title: "Instructor",
            bio: "Avid swimmer with 3+ years of coaching experience. Specializes in advanced techniques and competition training.",
            image: instructor_11
        },
        {
            name: "Firdaus",
            title: "Instructor",
            bio: "Expert in teaching water safety and beginner swim lessons for all ages.",
            image: zoey
        }
    ];

    return (
        <section className="bg-white text-black py-24 md:py-28 lg:py-32 px-6 md:px-12">
            <div className="max-w-[1400px] mx-auto w-full">
                {/* Heading */}
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
                        Our Instructors
                    </h1>
                    <div className="mt-4 h-[2px] w-20 bg-[#c9a24d] mx-auto" />
                </div>

                {/* Intro Text */}
                <p className="max-w-3xl mx-auto text-black/80 text-center mb-12">
                    Meet our team of experienced and passionate swim instructors. Each instructor is certified and committed to helping you achieve your swimming goals.
                </p>

                {/* Instructor Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
                    {instructors.map((instructor, index) => (
                        <article
                            key={index}
                            className="group relative h-[420px] cursor-pointer overflow-hidden rounded-sm"
                        >
                            <img
                                src={instructor.image}
                                alt={`${instructor.name} - ${instructor.title}`}
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                            <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
                                <p className="text-sm uppercase tracking-wider text-[#c9a24d] mb-2">{instructor.title}</p>
                                <h3 className="text-xl font-semibold text-white">{instructor.name}</h3>
                                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                                    {instructor.bio}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstructPage;
