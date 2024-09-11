import React from 'react'
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
import MeetOurTeam from './Components/MeetTeam/MeetTeam'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />


      <div>
        <WhyLearn />
        <About />

        <Program />
        {/* <TestimonialCarousel /> */}

        {/* <Gridcard /> */}


        {/* <Title subTitle='Our Programs' title='what we offer' /> */}

        {/* <Title subTitle='FIND OUT MORE' /> */}

        {/* <Title title='why choose us?' /> */}
        <WhyChooseUs />
        <Achievement />
        {/* <Instructor /> */}
        <Testimonials />
        <MeetOurTeam />
        <Footer />
      </div>
    </div>
  )
}

export default App