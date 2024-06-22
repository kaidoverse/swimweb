import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Our Programs' title='what we offer' />
        <Program />
        <hr />
        <Title subTitle='FIND OUT MORE' />

        <About />
      </div>
    </div>
  )
}

export default App