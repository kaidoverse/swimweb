import React, { useState, useEffect } from 'react';
import './Achievement.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Achievement = () => {
    const [counterState, setCounterState] = useState(false);

    // Set counterState to true when the component is scrolled into view
    useEffect(() => {
        const handleScroll = () => {
            const rect = document.querySelector('.achieve').getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setCounterState(true); // Start counting when element is in view
            }
        };

        // Listen for scroll events to trigger count animation
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="achieve">
            <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                <div className="grid">
                    <div className="item">
                        <h2 className="counter-text">
                            {counterState &&
                                <CountUp
                                    start={0}
                                    end={9}
                                    duration={5}
                                    delay={0}
                                />
                            }+
                        </h2>
                        <p className="item-text">Years of Experience</p>
                    </div>

                    <div className="item">
                        <h2 className="counter-text">
                            {counterState &&
                                <CountUp
                                    start={0}
                                    end={95}
                                    duration={5}
                                    delay={0}
                                />
                            }%
                        </h2>
                        <p className="item-text">Success Rate</p>
                    </div>

                    <div className="item">
                        <h2 className="counter-text">
                            {counterState &&
                                <CountUp
                                    start={0}
                                    end={600}
                                    duration={5}
                                    delay={0}
                                />
                            }+
                        </h2>
                        <p className="item-text">Satisfied Clients</p>
                    </div>

                    <div className="item">
                        <h2 className="counter-text">
                            {counterState &&
                                <CountUp
                                    start={0}
                                    end={95}
                                    duration={5}
                                    delay={0}
                                />
                            }%
                        </h2>
                        <p className="item-text">Recommend Us</p>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    );
};

export default Achievement;
