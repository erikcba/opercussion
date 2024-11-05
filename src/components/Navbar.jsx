import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="h-24 bg-fuchsia-800 flex flex-row justify-around items-center fixed top-0 left-0 right-0 z-50">
      <Link to={'/'}>
        <img onClick={() => scrollToTop()} src={logo} alt="" className='hover:cursor-pointer' />
      </Link>
      <ul className="flex flex-row text-white font-normal text-2xl gap-14 items-center">
        <Link to={'/'} state={{ sectionId: 'about' }}>
          <li className="hover:cursor-pointer">About us</li>
        </Link>
        <Link to={'/'} state={{ sectionId: 'media' }}>
          <li className="hover:cursor-pointer">Media</li>
        </Link>
        <Link to="/events">
          <li onClick={() => scrollToTop()} className="hover:cursor-pointer">Events</li>
        </Link>
        <Link>
          <li className="hover:cursor-pointer">Press</li>
        </Link>
        <Link to={'/'} state={{ sectionId: 'contact' }}>
          <li className="hover:cursor-pointer">Contact</li>
        </Link>
        <li className="hover:cursor-pointer text-xl font-semibold text-fuchsia-700 bg-white py-2.5 px-2 rounded-full leading-none">DE</li>
      </ul>
    </nav>
  )
}

export default Navbar
