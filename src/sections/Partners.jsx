import partnersImg from '../assets/partners.png'

const Partners = () => {
    return (
        <section id='partners' className='container'>
            <div className='sm:px-32 sm:py-20 flex flex-col items-center justify-center gap-5'>
                <h2 className='font-semibold text-4xl text-fuchsia-800'>Partners</h2>
                <img src={partnersImg} alt="" />
            </div>
        </section>
    )
}

export default Partners
