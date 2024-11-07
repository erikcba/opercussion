import esquinaIzq from '../assets/esquinaIzq.png'
import esquinaDer from '../assets/esquinaDer.png'
import ReadMore from '../components/ReadMore'
import Members from './Members'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <section id="about" className='sm:container container flex flex-column sm:gap-5 gap-2 xl:px-32 '>
      <div className='flex flex-row'>
        <img src={esquinaIzq} alt="esquinaIzq" className=' sm:block hidden h-1/2' />
        <div className='flex flex-col py-10'>
          <div className='text-fuchsia-800 flex flex-row justify-center items-center sm:gap-5 gap-3 mb-5'>
            <h1 className='sm:text-6xl text-4xl font-light border-r-4 border-fuchsia-800 text-center sm:pr-5 pr-2'>Pulse</h1>
            <h1 className='sm:text-6xl text-4xl font-light border-r-4 border-fuchsia-800 text-center sm:pr-5 pr-2'>Vibe</h1>
            <h1 className='sm:text-6xl text-4xl font-light text-center'>Art</h1>
          </div>
          <p className='sm:text-3xl text-xl font-normal text-center sm:leading-10 leading-8'>
            {t('aboutTitle')}
          </p>
        </div>
        <img src={esquinaDer} alt="esquinaDer" className='h-1/2 self-end sm:block hidden' />
      </div>
      <div className="self-center">
        <ReadMore />
      </div>
      <Members/>
    </section>
  )
}

export default About
