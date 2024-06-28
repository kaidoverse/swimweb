import React from 'react'
import './Achievement.css'
// import CountUp from 'react-countup/build/CountUp'

const Achievement = () => {
    return (
        <div className='achieve px-40 py-12'>
            <div className='grid grid-cols-4 text-center' >

                <div>
                    <h2 className='text-6xl font-bold text-[#262626]'>

                    </h2>
                    <p className='py-2 text-[595959] font-medium'>Years of Experience</p>
                </div>

                <div>
                    <h2 className='text-6xl font-bold text-[#262626]'>95%</h2>
                    <p className='py-2 text-[595959] font-medium'>Success Rate</p>
                </div>

                <div>
                    <h2 className='text-6xl font-bold text-[#262626]'>600+</h2>
                    <p className='py-2 text-[595959] font-medium'>Satisfied clients</p>
                </div>

                <div>
                    <h2 className='text-6xl font-bold text-[#262626]'>95%</h2>
                    <p className='py-2 text-[595959] font-medium'>Recommend us</p>
                </div>

            </div>
        </div>
    )
}

export default Achievement