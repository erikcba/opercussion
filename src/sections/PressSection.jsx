import React from 'react'
import Notices from '../components/Notices'
import noticeimg1 from '../assets/noticeimg1.png'
import noticeimg2 from '../assets/noticeimg2.png'


const PressSection = () => {
  return (
    <section className='container sm:px-32 my-24 '>
        <h1 className='text-fuchsia-800 font-semibold text-4xl py-5'>Upcoming Events</h1>
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
            <Notices title={'“Let go, revive, shine”'} description={'Süddeutsche zeitung'} img={noticeimg1} />
            <Notices title={'“Opercussion plays Latin jazz in the Munich State Opera”'} description={'musikmachen.de'} img={noticeimg2}/>
        </div>
    </section>
  )
}

export default PressSection
