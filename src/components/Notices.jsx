import React from 'react'

const Notices = ({img, title, description, onclick}) => {
  return (
    <div className='flex flex-row items-center justify-start gap-4 rounded-2xl shadow-lg h-full w-full'>
      <div className='w-1/3 h-full'>
        <img className='h-full w-full' src={img} alt="" />
      </div>
      <div className='w-2/3 flex flex-col justify-between items-start h-full py-4'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-fuchsia-800 font-semibold text-2xl'>{title} </h1>
            <p className='text-fuchsia-800 text-base font-light uppercase'>{description} </p>
        </div>
        <button onClick={onclick} className='bg-fuchsia-800 text-white uppercase rounded-full py-2 px-5 font-medium text-lg'>Read More</button>
      </div>
    </div>
  )
}

export default Notices
