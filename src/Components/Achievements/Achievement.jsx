
import React, { useState } from 'react'
import './Achievement.css'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Achievement = () => {

    const [counterState, setCounterState] = useState(false)

    return (
        <div className='achieve '>
            <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState
                (false)}>
                <div className='grid ' >

                    <div>
                        <h2 className='text'>
                            {counterState &&
                                <CountUp
                                    start={0}
                                    end={9}
                                    duration={5}
                                >
                                </CountUp>
                            }+
                        </h2>
                        <p className='py '>Years of Experience</p>
                    </div>

                    <div>
                        <h2 className='text'>
                            {counterState &&
                                <CountUp
                                    start={0}
                                    end={95}
                                    duration={5}
                                >
                                </CountUp>
                            }%
                        </h2>
                        <p className='py '>Success Rate</p>
                    </div>

                    <div>
                        <h2 className='text'>
                            {counterState &&
                                <CountUp
                                    start={0}
                                    end={600}
                                    duration={5}
                                >
                                </CountUp>
                            }+
                        </h2>
                        <p className='py '>Satisfied clients</p>
                    </div>

                    <div>
                        <h2 className='text'>
                            {counterState &&
                                <CountUp
                                    start={0}
                                    end={95}
                                    duration={5}
                                >
                                </CountUp>
                            }%
                        </h2>
                        <p className='py '>Recommend us</p>
                    </div>

                </div>
            </ScrollTrigger>

        </div>
    )
}

export default Achievement