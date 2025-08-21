'use client'
import { useState } from "react";
import ChooseDate from '../ui/components/calendar'
import BookingForm from '../ui/components/form'

export default function Location(){

    const[selectedDay,setSelectedDay] = useState(null)
    const[selectedTime, setSelectedTime] =useState(null)

    const handleDateSelected = (date) =>{
        setSelectedDay(date)
    }

    const handleTimeSelected = (time) =>{
        setSelectedTime(time)        
    }


    if(selectedDay && selectedTime){
        return(
            <BookingForm 
                date={selectedDay}
                time={selectedTime}/>
        )
    }
    return(
        <>
        <ChooseDate 
            onDateSelected={handleDateSelected}
            onTimeSelected={handleTimeSelected}
            selectedDay={selectedDay}/>
        <p className='mt-5 text-center'>Por Favor elige una fecha hora</p>
        </>
    )
}