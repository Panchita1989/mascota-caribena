'use client'

import { useState, useEffect } from "react";
import SearchAndFilterBar from '@/app/ui/components/molecules/searchAndFilterBar'

export default function Reservations(){
    const[reservations, setReservations] = useState([])
    const[futureReservations, setFutureReservations] = useState([])
    const[filteredReservations, setFilterdReservations] = useState([])
    const[amount, setAmount] = useState(0)
    const [searchFilters, setSearchFilters] = useState({
        name: "",
        petName: "",
        raza: "",
        service: "",
        size: "",
        date: ""
        })


    useEffect(()=>{
        const fetchAllReservations = async() => {
            try{
            const res = await fetch(`/api/reservations/allReservations`)
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
                const res = await fetch('/api/reservations/futureReservations')
                const data = await res.json()
                setFutureReservations(data)
                setFilterdReservations(data)
                setAmount(data.length)
            } catch (error) {
                console.log(error)
            }
        }
        fetchFutureReservations()
        console.log(futureReservations)
    },[])

    useEffect(()=>{
        const isEmpty = Object.values(searchFilters).every(v => v === '')

        if(isEmpty){
            setFilterdReservations(futureReservations)
            setAmount(futureReservations.length)
        }else{
            const filtered = reservations.filter(r =>{
                return(
                (searchFilters.name === '' || r.name?.toLowerCase().includes(searchFilters.name.toLowerCase()))&&
                (searchFilters.petName === '' || r.petName?.toLowerCase().includes(searchFilters.petName.toLowerCase()))&&
                (searchFilters.raza === '' || r.raza?.toLowerCase().includes(searchFilters.raza.toLowerCase()))&&
                (searchFilters.service === '' || r.service?.toLowerCase().includes(searchFilters.service.toLowerCase()))&&
                (searchFilters.size === '' || r.size?.toLowerCase().includes(searchFilters.size.toLowerCase()))&&
                (searchFilters.date === '' || new Date(r.date).toDateString().includes(searchFilters.date))
                )
            })
            setFilterdReservations(filtered)
            setAmount(filtered.length)
        }
    }, [searchFilters, reservations, futureReservations])

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className=''>Here you will see all the reservations</h1>
            <p>You have {amount} services </p>

            <SearchAndFilterBar onSearch={setSearchFilters}/>

            <ul>
                {filteredReservations.map((r, i) => (
                    <li key={i} className='font-mono mb-5'>
                        <p><strong>Name: </strong>{r.name}</p>
                        <p><strong>Pet: </strong>{r.petName}</p>
                        <p><strong>Date: </strong>{new Date(r.date).toDateString()}</p>
                        <p><strong>Time: </strong>{r.time}</p>
                        <p><strong>Service: </strong>{r.service}</p>
                        <p><strong>Size: </strong>{r.size}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}