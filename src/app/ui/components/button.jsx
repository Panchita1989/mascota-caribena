import Link from 'next/link'

export default function Button(){
    return(
        <Link href='/booking'>
            <button className='lg:hover:cursor-pointer p-2 rounded transform transition-transform duration-300 lg:hover:scale-105 border-1 rounded active:bg-gray-800'>Book appointment</button>
        </Link>
    )
}