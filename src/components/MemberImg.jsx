import React from 'react'

const MemberImg = ({ image, name }) => {
    return (
        <>
            <div className='relative flex flex-col items-center justify-center '>
                <div className='relative rounded-full'>
                    <img src={image} alt="" className='hover:cursor-pointer p-2.5 rounded-full' />
                </div>
                <p className='text-lg font-semibold text-fuchsia-800 uppercase '>{name}</p>
            </div>
        </>
    )
}

export default MemberImg
