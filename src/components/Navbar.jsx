import logo from '../assets/logo.png'

const Navbar = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const offset = 140;
    const sectionPosition = section.offsetTop - offset;

    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <nav className="h-24 bg-fuchsia-800 flex flex-row justify-around items-center fixed top-0 left-0 right-0 z-50">
      <img onClick={() => scrollToTop() } src={logo} alt="" className='hover:cursor-pointer' />
      <ul className="flex flex-row text-white font-normal text-2xl gap-14 items-center">
        <li onClick={() => scrollToSection('about')} className="hover:cursor-pointer">About us</li>
        <li onClick={() => scrollToSection('media')} className="hover:cursor-pointer">Media</li>
        <li className="hover:cursor-pointer">Events</li>
        <li className="hover:cursor-pointer">Press</li>
        <li className="hover:cursor-pointer">Contact</li>
        <li className="hover:cursor-pointer text-xl font-semibold text-fuchsia-700 bg-white py-2.5 px-2 rounded-full leading-none">DE</li>
      </ul>
    </nav>
  )
}

export default Navbar
