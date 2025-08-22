'use client'

import { useState} from 'react'

export default function BookingForm({date, time}) {
    
    const[name, setName]=useState('')
    const[petName, setPetName] = useState('')
    const[raza, setRaza] = useState('')
    const[age, setAge] = useState('')
    const[information, setInformation] = useState('')
    const[error, setError] = useState([])

    async function handleSubmit(e){
        e.preventDefault()

        const res = await fetch('/api/reservation',{
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                name,
                petName,
                raza,
                age,
                information
            })
        })
        console.log(name, petName, raza, age, information)
        const { msg } = await res.json()
        setError(msg)
        console.log(error)
    }

    return(
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-stone-700'>Último paso ✨</h2>
            <p className='max-w-md text-stone-700'>
                Para finalizar tu reservación, por favor completa el siguiente formulario.
                Has seleccionado la fecha {date.toLocaleDateString()} a las {time}.</p>
        <form 
            onSubmit={handleSubmit}
            className='mt-10'>
            <input
                onChange={(e)=> setName(e.target.value)} 
                value={name}
                type="text" 
                placeholder='nombre' 
                className='border-1 border-teal-600 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'/>
            <input
                onChange={(e) => setPetName(e.target.value)}
                value={petName}
                type="text" 
                placeholder='nombre Mascota' 
                className='border-1 border-teal-600 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'/>
            <input 
                onChange={(e) => setRaza(e.target.value)}
                value={raza}
                type="text" 
                placeholder='raza' 
                className='border-1 border-teal-600 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'/>
            <input 
                onChange={(e) => setAge(e.target.value)}
                value={age}
                type="number" 
                placeholder='edad Mascota' 
                className='border-1 border-teal-600 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'/>
            <textarea 
                onChange={(e)=> setInformation(e.target.value)}
                value={information}
                placeholder='informacionAdicional' 
                className='border-1 border-teal-600 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'></textarea>
            <button type='submit' className='lg:cursor-pointer border-3 border-teal-500 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'>reservar</button>
        </form>
        <div >
            <ul className={error[0] === 'Reservation succsesfull' ? 'text-teal-800' : 'text-red-900'}> {error.map((e)=>{
                return(
                    <li key={e}>{e}</li>
            )
            })} </ul>
           
        </div>
        </div>
    )    
}
