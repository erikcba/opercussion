import React from 'react'
import Video from '../components/Video'
import ListenNow from '../components/ListenNow'
import Carrusel from '../components/Carrusel'

import slider1 from '../assets/carousel2Img1.png'
import slider2 from '../assets/carousel2Img2.png'
import slider3 from '../assets/carousel2Img3.png'
import slider4 from '../assets/carousel2Img4.png'
import slider5 from '../assets/carousel2Img5.png'


const Media = () => {

    const imagenes = [slider1, slider2, slider3, slider4, slider5]

    return (
        <section id='media' className='bg-indigo-100 py-10 sm:py-32 h-full'>
            <div className='container sm:px-32 grid grid-cols-5 justify-center gap-4' >
                <div className='col-span-4'>
                    <Video />
                </div>
                <div className='col-span-1 h-full'>
                    <ListenNow />
                </div>
                <div className='col-span-5'>
                    <Carrusel imagenes={imagenes} idCarrusel='carruselMedia'/>
                </div>
            </div>
        </section>
    )
}

export default Media
