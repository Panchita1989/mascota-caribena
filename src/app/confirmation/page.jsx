

export default function confimration() {
    return(
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-stone-700'>Último paso ✨</h2>
            <p className='max-w-md text-stone-700'>Solo necesitamos algunos datos más para confirmar tu reservación. Completa el formulario y listo 🚀.</p>
        <form action="post" className='mt-10'>
            <input type="text" placeholder='nombre' className='border-1 border-teal-600 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'/>
            <input type="text" placeholder='apellido' className='border-1 border-teal-600 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'/>
            <input type="text" placeholder='raza' className='border-1 border-teal-600 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'/>
            <input type="text" placeholder='nombre mascota' className='border-1 border-teal-600 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'/>
            <input type="number" placeholder='edad mascota' className='border-1 border-teal-600 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'/>
            <textarea name="" id="" placeholder='informacion adicional' className='border-1 border-teal-600 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'></textarea>
            <button type='submit' className='lg:cursor-pointer border-3 border-teal-500 block min-w-0 mb-5 bg-transparent py-1.5 pr-3 pl-1 text-base text-teal-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6'>reservar</button>
            
        </form>
        </div>
    )    
}