'use client'

import { useState } from 'react'

export default function Card({titel, content}){

    const[open, setOpen] = useState(false)

    function handleClick(){
        setOpen(prev => !prev)
    }
    const prices = Object.entries(content)

    return(
        <>
            <div className='flex flex-col items-center font-mono'>
            <div className='w-100'>
                <div className='item-left'>
                    <h1>{titel}</h1>
                    <button onClick={handleClick} className='border-1 rounded text-sm w-5 h-5' >+</button>
                    
                </div>
                <ul className='accordion-content'>
                    {open && prices.map(([key, value])=>{
                        return <li key={key}>{key}: ${value}</li>
                    })}
                </ul>
                
            </div>
            </div>
        </>
    )
}
