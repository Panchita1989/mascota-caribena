import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/db/mongodb'
import Reservation from '@/auth/models/reservation'

export async function GET(){
    await connectMongoDB()

    const today = new Date()
    today.setHours(0,0,0,0)

    try {
        const futureReservations = await Reservation.find({
            date:{$gte: today}
        }).sort({date: 1, time: 1})
        return NextResponse.json(futureReservations)       
    } catch (error) {
        return NextResponse.json(error)
    }
}