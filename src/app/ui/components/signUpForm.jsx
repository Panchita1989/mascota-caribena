import { signup } from "@/app/actions/auth";

export default function SignUpForm(){

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const res = await fetch('/api/signup',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({name, petName, raza, size, phone, email, password})
        })
        console.log('You have signed in')
    }

    return(
        <>
        <h2 className='text-center mt-8'>Sign Up</h2>
        <form action={signup} onSubmit={handleSubmit} className='flex flex-col gap-5 justify-center items-center mt-5'>
            <input type="text" name='name' placeholder='name' className='border-1 rounded' />
            <input type="text" name='petName' placeholder='Pet Name' className='border-1 rounded' />
            <input type="text" name='raza' placeholder='Raza' className='border-1 rounded' />
            <select className='appearance-none border-1 rounded'>
                <option value="" className='text-base text-gray-500'>Size</option>
                <option value="Mini (-3kg" className='text-base text-gray-500'>Mini (-3kg)</option>
                <option value="Extra CH (3.1 - 6kg)" className='text-base text-gray-500'>Extra CH (3.1 - 6kg)</option>
                <option value="Mediano (13.1 - 25kg)" className='text-base text-gray-500'>Mediano (13.1 - 25kg)</option>
                <option value="Grande (25 - 32kg)" className='text-base text-gray-500'>Grande (25 - 32kg)</option>
                <option value="Extra Grande (32.1 - 60kg)" className='text-base text-gray-500'>Extra Grande (32.1 - 60kg)</option>
            </select>
            <input type="tel" name='phone' placeholder='Phone' className='border-1 rounded' />
            <input type="email" name='email' placeholder='E Mail' className='border-1 rounded' />
            <input type="password" name='password' placeholder='password' className='border-1 rounded' />
            <input type="password" name='password' placeholder='confirm password' className='border-1 rounded' />
            <button type='submit' className='border-1 rounded px-5 cursor-pointer'>Sign Up</button>
        </form>
        </>
    )
}