import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'



const ReadMore = () => {
  const { t } = useTranslation()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <Link to={'/aboutus'} onClick={scrollToTop} className='bg-fuchsia-800 text-white py-2 px-5 uppercase rounded-full hover:cursor-pointer text-xl'>
     {t('readMoreBtn')}
    </Link>
  )
}

export default ReadMore
