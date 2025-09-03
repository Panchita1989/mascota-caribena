'use client'

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/auth/authContext";
import { getSession } from "next-auth/react";


export default function LoginForm(){
    const { login } = useAuth()
    const router = useRouter()
    const[formData, setFormData] = useState({ email: '',password: '' })
    const[errorList, setErrorList] = useState([])


    const handleSubmit = async(e) =>{
        e.preventDefault()

        const result = await signIn('credentials',{
            redirect : false,
            email: formData.email,
            password: formData.password,
        })
        console.log('signIn result', result)

        if(result?.error){
            setErrorList([result.error])
            return
        }
        setErrorList([])

        const session = await getSession()
        if(!session?.user) return

        const userData = {
            name: session.user?.name,
            email: session.user?.email,
            role: session.user?.role
            
        }
        login(userData)

        if(userData.role === 'admin'){
            router.push('/admin')
        }else{
            router.push('/profile')
        }      
    }

    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev,
            [name]:value
        }))
    }

    return(
        <>
            <h2 className='text-center'>Login</h2>

            <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-5 justify-center items-center mt-5'>
                <input 
                    type="email" 
                    name='email' 
                    placeholder='E Mail'
                    value={formData.email}
                    onChange={handleChange}
                    className='border-1 rounded' 
                />
                <input 
                    type="password" 
                    name='password' 
                    placeholder='password' 
                    autoComplete='curren-password' 
                    value={formData.password}
                    onChange={handleChange} 
                    className='border-1 rounded' 
                />
                <button type='submit' className='border-1 rounded px-5 cursor-pointer'>Login</button>
            </form>

            {errorList.length > 0 &&(
                <ul className='text-red-300 mt-2'>
                    {errorList.map((err, i) => <li key={i}>{err}</li> )}
                </ul>
            )}
            <div className='flex flex-col items-center mt-8'>
                <h3>Not registred yet?</h3>
                <Link href='/signUp'>
                    <button className='border-1 rounded px-5 cursor-pointer'>Sign Up</button>
                </Link>
            </div>
        </>
    )
}