import partner1 from '../assets/partner1.png'
import partner2 from '../assets/partner2.png'
import partner3 from '../assets/partner3.png'

const Partners = () => {
    return (
        <section id='partners' className='container sm:py-0 py-20'>
            <div className='xl:px-32 sm:py-20 flex flex-col items-center justify-center gap-5'>
                <h2 className='font-semibold text-4xl text-fuchsia-800'>Partners</h2>
                <div className='flex sm:flex-row flex-col gap-2'>
                    <img src={partner1} alt="" />
                    <img src={partner2} alt="" />
                    <img src={partner3} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Partners
