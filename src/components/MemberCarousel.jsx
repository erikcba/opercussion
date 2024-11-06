import React, { useState } from 'react'

const MemberCarousel = ({ member, onClose, onNext, onPrev }) => {
    const [prevIconColor, setPrevIconColor] = useState("rgb(134 25 143)");
    const [nextIconColor, setNextIconColor] = useState("rgb(134 25 143)");
    return (
        <div id='memberCarousel' className="bg-gray-100 flex sm:flex-row flex-col relative ">
            <div className='sm:h-auto h-80 overflow-hidden'>
                <img src={member.carouselImg} alt={member.name} className="sm:h-auto sm:w-1/2 w-full sm:mr-auto" />
            </div>
            <div className='flex flex-col items-center justify-start sm:w-1/2 w-full sm:py-8 sm:px-20 px-10 sm:gap-5 gap-4 '>
                <div onClick={onClose} className='sm:p-2 p-1 rounded-full bg-fuchsia-800 leading-none hover:cursor-pointer absolute sm:top-8 sm:right-8 top-5 right-5'>
                    <box-icon color='white' size='lg' name='x'></box-icon>
                </div>
                <div className='flex flex-row gap-2 self-start sm:pt-20 pt-10'>
                    <button onClick={onPrev} onMouseEnter={() => setPrevIconColor("#ffff")} onMouseLeave={() => setPrevIconColor("rgb(134 25 143)")} className='p-2 border-3 hover:cursor-pointer border-fuchsia-800 leading-none align-middle hover:bg-fuchsia-800 transition-all duration-300 ease-in-out '>
                        <box-icon color={prevIconColor} name='left-arrow-alt' size='lg' ></box-icon>
                    </button>
                    <button onClick={onNext} onMouseEnter={() => setNextIconColor("#ffff")} onMouseLeave={() => setNextIconColor("rgb(134 25 143)")} className='p-2 border-3 hover:cursor-pointer border-fuchsia-800 leading-none align-middle hover:bg-fuchsia-800 transition-all duration-300 ease-in-out '>
                        <box-icon color={nextIconColor} name='right-arrow-alt' size='lg'></box-icon>
                    </button>
                </div>
                <h2 className="sm:text-5xl text-3xl uppercase text-fuchsia-800 font-semibold text-left w-full">{member.name}</h2>
                <p className="text-black sm:text-2xl text-lg font-medium text-start sm:leading-9 leading-7 sm:pb-0 pb-4">{member.description}</p>
            </div>
        </div>
    )
}

export default MemberCarousel
