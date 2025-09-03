'use client'

import Link from 'next/link'
import { useAuth } from "@/auth/authContext";
import { useRouter } from "next/navigation";

export default function AdminPage() {

    const{ state, logout } = useAuth()
    const router = useRouter()

    const handleLogout = () => {
        logout()
        router.push('/login')
    }

    return(
    <div className='text-center'>
        <h1>This is the Admin Page</h1>
        <Link href='/reservations'>
            <button className='border-1 rounded px-5 cursor-pointer'>Reservations</button>
        </Link>
        <Link href='/clients'>
            <button className='border-1 rounded px-5 cursor-pointer'>Clients</button>
        </Link>        
        
        <div className='text-center'>
            <button onClick={handleLogout} className='border-1 rounded px-4 cursor-pointer m-5' >Logout</button>
        </div>        
    </div>
    )
}