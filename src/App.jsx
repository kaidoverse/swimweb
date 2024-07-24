import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Instructor from './Components/Instructor/Instructor'

import Achievement from './Components/Achievements/Achievement'
import Footer from './Components/Footer/Footer'
import './index.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />


      <div className='container'>
        {/* <Title subTitle='Our Programs' title='what we offer' /> */}
        <Program />
        <hr />
        <Title subTitle='FIND OUT MORE' />
        <About />
        <Title subTitle='Why choose us?' title='why choose us?' />

        <Achievement />
        {/* <Instructor /> */}
        <Footer />
      </div>
    </div>
  )
}

export default App