import tybLogo from '../assets/tyb_logo.png'
import opercussionLogo from '../assets/opercussion_logo.png'
import youtubeicon from '../assets/youtubeicon.png'
import instagramicon from '../assets/instagramicon.png'
import facebookicon from '../assets/facebookicon.png'



const Footer = () => {
    return (
        <section id='contact' className='bg-footer h-full'>
            <div className='container sm:px-32 px-10 sm:py-20 py-10 flex sm:flex-row flex-col items-center justify-between h-full gap-5'>
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
                <div className='flex flex-col gap-4'>
                    <img src={opercussionLogo} alt="" />
                    <div className='flex flex-row items-center justify-around'>
                        <img src={youtubeicon} alt="" />
                        <img src={instagramicon} alt="" />
                        <img src={facebookicon} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
