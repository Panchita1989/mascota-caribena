import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/db/mongodb'
import User from '@/auth/models/user'

export async function GET(){
    await connectMongoDB()

    try {
        const users = await User.find({})
        return NextResponse.json(users, {status: 200})
    } catch (error) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}