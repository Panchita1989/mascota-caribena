'use client'

import { useState, useEffect } from "react";
import SearchAndFilterBar from '@/app/ui/components/molecules/searchAndFilterBar'
import Card from '@/app/ui/components/molecules/cards'
import BackButton from '@/app/ui/components/atoms/backButton'


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

    function handleClick(){
        setFilterdReservations(reservations)
        setAmount(reservations.length)
    }
    async function handleDelete(id) {
      
         const res = await fetch(`api/reservations/${id}`,{
             method:'DELETE'
         })
        if(res.ok){
            setReservations(prev => prev.filter(r => r._id !== id))
            setFilterdReservations(prev => prev.filter(r => r._id !== id))
        }else{
            const error = await res.json()
            console.log(error)
        }
    }

    return (
        <>
        <div className='flex items-center justify-between px-115 mb-5'>
            <BackButton className="" href="/admin" />
            <h1 className='text-center flex-grow'>Here you will see all the reservations</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-center'>You have {amount} services </p>
            <button 
                onClick={handleClick}
                className='lg:hover:cursor-pointer p-2 rounded transform transition-transform duration-300 lg:hover:scale-105 border-1 rounded active:bg-gray-800'>Show all reservations</button>
            <SearchAndFilterBar onSearch={setSearchFilters}/>     
        </div>
            {filteredReservations.map((r) =>{
                return(
                    <Card 
                        key={r._id}
                        onDelete={() => handleDelete(r._id)} 
                        title={`${r.petName} - ${new Date(r.date).toDateString()}`}
                        >
                        <strong>Name: </strong>{r.name}
                        <strong>Time: </strong>{r.time}
                        <strong>Service: </strong>{r.service}
                        <strong>Size: </strong>{r.size}
                    </Card>
                )
            })}
            {/*
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
            </ul> */}
     
    </>)
}