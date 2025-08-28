import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/db/mongodb'
import User from '@/auth/models/user'
import mongoose from 'mongoose'
import nodemailer from 'nodemailer'

export async function POST(req){
    try {
        await connectMongoDB()
        const {name, petName, raza, size, phone, email, password} = await req.json()

        //check if User already exists
        const existingUser = await User.findOne({ email: email.toLowerCase().trim() });
        if (existingUser) {
            return NextResponse.json({ msg: ['Email already exists'] }, { status: 400 });
        }

        //Create user
        const user = await User.create({name, petName, raza, size, phone, email: email.toLowerCase().trim(), password})
        console.log(user)

        return NextResponse.json(
            {
                msg:['Sign Up succsesfull'],
                succsess: true,
            },
            {
                status: 201
            }
         )
    } catch (error) {
        if(error instanceof mongoose.Error.ValidationError){
            const errorList = Object.values(error.errors).map(e=>e.message)
            return NextResponse.json({msg:errorList}, {status: 400})
        }else{
            return NextResponse.json({msg:['Unable to finish registragion']}, {status: 500})
        }
    }
}
