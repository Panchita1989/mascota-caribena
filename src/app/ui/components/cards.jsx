'use client'

import { useState } from 'react'

export default function Card({titel, children, className}){

    const[open, setOpen] = useState(false)

    function handleClick(){
        setOpen(prev => !prev)
    }
    const prices = Object.entries(children)

    return(
        <>
            <div className='flex flex-col items-center mb-4 font-mono'>
                <div className="border rounded p-4 max-w-md w-full shadow-md">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg">{titel}</h2>
                        <button 
                            onClick={handleClick} 
                            className="border rounded text-sm w-6 h-6 flex items-center justify-center" 
                            >
                            {open ? '-' : '+'}
                        </button>                    
                    </div>
                    {open && <div>{children}</div> }
                </div>
            </div>
        </>
    )
}
