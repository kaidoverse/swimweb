import React from 'react';
import teach1 from '../../assets/teach1.png';
import ceo from '../../assets/ceo.jpeg';

const OurTeam = () => {
    return (
        <section className="bg-white text-black pt-24 pb-10 md:pt-28 md:pb-12 lg:pt-32 lg:pb-16 px-6 md:px-12">
            <div className="max-w-[1400px] mx-auto">
                {/* Centered Heading */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2 scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
                        About Our Team
                    </h2>
                    <div className="mt-4 h-[2px] w-20 bg-[#c9a24d] mx-auto" />
                </div>

                {/* About Us Section */}
                <div className="mb-8 md:mb-12">
                    <p className="text-base md:text-lg text-black/80 leading-relaxed max-w-3xl mx-auto text-center lg:text-left">
                        At SWA, we believe that swimming is not just a skill, it's a life-saving ability and a gateway to a lifetime of aquatic enjoyment. Our passion is to instill confidence, safety, and love for the water in swimmers of all ages and abilities.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-8 md:mb-12">
                    <img
                        src={teach1}
                        alt="Swimming pool with instructors and students"
                        className="rounded-2xl shadow-2xl h-[260px] md:h-[340px] lg:h-[420px] w-full object-cover"
                    />
                    <div className="space-y-3 md:space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-black text-center lg:text-left">Our Mission</h2>
                        <div className="h-[2px] w-12 bg-[#c9a24d] mx-auto lg:mx-0" />
                        <p className="text-base md:text-lg text-black/70 leading-relaxed text-center lg:text-left">
                            Our mission is to provide high-quality swim instruction in a safe, fun, and encouraging environment.
                            We strive to help each student reach their full potential, whether they're taking their first splash or training for competition.
                            We are a dedicated team of female instructors, committed to imparting swimming skills to individuals of all genders.
                            Our teaching approach typically spans four days, tailored to suit various demographics such as children from the age of 2, young adults, the middle aged, the elderly, and individuals with special needs.
                            Our curriculum covers the fundamentals of four prominent swimming techniques: Breaststroke, Freestyle, Backstroke, and Butterfly.
                        </p>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-8 md:mb-12">
                    <div className="space-y-3 md:space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-black text-center lg:text-left">Why Choose Us?</h2>
                        <div className="h-[2px] w-12 bg-[#c9a24d] mx-auto lg:mx-0" />
                        <ul className="space-y-2 text-base md:text-lg text-black/70 leading-relaxed">
                            <li className="flex gap-3">
                                <span className="text-[#c9a24d] font-bold min-w-6">•</span>
                                <span><strong>Efficient Learning:</strong> Our intensive four-day program ensures that every client learns to swim quickly and effectively, all while having a great time and without feeling overwhelmed</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[#c9a24d] font-bold min-w-6">•</span>
                                <span><strong>Personalized Attention:</strong> Each client receives individualized instruction with our one-on-one private lessons, tailored to their specific needs and skill level</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[#c9a24d] font-bold min-w-6">•</span>
                                <span><strong>No Extra Charges:</strong> We do not impose additional fees on slower learners who may require more than four days to master swimming.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[#c9a24d] font-bold min-w-6">•</span>
                                <span><strong>Ongoing Improvement:</strong> Upon completing lessons, clients have the opportunity to join our membership program.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[#c9a24d] font-bold min-w-6">•</span>
                                <span><strong>Classes for all ages:</strong> Infants, children, teens, and adults</span>
                            </li>
                        </ul>
                    </div>
                    <img
                        src={teach1}
                        alt="Why choose us"
                        className="rounded-2xl shadow-2xl h-[260px] md:h-[340px] lg:h-[420px] w-full object-cover"
                    />
                </div>

                {/* History Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                    <img
                        src={ceo}
                        alt="Our founder"
                        className="rounded-2xl shadow-2xl h-[260px] md:h-[340px] lg:h-[420px] w-full object-cover"
                    />
                    <div className="space-y-3 md:space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-black text-center lg:text-left">Our History</h2>
                        <div className="h-[2px] w-12 bg-[#c9a24d] mx-auto lg:mx-0" />
                        <p className="text-base md:text-lg text-black/70 leading-relaxed text-center lg:text-left">
                            Established in 2018 by our founder, Ama Governor, SWA Swim School has quickly become a trusted name in swim education.
                            Ama's passion for swimming began in her teens, and over the years, she developed a deep love for the sport. Inspired by her own experiences in the water, she envisioned a school dedicated to teaching others the skills she had mastered.
                            With a focus on safety, confidence, and enjoyment, SWA Swim School was born. Since opening our doors, we have proudly taught countless students, helping them discover the joys of swimming.
                            Our commitment to excellence has set us apart, creating a welcoming environment for swimmers of all ages. We continue to grow and evolve, ensuring that every student has the opportunity to thrive in the water.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
