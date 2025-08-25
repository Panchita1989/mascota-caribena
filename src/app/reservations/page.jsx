'use client'

import { useState, useEffect } from "react";
import SearchAndFilterBar from '../ui/components/searchAndFilterBar'

export default function Reservations(){
    const[reservations, setReservations] = useState([])

    useEffect(()=>{
        const fetchAllReservations = async() => {
            try{
            const res = await fetch(`/api/allReservations`)
            const data = await res.json()
            setReservations(data)
            
        }catch(error){
            console.log(error)
        }
    }
    fetchAllReservations()
    console.log('Reservations fetched', reservations)
    },[])

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className=''>Here you will see all the reservations</h1>
            <SearchAndFilterBar />
            <ul>
                {reservations.map((r, i) => (
                    <li key={i}>
                        <p><strong>Name: </strong>{r.name}</p>
                        <p><strong>Pet: </strong>{r.petName}</p>
                        <p><strong>Date: </strong>{r.date}</p>
                        <p><strong>Time: </strong>{r.time}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}