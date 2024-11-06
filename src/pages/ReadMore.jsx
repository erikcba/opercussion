import imgPress1 from '../assets/pressImg1.png'
import imgPress2 from '../assets/pressImg2.png'

const ReadMore = () => {
    return (
        <section className='container my-24'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 sm:pt-20 pt-4 sm:px-24'>
                <p className='sm:text-4xl text-2xl font-semibold my-auto sm:leading-normal leading-snug sm:pr-1 sm:col-span-1 col-span-2'>
                    Opercussion is a one-of-a-kind ensemble that extracts the percussion section from the depths of the orchestra pit and thrusts it centre stage, by blending rich music history with daring innovation.
                </p>
                <img className='my-auto mx-auto sm:ml-auto sm:col-span-1 col-span-2' src={imgPress1} alt="" />
                <p className='col-span-2 text-2xl font-normal'>
                    In keeping with the Munich State Opera’s long tradition of encouraging its members to explore chamber music, OPERcussion was born in 2008 from the happy association between Pieter Roijen, Maxime Pidoux, Carlos Vera Larrucea, Claudio Estay, and, later, Tomás Toral, who bring their virtuosity, knowledge, diverse cultural traditions, and idiosyncrasies to the ensemble. Two of the members were originally part of percussionist Peter Sadlo’s Latin Jazz Quintet and after his sudden demise chose to honour his legacy by playing his jazz arrangements. OPERcussion rapidly expanded its repertoire and took on a distinctive life of its own, by adapting music not originally written for percussion stemming from the Baroque, Classic, and Impressionistic eras, as well as taking inspiration from Latin America. The ensemble has also collaborated and commissioned works from contemporary composers and often uses improvisational techniques in performance.
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 pt-20 sm:px-24'>
                <img className='my-auto mx-auto sm:mr-auto sm:col-span-1 col-span-2' src={imgPress2} alt="" />
                <p className='text-2xl font-normal leading-10 sm:col-span-1 col-span-2'>
                    Opercussion recently released their first CD, Original Grooves, which features rhythms from Latin America, like Chick Corea and Astor Piazzolla, but also includes a work by Bach. The recording was received warmly by critics: “the prelude from Bach’s ‘Well-Tempered Clavier’ sets in, like a crazy sewing machine that stops again and again, calming down for rhythmic solo escapades … marimba and vibraphone provide melodic flesh, a bass worming around below. Very cool. … They can do anything” (Süddeutsche Zeitung).
                </p>
                <p className='col-span-2 text-2xl font-normal'>
                    Opercussion recently released their first CD, Original Grooves, which features rhythms from Latin America, like Chick Corea and Astor Piazzolla, but also includes a work by Bach. The recording was received warmly by critics: “the prelude from Bach’s ‘Well-Tempered Clavier’ sets in, like a crazy sewing machine that stops again and again, calming down for rhythmic solo escapades … marimba and vibraphone provide melodic flesh, a bass worming around below. Very cool. … They can do anything” (Süddeutsche Zeitung).
                </p>
            </div>
        </section>
    )
}

export default ReadMore