import { React, useRef } from 'react'
import './Instructor.css'
import next_iconn from '../../assets/next-iconn.png'
import back_iconn from '../../assets/back-iconn.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }

    return (
        <div className='instructorr' id='instructorr'>
            <h2 className="instructorr-title">What Our Clients Say</h2>
            <img src={next_iconn} alt="" className='next-btnn' onClick={slideForward} />
            <img src={back_iconn} alt="" className='back-btnn' onClick={slideBackward} />
            <div className="sliderr">
                <ul ref={slider}>
                    <li>
                        <div className="slidee">
                            <div className="user-infoo">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, Usa</span>
                                </div>
                            </div>
                            <p>Omg everyone is so nice and great with kids!! The structure, the reward system, the way they teach them.
                                Sooo glad we didn’t go with another school we tested first and ended up here.
                                My oldest made great progress even in her first visit.
                                10/10!!
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slidee">
                            <div className="user-infoo">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, Usa</span>
                                </div>
                            </div>
                            <p>Omg everyone is so nice and great with kids!! The structure, the reward system, the way they teach them.
                                Sooo glad we didn’t go with another school we tested first and ended up here.
                                My oldest made great progress even in her first visit.
                                10/10!!
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slidee">
                            <div className="user-infoo">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, Usa</span>
                                </div>
                            </div>
                            <p>Omg everyone is so nice and great with kids!! The structure, the reward system, the way they teach them.
                                Sooo glad we didn’t go with another school we tested first and ended up here.
                                My oldest made great progress even in her first visit.
                                10/10!!
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slidee">
                            <div className="user-infoo">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, Usa</span>
                                </div>
                            </div>
                            <p>Omg everyone is so nice and great with kids!! The structure, the reward system, the way they teach them.
                                Sooo glad we didn’t go with another school we tested first and ended up here.
                                My oldest made great progress even in her first visit.
                                10/10!!
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials