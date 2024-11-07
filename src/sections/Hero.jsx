import Carrusel from '../components/Carrusel'
import slider1 from '../assets/slider1-hero.png'
import slider2 from '../assets/slider2-hero.png'
import slider3 from '../assets/slider3-hero.png'


const Hero = () => {
    let imagenes = [slider1, slider2, slider3]
    return (
        <div className="xl:h-screen xl:mb-0 mb-10 mt-24">
            <Carrusel imagenes={imagenes} idCarrusel='carruselHero' />
        </div>
    )
}

export default Hero
