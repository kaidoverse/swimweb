import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Program from './Components/Program/Program';
import About from './Components/About/About';
import Takers from './Components/Takers/Takers';
import Achievement from './Components/Achievements/Achievement';
import Footer from './Components/Footer/Footer';
import './index.css';
import { useLocation } from 'react-router-dom';
import TestimonialCarousel from './Components/TestimonialCarousel/TestimonialCarousel';
import WhyLearn from './Components/WhyLearn/WhyLearn';
import Instructor from './Components/Instructor/Instructor';
import MeetOurTeam from './Components/MeetTeam/MeetTeam';
import Vidplayer from './Components/Vidplayer/Vidplayer';


const App = () => {
  const programRef = useRef(null);
  const location = useLocation();
  const [playState, setPlayState] = useState(false);


  useEffect(() => {
    // Check if the URL has a hash (e.g. '#program-section')
    if (window.location.hash === '#program-section' && programRef.current) {
      programRef.current.scrollIntoView();  // Scroll directly to the Program section
    }
  }, [location]); // Ensure it checks whenever the location changes

  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <WhyLearn />
        <About setPlayState={setPlayState} />
        <Takers />
        {/* <Achievement /> */}
        {/* Ref added here for Program section */}
        <div id="program-section" ref={programRef}>
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
