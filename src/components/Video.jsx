import React from 'react'
import video from '../assets/img_video.png'

const Video = () => {

  const fuchsia = "rgb(134 25 143)"

  return (
    <div className='relative hover:cursor-pointer'>
      <img src={video} alt="" className='rounded-lg w-full h-full' />
      <div className='bg-white rounded-full leading-none w-min absolute sm:top-1/2 top-20 left-48 sm:left-1/2 flex items-center justify-center p-2 '>
        <box-icon type='solid' color={fuchsia}  name='right-arrow'></box-icon>
      </div>
    </div>
  )
}

export default Video
