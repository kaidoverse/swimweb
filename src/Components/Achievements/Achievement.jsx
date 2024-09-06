import React, { useState } from 'react';
import './Achievement.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
// import CompetitiveSwim from '../../assets/CompetitiveSwim.png';

const Achievement = () => {
    const [counterState, setCounterState] = useState(false);

    return (
        <div className='achieve'>
            {/* <img src={CompetitiveSwim} alt="competetiveswim" /> */}

            <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                <div className='grid'>
                    <div className='item'>
                        <h2 className='counter-text'>
                            {counterState &&
                                <CountUp
                                    start={0}
                                    end={9}
                                    duration={5}
                                />
                            }+
                        </h2>
                        <p className='item-text'>Years of Experience</p>
                    </div>

                    <div className='item'>
                        <h2 className='counter-text'>
                            {counterState &&
                                <CountUp
                                    start={0}
                                    end={95}
                                    duration={5}
                                />
                            }%
                        </h2>
                        <p className='item-text'>Success Rate</p>
                    </div>

                    <div className='item'>
                        <h2 className='counter-text'>
                            {counterState &&
                                <CountUp
                                    start={0}
                                    end={600}
                                    duration={5}
                                />
                            }+
                        </h2>
                        <p className='item-text'>Satisfied clients</p>
                    </div>

                    <div className='item'>
                        <h2 className='counter-text'>
                            {counterState &&
                                <CountUp
                                    start={0}
                                    end={95}
                                    duration={5}
                                />
                            }%
                        </h2>
                        <p className='item-text'>Recommend us</p>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    );
}

export default Achievement;