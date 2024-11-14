import React from 'react'
import bottomTab from '../assets/playContainer.png'
import songFile from '../assets/sounds/OPERcussionOriginalGroovesPatagonia.mp3'
import { useState } from 'react';
import stopBtn from '../assets/stopPlaying.png'
import playbtnViolet from '../assets/playbtnViolet.png'
import { useTranslation } from 'react-i18next'

const PlayBtnMob = () => {

    const { t } = useTranslation()
    const [audio] = useState(new Audio(songFile))
    const [isPlaying, setIsPlaying] = useState(false)

    const togglePlayPause = () => {
        if (isPlaying) {
            audio.pause();
            setIsPlaying(false)
        } else {
            audio.play();
            setIsPlaying(true)
        }
    }

    audio.onended = () => setIsPlaying(false)

    return (
        <div className='fixed sm:hidden bottom-0 w-full z-40'>
            {
                isPlaying ? (
                    <img className='absolute bottom-1/2 left-1/2 -translate-x-1/2 z-50' src={stopBtn} onClick={togglePlayPause} alt="" />
                )
                    :
                    <img className='absolute bottom-1/2 h-8 w-8 left-1/2 -translate-x-1/2 z-50' src={playbtnViolet} onClick={togglePlayPause} alt="" />
            }
            <img className='w-full relative' src={bottomTab} alt="" />
            <div className='absolute bottom-1/4 w-full flex flex-row justify-between items-center px-3'>
                <p className='text-white text-md font-medium uppercase'>{t('listenToUs')}</p>
                <p className='text-white text-md font-medium uppercase'>{t('listenToUs')}</p>
            </div>
        </div>
    )
}

export default PlayBtnMob