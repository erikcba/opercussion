
const PastEventsComp = ({ day, month, event, city }) => {
    return (
        <div className='border-b-2 border-fuchsia-800 flex sm:flex-row flex-col container py-5 items-center justify-between'>
            <div className="flex flex-row items-start gap-4 w-full">
                <div className="border-1 border-fuchsia-800 uppercase flex flex-col rounded-md py-2 px-3 items-center justify-center">
                    <p className="text-fuchsia-800 font-semibold text-sm leading-none ">
                        {month}
                    </p>
                    <p className="text-fuchsia-800 font-semibold text-3xl leading-none">
                        {day}
                    </p>

                </div>
                <div className="flex flex-col sm:flex-row md:justify-between w-full">
                    <div className="text-fuchsia-800 font-semibold sm:text-4xl text-2xl">
                        {event}
                    </div>
                    <div className="text-fuchsia-800 font-semibold text-xl sm:self-start">
                        {city}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PastEventsComp
