import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/db/mongodb'
import User from '@/auth/models/user'

export async function POST(req){
    try {
        await connectMongoDB()
        const {email, password} = await req.json()

        //searching User with the Email adress
        const user = await User.findOne({ email: email.toLowerCase().trim() })
        console.log(user)
        if(!user){
            return NextResponse.json({msg: 'User not found'}, {status: 400})
        }

        //checking password
        const isMatch = await user.comparePassword(password)
        if(!isMatch){
            return NextResponse.json({msg:'Invalid password'},{status: 401})
        }

        //succsesfull loged in
        return NextResponse.json(
            {success: true, role: user.role},
            {status: 200}
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {msg: 'Something went wrong', error:error.message},
            {status: 500}
        )
    }
}