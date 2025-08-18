import Card from '../ui/components/cards'
import Button from '../ui/components/button'
import servicesData from '../../../lib/servicesData';

export default function Services() {

    return(
        <>
            <h1 className='text-center mb-8'>Services </h1>
            {servicesData.map((e,i)=> {
              return <Card key={i} titel={e.size} content={e.prices} />                    
            })}
            <div className='text-center mt-5'>
            <Button />
            </div>
            <div className='flex flex-col justify-center items-center mt-8'>            
            <h5>El Servicio incluye:</h5>
            <h6 className='mt-5'>Pelo corto: </h6>
            <p className='max-w-md font-mono'>Baño con shampoo de acuerdo a la condicion del pelo y piel, corte uñas,
            limpieza de orejas, cepillado, perfume y bandana.</p>
            <h6 className='mt-5'>Pelo largo:</h6>
            <p className='max-w-md font-mono'>Baño con shampoo de acuerdo a la condicion del pelo y piel, corte uñas, limpieza de orejas, cepillado, perfume y bandana.
                SE COBRARA EXTRA POR DESLANADO Y/O NUDOS EN CASO DE SER NECESARIO 
                (el precio dependerá de la condición del pelo)</p>
            <h5 className='mt-5'>EL SERVICIO DE BAÑO Y CORTE INCLUYE: </h5>
            <p className='max-w-md font-mono'>Corte de acuerdo a las posibilidades del pelo, baño con shampoo de especialidad,
                corte de uñas, limpieza de orejas, perfume y bandana. SE COBRARA EXTRA POR EXCESO DE NUDOS
                (el precio dependerá de la condición del pelo)
            </p>
            </div>
    
        </>
    )
}