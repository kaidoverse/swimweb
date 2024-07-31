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

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />


      <div>
        <About />

        <Program />

        {/* <Title subTitle='Our Programs' title='what we offer' /> */}

        <Title subTitle='FIND OUT MORE' />

        <Title subTitle='Why choose us?' title='why choose us?' />
        {/* <ColorChangeCards /> */}
        <Achievement />
        {/* <Instructor /> */}
        <Footer />
      </div>
    </div>
  )
}

export default App