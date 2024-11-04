import tybLogo from '../assets/tyb_logo.png'
import opercussionLogo from '../assets/opercussion_logo.png'


const Footer = () => {
    return (
        <section id='contact' className='bg-footer h-full'>
            <div className='container sm:px-32 sm:py-20 flex sm:flex-row items-center justify-between h-full'>
                <div className='flex flex-col items-start gap-5 h-full'>
                    <h2 className='font-semibold text-4xl text-white'>Contact</h2>
                    <div className='flex flex-col gap-3'>
                        <img src={tybLogo} className='w-max' alt="" />
                        <div>
                            <p className='text-white text-2xl font-light'>Thomas Yaksic Beckdorf</p>
                            <p className='text-white text-xl font-semibold '>General management</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-white text-xl font-light leading-8'>contact@tybarts.com</p>
                        <p className='text-white text-xl font-light leading-8'>+44 20 3535 5611</p>
                        <p className='text-white text-xl font-light leading-8'>www.tybarts.com</p>
                    </div>
                </div>
                <div>
                    <img src={opercussionLogo} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Footer
