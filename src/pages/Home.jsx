import { useEffect } from "react"
import About from "../sections/About"
import Footer from "../sections/Footer"
import Hero from "../sections/Hero"
import Media from "../sections/Media"
import Partners from "../sections/Partners"
import { useLocation } from "react-router-dom"

const Home = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.state?.sectionId) {
            const section = document.getElementById(location.state.sectionId);
            if (section) {
                const offset = 140;
                const sectionPosition = section.offsetTop - offset;
                window.scrollTo({
                    top: sectionPosition,
                    behavior: 'smooth'
                });
            }
        }
    }, [location]);

    return (
        <>
            <Hero />
            <About />
            <Media />
            <Partners />
            <Footer />
        </>
    )
}

export default Home
