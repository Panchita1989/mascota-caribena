import { NextResponse } from 'next/server'
import connectMongoDB from '../../../../lib/db/mongodb'
import Reservation from '../../../../models/reservation'

export async function GET(req){
    await connectMongoDB()
    
    const{ searchParams } = new URL(req.url)
    const name = searchParams.get('name')
    const petName = searchParams.get('petName')

    //dynamic Query
    const query = {}
    if(name) query.name = {$regex:name, $options: 'i'}
    if(petName) query.petName = {$regex:petName, $options: 'i'}

    try {
        const reservations = await Reservation.find(query).sort({date:1})
        return NextResponse.json(reservations)
    } catch (error) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}
