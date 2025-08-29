'use client'

import { useState} from 'react'
import Confirmation from './confirmation'

export default function BookingForm({date, time}) {
    
    const[name, setName]=useState('')
    const[petName, setPetName] = useState('')
    const[raza, setRaza] = useState('')
    const[age, setAge] = useState('')
    const[service, setService] = useState('')
    const[size, setSize] = useState('')
    const[email, setEmail] = useState('')
    const[information, setInformation] = useState('')
    const[error, setError] = useState([])
    const[succsess, setSuccsess] = useState(false)
    const[sending, setSending] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()
        setSending(true)
        setError([])
        try {
            const res = await fetch('/api/reservation',{
                method: 'POST',
                headers:{'Content-type':'application/json'},
                body: JSON.stringify({
                    name,
                    petName,
                    raza,
                    age,
                    service,
                    size,
                    email,
                    information,
                    date,
                    time
                })
            })

            const { msg } = await res.json()

            if(res.ok){
                setSuccsess(true)
            }else{
                setError(msg)
            }   
        } catch (error) {
            console.log(error)
            setError(['Something went wrong'])
        } finally {
            setSending(false)
        }
        
    }
    if(succsess){
        return <Confirmation 
                    date={date}
                    time={time}
                    email={email} />
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
                required
                value={name}
                type="text" 
                placeholder='nombre' 
                className='border-1 border-teal-600 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'/>
            <input
                onChange={(e) => setPetName(e.target.value)}
                required
                value={petName}
                type="text" 
                placeholder='nombre Mascota' 
                className='border-1 border-teal-600 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'/>
            <input 
                onChange={(e) => setRaza(e.target.value)}
                required
                value={raza}
                type="text" 
                placeholder='raza' 
                className='border-1 border-teal-600 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'/>
            <input 
                onChange={(e) => setAge(e.target.value)}
                required
                value={age}
                type="number" 
                placeholder='edad Mascota' 
                className='border-1 border-teal-600 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'/>
            <select 
                onChange={(e)=> setService(e.target.value)}
                value={service}
                required
                className='appearance-none w-full border-1 border-teal-600 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'>
                    <option value="" className='text-base text-gray-500'>Choose your Service</option>
                    <option value="Pelo corto" className='text-base text-gray-500'>Pelo Corto</option>
                    <option value="Pelo largo" className='text-base text-gray-500'>Pelo Largo</option>
                    <option value="Corte de Pelo" className='text-base text-gray-500'>Corte de Pelo</option>
            </select>
            <select 
                onChange={(e)=> setSize(e.target.value)}
                value={size}
                required
                className='appearance-none w-full border-1 border-teal-600 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'>
                    <option value="" className='text-base text-gray-500'>Size</option>
                    <option value="Mini (-3kg)" className='text-base text-gray-500'>Mini (-3kg)</option>
                    <option value="Extra CH (3.1 - 6kg)" className='text-base text-gray-500'>Extra CH (3.1 - 6kg)</option>
                    <option value="Mediano (13.1 - 25kg)" className='text-base text-gray-500'>Mediano (13.1 - 25kg)</option>
                    <option value="Grande (25 - 32kg)" className='text-base text-gray-500'>Grande (25 - 32kg)</option>
                    <option value="Extra Grande (32.1 - 60kg)" className='text-base text-gray-500'>Extra Grande (32.1 - 60kg)</option>
                </select>
            <input 
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
                type="email" 
                placeholder='email' 
                className='border-1 border-teal-600 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'/>
            <textarea 
                onChange={(e)=> setInformation(e.target.value)}
                value={information}
                placeholder='informacion Adicional' 
                className='border-1 border-teal-600 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'></textarea>
            <button 
                type='submit' 
                disabled={sending}
                className='lg:cursor-pointer border-3 border-teal-500 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'
                >
                   {sending? '...sending' : 'Reservar'}
            </button>
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
