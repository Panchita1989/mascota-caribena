'use client'

import Link from "next/link";


export default function Login(){

    function handleSubmit(e){
        e.preventDefault()
        console.log('form submitted')
        const form = e.target
        form.reset()
    }

    return(
        <>
            <h2 className='text-center'>Login</h2>

            <form onSubmit={handleSubmit} className='flex flex-row gap-5 justify-center items-center mt-5'>
                <input type="text" name='name' placeholder='name' autoComplete='username' className='border-1 rounded' />
                <input type="password" name='password' placeholder='password' autoComplete='curren-password' className='border-1 rounded' />
                <button type='submit' className='border-1 rounded px-5 cursor-pointer'>Login</button>
            </form>
            <div className='flex flex-col items-center mt-8'>
                <h3>Not registred yet?</h3>
                <Link href='/signUp'>
                    <button className='border-1 rounded px-5 cursor-pointer'>Sign Up</button>
                </Link>
            </div>
        </>
    )
}