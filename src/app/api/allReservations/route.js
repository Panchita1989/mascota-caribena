import { NextResponse } from 'next/server'
import connectMongoDB from '../../../../lib/db/mongodb'
import Reservation from '../../../../models/reservation'

export async function GET(){
    await connectMongoDB()

    try {
        const reservations = await Reservation.find().sort({date:1})
        return NextResponse.json(reservations)
    } catch (error) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}