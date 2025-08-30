import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image'

export default function Header(){
    return(
    <header className=" flex justify-between items-center">
        <Image 
          className="h-16 rounded-full m-5" 
          src='/logo.jpeg'
          alt="logo"
          width={84}
          height={64}
           />
        <div className="flex items-center gap-4 m-8">
          <Link className='cursor-auto lg:cursor-pointer' href='/profile'>
            <FontAwesomeIcon
              icon={faUser}
              className='active:bg-gray-800 lg:hover:cursor-pointer h-5 w-5 lg:hover:transform transition-transform duration-300 lg:hover:scale-120'
            />
          </Link>
          <Link className='cursor-auto lg:cursor-pointer' href='/login'>
            <FontAwesomeIcon
              icon={faRightToBracket}
              className="active:bg-gray-800 lg:hover:cursor-pointer h-5 w-5 lg:hover:transform transition-transform duration-300 lg:hover:scale-120 "
            />
          </Link>
          <Link className='cursor-auto lg:cursor-pointer' href='https://www.instagram.com/mascota_caribe/' target='blank'>
            <FontAwesomeIcon
              icon={faInstagram}
              className='active:bg-gray-800 lg:hover:cursor-pointer h-5 w-5 lg:hover:transform transition-transform duration-300 lg:hover:scale-120'
            />
          </Link>       
        </div>
    </header>
    )
}