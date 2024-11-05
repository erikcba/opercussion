
const PastEventsComp = ({ day, month, event, city }) => {
    return (
        <div className='border-b-2 border-fuchsia-800 flex flex-row container py-5 items-center justify-between'>
            <div className="flex flex-row items-center gap-4">
                <div className="border-1 border-fuchsia-800 uppercase flex flex-col rounded-md py-2 px-3 items-center justify-center">
                    <p className="text-fuchsia-800 font-semibold text-sm leading-none ">
                        {month}
                    </p>
                    <p className="text-fuchsia-800 font-semibold text-3xl leading-none">
                        {day}
                    </p>

                </div>
                <div className="text-fuchsia-800 font-semibold text-4xl">
                    {event}
                </div>
            </div>
            <div className="text-fuchsia-800 font-semibold text-xl">
                {city}
            </div>
        </div>
    )
}

export default PastEventsComp