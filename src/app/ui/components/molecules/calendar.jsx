'use client'

import {Calendar} from "react-calendar";
import { useState, useEffect } from "react";
import 'react-calendar/dist/Calendar.css'
import TimePicker from './timePicker'

export default function ChooseDate({onDateSelected, onTimeSelected, selectedDay, selectedTime}){
    const[value, setValue] = useState(new Date())
    const[disableDays, setDisableDays] = useState([])    

    let minDate = new Date()
    let maxDate = new Date(minDate)
    maxDate.setMonth(maxDate.getMonth()+1)

    function handleClickDay(date){    
        onDateSelected(date);
        onTimeSelected(null)
    }
    
    //const disableMondays = ({date}) => date.getDay() === 1

    useEffect(()=>{ 
    const fetchDisabled = async() => {
        try{
            const res = await fetch(`/api/fullyBookedDays`)
            const data = await res.json()
            setDisableDays(data.fullyBookedDays)
        }catch(error){
            console.log(error)
        }
    }
    fetchDisabled()
    console.log('Disabled Days are : ', disableDays)
    },[])

    const disableDay = ({date, view}) =>{
        if(view === 'month'){
            if(date.getDay()===1){
            return true
            }
            if(disableDays.includes(date.toISOString().split('T')[0])){
                return true
            }
            return false
        }
    }
    

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
                tileDisabled={disableDay}
                />
        </div>

        {selectedDay &&
        <div className='text-center'>
            <TimePicker 
                selectedDay={selectedDay}
                onSelectTime={onTimeSelected}
                selectedTime={selectedTime} />
        </div>
        }
        </>
    )
}
