'use client'
import { useRouter } from "next/navigation";
import SignUpForm from '../ui/components/signUpForm'

export default function SigneUp(){
    const router = useRouter()

    const handleSuccess = () => {
        router.push('/profile')
    }
    return(
        <SignUpForm onSuccess={handleSuccess}/>
    )
}