import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return(
    <header className="flex justify-between items-center">
        <img className="h-16 rounded-full m-5" src="logo.jpeg" alt="logo" />
        <div className="flex items-center gap-4 m-8">
          <FontAwesomeIcon
            icon={faRightToBracket}
            className="cursor-pointer h-5 w-5 hover:transform transition-transform duration-300 hover:scale-120 "
          />
          <Link href='https://www.instagram.com/mascota_caribe/' target='blank'>
            <FontAwesomeIcon
              icon={faInstagram}
              className='cursor-pointer h-5 w-5 hover:transform transition-transform duration-300 hover:scale-120'
            />
          </Link>
       
        </div>
    </header>
  )
}
