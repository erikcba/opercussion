import React from 'react'

const ListenNow = () => {



  return (
    <div className='flex sm:flex-col sm:h-full h-52 bg-gradient-to-b sm:gap-0 gap-3 to-indigo-500 from-indigo-300 p-3 rounded-lg sm:justify-around justify-between'>
      <div className='bg-rose-400 sm:h-1/2 h-full rounded-lg p-3'>
        <p className='text-gray-300 font-semibold xl:text-xl text-sm'>OPERCUSSION ORIGINAL GROOVES</p>
      </div>
      <div className='flex flex-col justify-around sm:gap-3'>
        <p className='text-white 2xl:text-3xl text-xl font-semibold'>Listen to us on your favourite platform</p>
        <button className='bg-white text-indigo-400 rounded-full uppercase py-2 font-semibold xl:text-xl text-md'>Listen now</button>
      </div>
    </div>
  )
}

export default ListenNow
