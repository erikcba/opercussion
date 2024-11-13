import imgPress1 from '../assets/pressImg1.png'
import imgPress2 from '../assets/pressImg2.png'
import Footer from '../sections/Footer'
import { useTranslation } from 'react-i18next'


const ReadMore = () => {
    const { t } = useTranslation()

    return (
        <>
            <section className='container my-24'>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:gap-10 gap-6 md:pt-20 pt-12 sm:px-24'>
                    <p className='xl:text-4xl text-2xl font-semibold my-auto md:leading-normal leading-snug sm:pr-1 lg:col-span-1 col-span-2'>
                        {t('aboutTitle')}
                    </p>
                    <img className='my-auto mx-auto sm:ml-auto lg:col-span-1 col-span-2' src={imgPress1} alt="" />
                    <p className='col-span-2 xl:text-2xl text-xl font-normal'>
                        {t('readMore1')}
                    </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 xl:pt-20 pt-12 sm:px-24'>
                    <img className='my-auto mx-auto sm:mr-auto lg:col-span-1 col-span-2' src={imgPress2} alt="" />
                    <p className='xl:text-2xl text-xl font-normal xl:leading-10 lg:col-span-1 col-span-2'>
                        {t('readMore2')}
                    </p>
                    <p className='col-span-2 xl:text-2xl text-xl font-normal'>
                        {t('readMore3')}
                    </p>
                </div>
            </section>
            <Footer />
        </>

    )
}

export default ReadMore