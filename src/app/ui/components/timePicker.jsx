'use client'
import { useState, useEffect } from 'react'


export default function TimePicker({onSelectTime, selectedTime, selectedDay, onDateSelected}){
    const[availableHours, setAvailableHours]=useState([])    

   useEffect(()=>{
    
    if (!selectedDay) return;
    
    const fetchHours = async() =>{
        try{
            const res = await fetch(`/api/available-hours?date=${selectedDay}`)
            const data = await res.json()
            setAvailableHours(data.availableHours || [])
        }catch(error){
            console.log(error)
        }
    }
    fetchHours()
   },[selectedDay])

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