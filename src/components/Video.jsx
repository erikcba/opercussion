import React from 'react'
import video from '../assets/img_video.png'
import playbtn from '../assets/playbtn.png'

const Video = () => {

  const fuchsia = "rgb(134 25 143)"

  return (
    <div className='relative hover:cursor-pointer'>
      <img src={video} alt="" className='rounded-lg w-full h-full' />
      <div className='bg-white-c  rounded-full leading-none w-max h-max p-2 '>
        <img className='w-10 h-10 play' src={playbtn} alt="" />
      </div>
    </div>
  )
}

export default Video
