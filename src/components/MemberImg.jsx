import React from 'react'

const MemberImg = ({ image, name }) => {
    return (
        <>
            <div className='relative flex flex-col items-center justify-center z-10 hover:cursor-pointer memberimg'>
                <div className='relative memberlineas'>
                    <img src={image} alt="" className=' md:p-3 p-6 rounded-full' />

                </div>
                <p className='sm:text-lg text-xs font-semibold text-fuchsia-800 uppercase text-center'>{name}</p>
            </div>
        </>
    )
}

export default MemberImg
