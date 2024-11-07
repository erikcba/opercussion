import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import menuImg from '../assets/menu.png'
import { useState } from 'react'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setMenuOpen(false)
  }

  return (
    <nav className="h-24 bg-fuchsia-800 flex flex-row sm:justify-around justify-between sm:px-0 px-4 w-full items-center fixed top-0 left-0 right-0 z-50">
      <Link to={'/'}>
        <img onClick={() => scrollToTop()} src={logo} alt="" className='hover:cursor-pointer sm:w-full w-40 self-baseline' />
      </Link>
      <img onClick={toggleMenu} className='lg:hidden block' src={menuImg} alt="" />
      <ul className="hidden lg:flex flex-row text-white font-normal text-2xl xl:gap-14 gap-8 items-center">
        <Link to={'/'} state={{ sectionId: 'about' }}>
          <li className="hover:cursor-pointer">About us</li>
        </Link>
        <Link to={'/'} state={{ sectionId: 'media' }}>
          <li className="hover:cursor-pointer">Media</li>
        </Link>
        <Link to="/events">
          <li onClick={() => scrollToTop()} className="hover:cursor-pointer">Events</li>
        </Link>
        <Link to={'/press'} state={{ sectionId: 'press' }}>
          <li onClick={() => scrollToTop()} className="hover:cursor-pointer">Press</li>
        </Link>
        <Link to={'/'} state={{ sectionId: 'contact' }}>
          <li className="hover:cursor-pointer">Contact</li>
        </Link>
        <li className="hover:cursor-pointer text-xl font-semibold text-fuchsia-700 bg-white py-2.5 px-2 rounded-full leading-none">DE</li>
      </ul>
      {menuOpen && (
        <div className="fixed top-24 left-0 right-0 bg-fuchsia-800 text-white text-2xl p-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            <Link to={'/'} state={{ sectionId: 'about' }} onClick={toggleMenu}>
              <li className="hover:cursor-pointer">About us</li>
            </Link>
            <Link to={'/'} state={{ sectionId: 'media' }} onClick={toggleMenu}>
              <li className="hover:cursor-pointer">Media</li>
            </Link>
            <Link to="/events" onClick={toggleMenu}>
              <li onClick={scrollToTop} className="hover:cursor-pointer">Events</li>
            </Link>
            <Link to={'/press'} state={{ sectionId: 'press' }} onClick={toggleMenu}>
              <li onClick={scrollToTop} className="hover:cursor-pointer">Press</li>
            </Link>
            <Link to={'/'} state={{ sectionId: 'contact' }} onClick={toggleMenu}>
              <li className="hover:cursor-pointer">Contact</li>
            </Link>
            <li className="hover:cursor-pointer text-xl font-semibold text-fuchsia-700 bg-white py-2.5 px-2 rounded-full leading-none w-fit">DE</li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
