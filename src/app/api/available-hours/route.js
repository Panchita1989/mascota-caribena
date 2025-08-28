import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/db/mongodb'
import Reservation from '@/auth/models/reservation'

export async function GET(req){
    const{ searchParams } = new URL(req.url)
    const dateParam = searchParams.get('date')

    await connectMongoDB()

    const openingHours = ['10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']
    const date = new Date(dateParam)
    const reservations = await Reservation.find({date})
    
    const bookedTimes = reservations.map(r => r.time)
    const availableHours = openingHours.filter(hour => !bookedTimes.includes(hour))

    return NextResponse.json({availableHours})
}