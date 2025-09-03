'use client'

import { useState, useEffect } from "react";
import Card from '@/app/ui/components/molecules/cards'
import BackButton from '@/app/ui/components/atoms/backButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import SearchAndFilterBar from '@/app/ui/components/molecules/searchAndFilterBar'


export default function Clients(){
    const[clients, setClients] = useState([])
    const [searchFilters, setSearchFilters] = useState({
    name: "",
    petName: "",
    raza: "",
    service: "",
    size: "",
    date: ""
    })
    
    useEffect(()=>{
        const fetchAllClients = async() =>{
            try {
                const res = await fetch('/api/users/allUsers')
                const data = await res.json()

                const filteredClients = data.filter(user => user.role !== 'admin')
                setClients(filteredClients)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllClients()
       
        console.log('Clients fetched', clients)
    },[])

    async function handleDelete(id) {
        console.log("Deleting user with ID:", id);

        const res = await fetch(`api/users/${id}`,{
            method:'DELETE'
        })
        if(res.ok){
            setClients(prev => prev.filter(c => c._id !== id))
        }else{
            const error = await res.json()
            console.log(error)
        }
    }

    return(
        <>
            <div className="flex justify-center items-center mb-5">
            <BackButton href="/admin" className='mx-5' />
              <h1 className="">This are the Clients</h1>
            </div>
            <div className='flex justify-center '>
                <SearchAndFilterBar onSearch={setSearchFilters} />
            </div>          
            
                {clients.map((c, i) =>{
                    return( 
                        <Card
                            key={c._id} 
                            title={<span className=''>Cliente: {c.name}</span>}
                            subtitle= {<span className='block'>Mascota: {c.petName}</span>}
                            actions={
                                <FontAwesomeIcon 
                                    onClick={()=>handleDelete(c._id)} 
                                    icon={faTrash} 
                                    className='text-sm cursor-pointer pl-10'
                                />
                            } 
                            onDelete={() => handleDelete(c._id)}>
                            <strong>Mascota: </strong>{c.petName} 
                            <strong>Raza: </strong>{c.raza}
                            <strong>Size: </strong>{c.size}
                            <strong>Telefono: </strong>{c.phone}
                            <strong>Email: </strong>{c.email}

                        </Card>)
                })}
        </>
    )
}