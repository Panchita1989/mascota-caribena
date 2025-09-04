'use client'

import { useState, useEffect } from "react";

export default function SearchAndFilterBar({onSearch, fields}){


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
        {fields.map(field => {
            <input
                key={field.name}
                type='text'
                name={field.name}
                placeholder={field.placeholder}
                className='w-40 p-2 boder rounded'
                onChange={handleChange}
            />
        })}
    </div>
    )
}