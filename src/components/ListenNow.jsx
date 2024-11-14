import React from 'react'
import { useTranslation } from 'react-i18next'
import musicIcon from '../assets/musicicon.png'


const ListenNow = () => {
  const { t } = useTranslation()

  return (
    <div className='flex sm:flex-col sm:h-full h-52 bg-gradient-to-b sm:gap-0 gap-3 to-indigo-500 from-indigo-300 p-3 rounded-lg sm:justify-around justify-between'>
      <div className='bg-rose-400 sm:h-1/2 h-full rounded-lg p-3'>
        <p className='text-gray-300 font-semibold xl:text-xl text-sm'>OPERCUSSION ORIGINAL GROOVES</p>
      </div>
      <div className='flex flex-col justify-around sm:gap-3'>
        <p className='text-white 2xl:text-3xl xl:text-xl text-md font-semibold'>{t('listenUs')}</p>
        <a className='w-full ' href="https://tidal.com/browse/album/277194562/u" target="_blank" rel="noopener noreferrer">
          <button className='bg-white w-full flex flex-row items-center justify-center xl:gap-2 text-indigo-400 rounded-full uppercase py-2 font-semibold xl:text-xl text-md'>{t('listenNow')} <img src={musicIcon} alt="" /></button>
        </a>
      </div>
    </div>
  )
}

export default ListenNow
