'use client'

import {Calendar} from "react-calendar";
import { useState } from "react";
import 'react-calendar/dist/Calendar.css'
import TimePicker from './timePicker'

export default function ChooseDate({onDateSelected, onTimeSelected, selectedDay, selectedTime}){
    const[value, setValue] = useState(new Date())    

    let minDate = new Date()
    let maxDate = new Date(minDate)
    maxDate.setMonth(maxDate.getMonth()+1)

    function handleClickDay(date){    
        onDateSelected(date);
        onTimeSelected(null)
    }
    
    const disableMondays = ({date}) => date.getDay() === 1
    

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
                onSelectTime={onTimeSelected}
                selectedTime={selectedTime} />
        </div>
        }
        </>
    )
}
