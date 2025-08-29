'use client'

import { useRouter } from "next/navigation";
import LoginForm from '@/app/ui/components/molecules/loginForm'


export default function Login(){
    const router = useRouter()

    const handleSuccess = () => {
    router.push('/profile')
}

    return(
        <LoginForm onSuccess={handleSuccess}/>       
    )
}