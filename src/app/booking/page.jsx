'use client'
import { useState } from "react";
import ChooseDate from '@/app/ui/components/molecules/calendar'
import BookingForm from '@/app/ui/components/molecules/form'

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