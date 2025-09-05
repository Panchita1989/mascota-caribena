'use client'

import Profile from '@/app/ui/components/molecules/profile'
import { useAuth } from "@/auth/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
    const{ state, logout } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if(!state.isAuthenticated) return 
        if(state.user.role === 'admin'){
            router.replace('/admin')
        }
    },[state, router])


    if(!state.isAuthenticated){
        return(
            <div className='flex flex-col items-center'>
                <h1>Por favor Log In para entrar a tu perfil</h1>
                <button onClick={() => router.push('/login')} className='border-1 rounded px-4 cursor-pointer m-5'>
                    Log In
                </button>
            </div>
        )
    }
            return(
                <>           
                    <h1 className='text-center'>Welcome, {state.user.name}</h1>
                    <Profile />
                    <div className='text-center'>
                        <button onClick={() => console.log('added one')} className='active:bg-gray-500 border-1 rounded px-4 cursor-pointer m-5'>Agregar Mascota</button>
                    </div>
                    <div className='text-center'>
                        <button onClick={logout} className='active:bg-gray-500 border-1 rounded px-4 cursor-pointer m-5'>
                            Logout
                        </button>
                    </div>
                </>
            )
        }
    
