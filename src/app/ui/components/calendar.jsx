'use client'

import {Calendar} from "react-calendar";
import { useState } from "react";
import Link from 'next/link'

import 'react-calendar/dist/Calendar.css'
import TimePicker from './timePicker'

export default function ChooseDate(){
    const[value, setValue] = useState(new Date())
    const[selectedDay,setSelectedDay] = useState(null)
    const[selectedTime, setSelectedTime] =useState(null)

    let minDate = new Date()
    let maxDate = new Date(minDate)
    maxDate.setMonth(maxDate.getMonth()+1)

    function handleClickDay(date){    
        setSelectedDay(date);
        setSelectedTime(null)
        
    }
    
    const disableMondays = ({date, view}) => date.getDay() === 1
    

    return(
        <>
        <div className='flex justify-center'>
            <Calendar 
                aria-label='Date (Controlled)' 
                value={value} 
                onChange={setValue}
                minDate ={minDate}
                maxDate={maxDate} 
                onClickDay={handleClickDay}
                tileDisabled={disableMondays}/>
        </div>

        {selectedDay &&
        <div className='text-center'>
            <TimePicker 
                onSelectTime={setSelectedTime}
                selectedTime={selectedTime} />
        </div>
        }
        {selectedDay && selectedTime ?(
            <div className='text-center mt-8'>
            <p className=''>Tu Cita es el {selectedDay.toLocaleDateString()} a las {selectedTime}</p>
            <Link href='/bookingForm'>
            <button className='mt-8 lg:hover:cursor-pointer p-2 rounded transform transition-transform duration-300 lg:hover:scale-105 border-1 rounded active:bg-gray-800'>confirmar</button> 
            </Link>
            </div>
            ):(
             <p className='text-center mt-8'>por favor elige una fecha y hora</p>
             )}
        
        </>
    )
}
