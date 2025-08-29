'use client'

import Profile from '@/app/ui/components/molecules/profile'
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
    const {data: session} = useSession()
    const router = useRouter()

    useEffect(() => {
        if(!session) return
        if(session.user.role === 'admin'){
            router.push('/admin')
        }
    },[session, router])


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

        // logged in User is no Admin
    if(session.user.role === 'user'){
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
}