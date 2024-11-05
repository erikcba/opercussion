import React from 'react'

const UpComingEvents = ({place, city, date, img, ticket}) => {
    return (
        <>
            <div className='grid grid-cols-6'>
                <div className='col-span-2 flex flex-col gap-3 justify-center'>
                    <p className='font-semibold uppercase text-fuchsia-800 text-sm border-1 border-fuchsia-800 rounded-2xl w-fit px-3'>{date}</p>
                    <div>
                        <p className='text-fuchsia-800 font-semibold text-4xl'>{place}</p>
                        <p className='text-fuchsia-800 uppercase font-light text-xl'>{city}</p>
                    </div>
                    <button className='bg-fuchsia-800 uppercase text-white rounded-full py-2 px-5 w-fit font-medium text-xl'>Get ticket here</button>
                </div>
                <div className='col-span-4'>
                    <img src={img} alt="" />
                </div>
            </div>
        </>
    )
}

export default UpComingEvents
