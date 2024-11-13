import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Instructor from './Components/Instructor/Instructor'
// import Changecard from './Components/Changecard/Changecard'

import Achievement from './Components/Achievements/Achievement'
import Footer from './Components/Footer/Footer'
import './index.css';
import ColorChangeCards from './Components/ChangeCard/ColorChangeCards'
import Gridcard from './Components/gridcard/Gridcard'
import WhyLearn from './Components/WhyLearn/WhyLearn'
import TestimonialCarousel from './Components/TestimonialCarousel/TestimonialCarousel'
import WhyChooseUs from './Components/WhyUs/WhyChooseUs'
import Testimonials from './Components/Instructor/Instructor'
import Takers from './Components/Takers/Takers'
import MeetTeam from './Components/MeetTeam/MeetTeam'
import Vidplayer from './Components/Vidplayer/Vidplayer'

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />

      <div>
        <WhyChooseUs />

        <About setPlayState={setPlayState} />
        <Takers />
        <Achievement />
        <Program />

        {/* <TestimonialCarousel /> */}

        {/* <Gridcard /> */}


        {/* <Title subTitle='Our Programs' title='what we offer' /> */}

        {/* <Title subTitle='FIND OUT MORE' /> */}

        {/* <Title title='why choose us?' /> */}

        {/* <Instructor /> */}
        <Testimonials />
        <MeetTeam />
        <Footer />
      </div>
      <Vidplayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App