'use client'

import { useState, useEffect } from "react";

export default function SearchAndFilterBar({onSearch}){


    function handleChange(e){
        const {name, value} = e.target
        onSearch(prev => ({...prev,[name]: value}))
    }

    return(
    <div
        className='
        flex flex-row 
        justify-center 
        rounded-lg 
        shadow-md
        m-8'>
        <input 
            type="text"
            name='name'
            placeholder='Name'
            className='w-25'
            onChange={handleChange}
         />
        <input 
            type="text"
            name='petName'
            placeholder='Pet Name'
            className='w-25'
            onChange={handleChange}
        />
        <input 
            type="text"
            name='raza'
            placeholder='Raza'
            className='w-25'
            onChange={handleChange}
        />
        <input 
            type="text"
            name='service'
            placeholder='Service'
            className='w-25'
            onChange={handleChange} 
        />
        <input 
            type="text"
            name='size'
            placeholder='Size'
            className='w-25'
            onChange={handleChange}
        />
        <input 
            type="text"
            name='date'
            placeholder='Date'
            className='w-25'
            onChange={handleChange}
        />
        
    </div>
    )
}