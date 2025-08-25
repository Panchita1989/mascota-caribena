import { NextResponse } from 'next/server'
import connectMongoDB from '../../../../lib/db/mongodb'
import Reservation from '../../../../models/reservation'
import mongoose from 'mongoose'
import nodemailer from 'nodemailer'


export async function POST(req) {
    const{name, petName, raza, age, email, information, date, time} = await req.json()
    const reservationDate = new Date(date)
    try {
        await connectMongoDB()
        const reservation = await Reservation.create({name, petName, raza, age, email, information, date: reservationDate, time})
        console.log(reservation)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            },
            });
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: email,
            subject: `Mascota Caribeña ru reservacion`,
            text: `Hola ${name}
                    Tu cita ha sido confirmada! 🎉
                    Detalles de la reserva:
                    - Mascota: ${petName}
                    - Raza: ${raza}
                    - Edad: ${age}
                    - Fecha y Hora: ${reservationDate.toLocaleDateString()} a las ${time}
                    Estamos emocionados de recibir a ${petName} 
                    y ofrecerle un cuidado especial y mucho amor. 💛

                    Si necesitas cancelar o reprogramar, 
                    por favor contáctanos al WhatsApp 983 123 45 67 con anticipación.

                    Nos vemos pronto! 🐶🐱`
        })
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            subject: `New Reservation`,
            text: `Nueva reservacion :
                    Nombre: ${name}
                    Mascota: ${petName}, ${raza}, ${age}años
                    fecha: ${reservationDate.toLocaleDateString()}
                    hora: ${time}
                    informacion adicional: ${information}`
        })


        return NextResponse.json(
            {
            msg:['Reservation succsesfull'],
            succsess: true,
            }
        )
    } catch (error) {
       if(error instanceof mongoose.Error.ValidationError){
        let errorList = []
        for(let e in error.errors){
            errorList.push(error.errors[e].message)
        }
        console.log(errorList)
        return NextResponse.json({msg:errorList})
       }else{
        return NextResponse.json({msg:['Unable to finish reservation']})
       }
    }
}