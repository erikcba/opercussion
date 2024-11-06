import React from 'react'
import Video from '../components/Video'
import ListenNow from '../components/ListenNow'
import Carrusel from '../components/Carrusel'

import slider1 from '../assets/sliderImg1.png'
import slider2 from '../assets/sliderImg2.png'
import slider3 from '../assets/sliderImg3.png'
import slider4 from '../assets/sliderImg4.png'
import slider5 from '../assets/sliderImg5.png'


const Media = () => {

    const imagenes = [slider1, slider2, slider3, slider4, slider5]

    return (
        <section id='media' className='bg-indigo-100 py-10 sm:py-32 h-full'>
            <div className='container sm:px-32 grid sm:grid-cols-5 grid-cols-1 justify-center gap-4' >
                <div className='sm:col-span-4 col-span-1'>
                    <Video />
                </div>
                <div className='col-span-1 h-full'>
                    <ListenNow />
                </div>
                <div className='sm:col-span-5 col-span-1'>
                    <Carrusel imagenes={imagenes} idCarrusel='carruselMedia' indicadores={'true'}/>
                </div>
            </div>
        </section>
    )
}

export default Media
