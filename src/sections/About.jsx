import esquinaIzq from '../assets/esquinaIzq.png'
import esquinaDer from '../assets/esquinaDer.png'
import ReadMore from '../components/ReadMore'
import Members from './Members'

const About = () => {
  return (
    <section id="about" className='container flex flex-column gap-5 sm:px-32 '>
      <div className='flex flex-row'>
        <img src={esquinaIzq} alt="esquinaIzq" className='h-1/2' />
        <div className='flex flex-col py-10'>
          <div className='text-fuchsia-800 flex flex-row justify-center items-center gap-5 mb-5'>
            <h1 className='text-6xl font-light border-r-4 border-fuchsia-800 text-center pr-5'>Pulse</h1>
            <h1 className='text-6xl font-light border-r-4 border-fuchsia-800 text-center pr-5'>Vibe</h1>
            <h1 className='text-6xl font-light text-center'>Art</h1>
          </div>
          <p className='text-3xl font-normal text-center leading-10'>
            Opercussion is a one-of-a-kind ensemble that extracts the percussion section from the depths of the orchestra pit and thrusts it centre stage, by blending rich music history with daring innovation.
          </p>
        </div>
        <img src={esquinaDer} alt="esquinaDer" className='h-1/2 self-end' />
      </div>
      <div className="self-center">
        <ReadMore />
      </div>
      <Members/>
    </section>
  )
}

export default About
