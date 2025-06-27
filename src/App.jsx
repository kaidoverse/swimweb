import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Program from './Components/Program/Program';
import About from './Components/About/About';
import Takers from './Components/Takers/Takers';
import Achievement from './Components/Achievements/Achievement';
import Footer from './Components/Footer/Footer';
import './index.css';
import WhyLearn from './Components/WhyLearn/WhyLearn';
import Instructor from './Components/Instructor/Instructor';
import MeetOurTeam from './Components/MeetTeam/MeetTeam';
import Vidplayer from './Components/Vidplayer/Vidplayer';

const App = () => {
  const programRef = useRef(null);
  const location = useLocation();
  const [playState, setPlayState] = useState(false);

  useEffect(() => {
    setPlayState(false);
    if (location.hash === '#program-section' && programRef.current) {

      programRef.current.scrollIntoView();

    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <WhyLearn />
        <About setPlayState={setPlayState} />
        <Takers />

        <div ref={programRef}>
          <Program />
        </div>
        <Instructor />
        <MeetOurTeam />
        <Footer />
      </div>
      <Vidplayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
