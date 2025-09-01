'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export default function Card({title, children, className}){

    const[open, setOpen] = useState(false)

    function handleClick(){
        setOpen(prev => !prev)
    }
    const prices = Object.entries(children)

    return(
        <>
            <div className='flex flex-col items-center mb-4 font-mono min-w-100'>
                <div className="border rounded p-4 max-w-md w-full shadow-md">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg">{title} <FontAwesomeIcon icon={faTrash} className='text-sm'/> </h2>
                        <button 
                            onClick={handleClick} 
                            className="border rounded text-sm w-6 h-6 flex items-center justify-center md:cursor-pointer" 
                            >
                            {open ? '-' : '+'}
                        </button>                    
                    </div>
                    {open && <div className='flex flex-col '>{children}</div> }
                </div>
            </div>
        </>
    )
}
