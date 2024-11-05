import React from 'react'
import eventImg from '../assets/eventImg.png'
import UpComingEvents from '../components/UpComingEvents'

const UpComing = () => {
    return (
        <section className='mt-24 container sm:mb-20'>
            <div className='sm:px-32'>
                <h1 className='text-fuchsia-800 font-semibold text-4xl py-5'>Upcoming Events</h1>
                <div className='flex flex-col gap-5'>
                    <UpComingEvents img={eventImg} place={'Carnegie hall'} city={'New york, USA'} date={'December 15, 2025'} ticket={''} />
                    <UpComingEvents img={eventImg} place={'Carnegie hall'} city={'New york, USA'} date={'December 16, 2025'} ticket={''} />
                </div>
            </div>
        </section>
    )
}

export default UpComing
