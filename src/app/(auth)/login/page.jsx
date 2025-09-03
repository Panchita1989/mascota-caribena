'use client'

import { useRouter } from "next/navigation";
import { useAuth } from "@/auth/authContext";
import LoginForm from '@/app/ui/components/molecules/loginForm'


export default function Login(){
    return(
        <LoginForm />       
    )
}