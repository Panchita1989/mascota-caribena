'use client'

import { useRouter } from "next/navigation";
import { useAuth } from "@/auth/authContext";
import LoginForm from '@/app/ui/components/molecules/loginForm'


export default function Login(){
    const router = useRouter()
    const { login } = useAuth()

    const handleSuccess = (userData) => {
        login(userData)    
        router.push('/profile')        
    }

    return(
        <LoginForm onSuccess={handleSuccess}/>       
    )
}