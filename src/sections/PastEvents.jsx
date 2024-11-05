import React from 'react'
import PastEventsComp from '../components/PastEventsComp'

const PastEvents = () => {
  return (
    <section className='bg-indigo-100 py-10 sm:py-32 sm:px-60 '>
      <PastEventsComp day={'20'} month={'SEP'} event={'September Festival, Bavarian State Opera'} city={'Brunnehof, Munich Residence'} />
      <PastEventsComp day={'20'} month={'SEP'} event={'September Festival, Bavarian State Opera'} city={'Brunnehof, Munich Residence'} />
      <PastEventsComp day={'20'} month={'SEP'} event={'September Festival, Bavarian State Opera'} city={'Brunnehof, Munich Residence'} />
      <PastEventsComp day={'20'} month={'SEP'} event={'September Festival, Bavarian State Opera'} city={'Brunnehof, Munich Residence'} />
    </section>
  )
}

export default PastEvents
