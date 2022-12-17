import { useEffect, useState } from 'react';

const Clock = () => {
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    let interval;
     const countDown = () => {
        const destination = new Date("Oct 30, 2023").getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const different =  destination - now;
            const days = Math.floor(different / ( 1000 * 60 * 60 * 24))

            const hours = Math.floor(different % (1000 *60*60*24 ) / (1000*60*60))
            const minutes = Math.floor(different % (1000 *60*60 ) / (1000*60))
            const seconds = Math.floor(different % (1000 *60 ) / 1000)

            if(destination < 0) clearInterval(interval.current)
            else{
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        })
     }

     useEffect(()=>{
        countDown();
     },[])

    return (
        <div className='clock__wrapper d-flex align-items-center gap-4'>
            <div className="clock__data d-flex align-items-center gap-3 mb-2">
                <div className="text-center">
                    <h1 className='text-white fs-3'>{days} </h1>
                    <h5 className='text-white fs-6'>Dias</h5>
                </div>
                <span className="text-white fs-3">:</span>
            </div>

            <div className="clock__data d-flex align-items-center gap-3 mb-2">
                <div className="text-center">
                    <h1 className='text-white fs-3'>{hours}</h1>
                    <h5 className='text-white fs-6'>Horas </h5>
                </div>
                <span className="text-white fs-3">:</span>
            </div>


            <div className="clock__data d-flex align-items-center gap-3 mb-2">
                <div className="text-center">
                    <h1 className='text-white fs-3'>{minutes}</h1>
                    <h5 className='text-white fs-6'>Minutos </h5>
                </div>
                <span className="text-white fs-3">:</span>
            </div>

            <div className="clock__data d-flex align-items-center gap-3 mb-2">
                <div className="text-center">
                    <h1 className='text-white fs-3'>{seconds}</h1>
                    <h5 className='text-white fs-6'>Segundos </h5>
                </div>

            </div>
        </div>
    )
}

export default Clock