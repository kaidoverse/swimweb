import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Footer from '../Components/Footer/Footer'
import Program from '../Components/Program/Program'
import './ProgramPage.css'
import ColorChangeCards from '../Components/ChangeCard/ColorChangeCards'

const ProgramPage = () => {
    return (
        < >
            <Navbar />
            {/* <Hero /> */}
            <div className='programpage'>
                <section className="intro">
                    <h2>Welcome to Our Program</h2>
                    <p>Swimwithama presents the ‘S.W.A swim club’.
                        A brand new way for clients to stay active and engaged with their swim journey even after they are done with primary lessons.
                        Membership in this club gives clients the opportunity to continually work on their skills weekly under the supervision of an instructor.
                        These sessions are primarily going to be of an educational and relaxing nature, and are only going to increase in intensity depending on a client’s specific goals.
                        Keep your journey going….</p>
                </section>
                <ColorChangeCards />

            </div>
            {/* <Program /> */}
            <Footer />
        </>

    )
}

export default ProgramPage