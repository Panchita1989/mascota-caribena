'use client'

import { useState, useEffect } from "react";
import SearchAndFilterBar from '../ui/components/searchAndFilterBar'

export default function Reservations(){
    const[reservations, setReservations] = useState([])
    const[futureReservations, setFutureReservations] = useState([])

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

    useEffect(()=>{
        const fetchFutureReservations = async()=>{
            try {
                const res = await fetch('/api/futureReservations')
                const data = await res.json()
                setFutureReservations(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchFutureReservations()
        console.log(futureReservations)
    },[])

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className=''>Here you will see all the reservations</h1>
            <SearchAndFilterBar />
            <ul>
                {futureReservations.map((r, i) => (
                    <li key={i} className='font-mono'>
                        <p><strong>Name: </strong>{r.name}</p>
                        <p><strong>Pet: </strong>{r.petName}</p>
                        <p><strong>Date: </strong>{new Date(r.date).toDateString()}</p>
                        <p><strong>Time: </strong>{r.time}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}