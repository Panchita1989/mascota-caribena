import { NextResponse } from 'next/server'
import connectMongoDB from '../../../../lib/db/mongodb'
import Reservation from '../../../../models/reservation'


export async function GET(req){
    await connectMongoDB()
    const maxAvailableSpots = 9

    const reservations = await Reservation.aggregate([
        {
            $group:{
                _id: '$date',
                count: {$sum: 1}
            }
        },
        {
            $match:{count: { $gte: maxAvailableSpots}}
        }
    ])
    const fullyBookedDays = reservations.map(r =>
        new Date(r._id).toISOString().split('T')[0]
    )
    return NextResponse.json({fullyBookedDays})
}
