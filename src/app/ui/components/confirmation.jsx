

export default function Confirmation({date, time, email}){
    return(
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1>Thank you for your reservation</h1>
            <p className='max-w-md'>Tu cita es el {date.toLocaleDateString()} a las {time}. Por favor llega 5 minutos antes. 
                en caso de no poder asistir a la cita por favor cancele su reservacion por medio de WhatsApp al numero 
                983 123 45 67
            </p>
            <p className='max-w-md'>un correo de confirmacion ha sido enviado a tu correo: {email}</p>
            <h2 className='max-w-md'>Muchas Gracias por tu confianza y nos vemos el {date.toLocaleDateString()} a las {time}</h2>
            <img className='' src="dog.gif" alt="dog" />
        </div>
        
    )
}