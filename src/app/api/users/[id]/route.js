import { NextResponse } from "next/server";
import connectMongoDB from '@/lib/db/mongodb'
import User from '@/auth/models/user'


export async function DELETE(req,{params}) {
    try {
        await connectMongoDB()

        const user = await User.findByIdAndDelete(params.id)

        if(!user){
            return NextResponse.json({error: 'User not Found'}, {status: 404})
        }
        
        return NextResponse.json({message: 'Deleted successfully'})
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}