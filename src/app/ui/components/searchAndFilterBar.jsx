import { useState } from "react";

export default function SearchAndFilterBar(){

    return(
    <div
        className='
        flex flex-col sm:flex-row 
        gap-4 
        justify-center 
        items-stretch sm:items-center 
        w-full sm:w-4/5 md:w-2/3 lg:w-1/2 
        mb-8 
        bg-cream 
        px-4 sm:px-6 md:px-10 
        py-4 
        rounded-lg 
        shadow-md'>
        <select 
            name="" 
            id=""
            className=''
            onChange={(e)=>setFilters({...filters})}>
            <option value="">Name</option>
            <option value=""></option>
        </select>
        <select 
            name="" 
            id=""
            className=''
            onChange={(e)=>setFilters({...filters})}>
            <option value="">Pet Name</option>
            <option value=""></option>
        </select>
        <select 
            name="" 
            id=""
            className=''
            onChange={(e)=>setFilters({...filters})}>
            <option value="">Raza</option>
            <option value=""></option>
        </select>
        <select 
            name="" 
            id=""
            className=''
            onChange={(e)=>setFilters({...filters})}>
            <option value="">Date</option>
            <option value=""></option>
        </select>
    </div>
    )
}