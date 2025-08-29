'use client'
import { useState, useEffect } from 'react'


export default function TimePicker({onSelectTime, selectedTime, selectedDay}){
    const[availableHours, setAvailableHours]=useState([]) 
    const[loading, setLoading] = useState(false)   

   useEffect(()=>{
    
    if (!selectedDay) return;
    
    const fetchHours = async() =>{
        setLoading(true)
        try{
            const res = await fetch(`/api/reservations/available-hours?date=${selectedDay}`)
            const data = await res.json()
            setAvailableHours(data.availableHours || [])
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    fetchHours()
   },[selectedDay])

   if(loading){
    return <p>...</p>
   }

   if(!loading && availableHours.length < 1){
    return(
        <div className='flex flex-col items-center justify-center mt-10 '>
            <p className='max-w-md'>Una disculpa, para este dia no tenemos horas disponibles. Por favor elige otra fecha</p>
        </div>
    )
   }

    return(
        availableHours.map((e, i)=>{
            return <button 
                className='p-2 m-2 lg:hover:bg-gray-300 lg:hover:cursor-pointer border-1 rounded'
                style={{backgroundColor: selectedTime === e && 'gray'}}                
                key={e}
                onClick={() => onSelectTime(e)}
                >
                    {e}
                </button>
        })
    )
}