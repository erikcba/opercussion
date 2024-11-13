import React from 'react'
import playbtnViolet from '../assets/playbtnViolet.png'

const PlayBtn = () => {
  return (
    <>
      <div className='fixed hidden sm:flex lg:bottom-20 bottom-10 lg:right-24 right-10 z-50  flex-col items-center justify-center gap-2 hover:cursor-pointer'>
        <img className='h-min w-min' src={playbtnViolet} alt="" />
        <p className='uppercase text-white bg-fuchsia-800 rounded-full py-2 px-4 leading-none text-sm font-semibold'>Listen to us!</p>
      </div>
    </>
  )
}

export default PlayBtn
