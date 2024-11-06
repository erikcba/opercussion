import React from 'react'
import { Link } from 'react-router-dom'

const ReadMore = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <Link to={'/readmore'} onClick={scrollToTop} className='bg-fuchsia-800 text-white py-2 px-5 rounded-full hover:cursor-pointer text-xl'>
      READ MORE
    </Link>
  )
}

export default ReadMore
