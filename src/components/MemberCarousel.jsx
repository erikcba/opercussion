import React, { useState } from 'react'

const MemberCarousel = ({ member, onClose, onNext, onPrev }) => {
    const [prevIconColor, setPrevIconColor] = useState("rgb(134 25 143)");
    const [nextIconColor, setNextIconColor] = useState("rgb(134 25 143)");
    return (
        <div className="bg-gray-100 flex flex-row relative ">
            <img src={member.carouselImg} alt={member.name} className=" h-auto w-1/2 mr-auto" />
            <div className='flex flex-col items-center justify-start w-1/2 py-8 px-20 gap-5 '>
                <div onClick={onClose} className='p-2 rounded-full bg-fuchsia-800 leading-none hover:cursor-pointer absolute top-8 right-8'>
                    <box-icon color='white' size='lg' name='x'></box-icon>
                </div>
                <div className='flex flex-row gap-2 self-start pt-20'>
                    <button onClick={onPrev} onMouseEnter={() => setPrevIconColor("#ffff")} onMouseLeave={() => setPrevIconColor("rgb(134 25 143)")} className='p-2 border-3 hover:cursor-pointer border-fuchsia-800 leading-none align-middle hover:bg-fuchsia-800 transition-all duration-300 ease-in-out '>
                        <box-icon color={prevIconColor}  name='left-arrow-alt' size='lg' ></box-icon>
                    </button>
                    <button onClick={onNext} onMouseEnter={() => setNextIconColor("#ffff")} onMouseLeave={() => setNextIconColor("rgb(134 25 143)")} className='p-2 border-3 hover:cursor-pointer border-fuchsia-800 leading-none align-middle hover:bg-fuchsia-800 transition-all duration-300 ease-in-out '>
                        <box-icon color={nextIconColor}   name='right-arrow-alt' size='lg'></box-icon>
                    </button>
                </div>
                <h2 className="text-5xl uppercase text-fuchsia-800 font-semibold text-left w-full">{member.name}</h2>
                <p className="text-black text-2xl font-medium text-start leading-9">{member.description}</p>
            </div>
        </div>
    )
}

export default MemberCarousel
