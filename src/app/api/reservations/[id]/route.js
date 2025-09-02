import { NextResponse } from "next/server";
import connectMongoDB from '@/lib/db/mongodb'
import Reservation from '@/auth/models/reservation'


export async function DELETE(req,{params}) {
    try {
        await connectMongoDB()

        const reservation = await Reservation.findByIdAndDelete(params.id)

        if(!reservation){
            return NextResponse.json({error: 'Reservation not Found'}, {status: 404})
        }
        
        return NextResponse.json({message: 'Deleted successfully'})
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}