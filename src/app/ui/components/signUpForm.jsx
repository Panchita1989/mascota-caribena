import { useState } from "react";
import Profile from './profile'


export default function SignUpForm(){
    const [formData, setFormData] = useState({
        name: "",
        petName: "",
        raza: "",
        size: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const[errorList, setErrorList] = useState([])
    const[succsess, setSuccsess] = useState(false)


    const handleSubmit = async(e) =>{
        e.preventDefault()

        if(formData.password !== formData.confirmPassword){
            setErrorList(['Passwords do not match'])
            return
        }
        try {
            const res = await fetch('/api/signup',{
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(formData)
            })
            const data = await res.json()
            if(res.ok){
                setSuccsess(true)
            }

            if(res.status >= 400){
                setErrorList(data.msg || ['Something went wrong'])
            }else{
                console.log(data, 'You have signed in')
                setErrorList([])
            }
        } catch (error) {
            setErrorList([error.message])
        }
    }

    if(succsess){
        return <Profile />
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev,
            [name]:value
        }))
    }

    return(
        <>
        <h2 className='text-center mt-8'>Sign Up</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 justify-center items-center mt-5'>
            <input type="text" name='name' onChange={handleChange} value={formData.name} placeholder='name' className='border-1 rounded' />
            <input type="text" name='petName' onChange={handleChange} value={formData.petName} placeholder='Pet Name' className='border-1 rounded' />
            <input type="text" name='raza' onChange={handleChange} value={formData.raza} placeholder='Raza' className='border-1 rounded' />
            <select name='size' value={formData.size} onChange={handleChange} className='appearance-none border-1 rounded'>
                <option value="" className='text-base text-gray-500'>Size</option>
                <option value="Mini (-3kg" className='text-base text-gray-500'>Mini (-3kg)</option>
                <option value="Extra CH (3.1 - 6kg)" className='text-base text-gray-500'>Extra CH (3.1 - 6kg)</option>
                <option value="Mediano (13.1 - 25kg)" className='text-base text-gray-500'>Mediano (13.1 - 25kg)</option>
                <option value="Grande (25 - 32kg)" className='text-base text-gray-500'>Grande (25 - 32kg)</option>
                <option value="Extra Grande (32.1 - 60kg)" className='text-base text-gray-500'>Extra Grande (32.1 - 60kg)</option>
            </select>
            <input type="tel" name='phone' onChange={handleChange} value={formData.phone} placeholder='Phone' className='border-1 rounded' />
            <input type="email" name='email' onChange={handleChange} value={formData.email} placeholder='E Mail' className='border-1 rounded' />
            <input type="password" name='password' onChange={handleChange} value={formData.password} placeholder='password' className='border-1 rounded' />
            <input type="password" name='confirmPassword' onChange={handleChange} alue={formData.confirmPassword} placeholder='confirm password' className='border-1 rounded' />
            <button type='submit' className='border-1 rounded px-5 cursor-pointer'>Sign Up</button>
        </form>
        {errorList.length > 0 &&(
            <div className=' flex flex-col justify-center items-center'>
                <ul>
                    {errorList.map((e)=>(
                        <li key={e}>{e}</li>
                    ))}
                </ul>
            </div>
        )}
        </>
    )
}