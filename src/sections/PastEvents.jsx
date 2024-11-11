import React from 'react'
import PastEventsComp from '../components/PastEventsComp'

const PastEvents = () => {
  return (
    <section className='bg-indigo-100 py-10 sm:py-32  xl:px-60 md:px-20 '>
      <h1 className='text-fuchsia-800 font-semibold text-4xl pb-5 container'>Past appointments</h1>
      <PastEventsComp day={'20'} month={'SEP'} event={'September Festival, Bavarian State Opera'} city={'Brunnehof, Munich Residence'} />
      <PastEventsComp day={'20'} month={'SEP'} event={'September Festival, Bavarian State Opera'} city={'Brunnehof, Munich Residence'} />
      <PastEventsComp day={'20'} month={'SEP'} event={'September Festival, Bavarian State Opera'} city={'Brunnehof, Munich Residence'} />
      <PastEventsComp day={'20'} month={'SEP'} event={'September Festival, Bavarian State Opera'} city={'Brunnehof, Munich Residence'} />
    </section>
  )
}

export default PastEvents
