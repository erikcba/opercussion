import playbtnViolet from '../assets/playbtnViolet.png'
import songFile from '../assets/sounds/OPERcussionOriginalGroovesPatagonia.mp3'
import { useState } from 'react';
import stopBtn from '../assets/stopPlaying.png'
import playingGif from '../assets/playingGif.gif'
import { useTranslation } from 'react-i18next'

const PlayBtn = () => {

  const { t } = useTranslation()
  const [audio] = useState(new Audio(songFile));
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  audio.onended = () => setIsPlaying(false)

  return (
    <>
      <div className='fixed hidden sm:flex lg:bottom-20 bottom-10 lg:right-24 right-10 z-50  flex-col items-center justify-center gap-2 hover:cursor-pointer'>
        {
          isPlaying ? (
            <div className='w-48 h-48'>
              <img className='w-full h-full relative' src={playingGif} alt="" />
              <img className='absolute top-1/2 right-1/2 left-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2'  onClick={togglePlayPause} src={stopBtn} alt="" />
            </div>
          )
            :
            <div className='flex flex-col items-center justify-center gap-2 w-48 h-48'>
              <img onClick={togglePlayPause} className='h-min w-min' src={playbtnViolet} alt="" />
              <p className='uppercase text-white bg-fuchsia-800 rounded-full py-2 px-4 leading-none text-sm font-semibold'>{t('listenToUs')}</p>
            </div>
        }
      </div>
    </>
  )
}

export default PlayBtn
