'use client'

import Profile from '@/app/ui/components/profile'
import { useSession, signIn, signOut } from "next-auth/react";

export default function ProfilePage() {
    const {data: session} = useSession()

    if(!session){
        return(
            <div className='flex flex-col items-center'>
                <h1>Por favor Log In para entrar a tu perfil</h1>
                <button onClick={() => signIn()} className='border-1 rounded px-4 cursor-pointer m-5'>
                    Log In
                </button>
            </div>
        )
    }
    return(
        <>           
                <h1 className='text-center'>Welcom, {session.user.name}</h1>
                <Profile />
                <div className='text-center'>
                    <button onClick={() => signOut()} className='border-1 rounded px-4 cursor-pointer m-5' >Logout</button>
                </div>
        </>
    )
}