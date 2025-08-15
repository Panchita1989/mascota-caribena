import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return(
    <>
    <header className="flex justify-between items-center">
        <img className="h-16 rounded-full m-5" src="logo.jpeg" alt="logo" />
        <div className="flex items-center gap-4 m-8">
          <Link className='cursor-auto lg:cursor-pointer' href='/singup'>
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
    <main >
      <h2 className='text-center md:text-2xl'>About Us</h2>
      <section className='flex flex-col items-center justify-center p-10'>
        <div className='md: p-5 max-w-md'>
          <h4 className='text-xl font-semibold'>Who we are</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, illo impedit incidunt fuga quasi aliquam autem veniam nobis nulla quidem commodi cupiditate quod rerum alias laudantium, placeat corporis animi dolores.</p>
        </div>
        <div className='p-5'>
        <img className='' src="portrait.jpeg" alt="portrait" />
        </div>
        <Link href='/booking'><button className='lg:hover:cursor-pointer p-2 rounded transform transition-transform duration-300 lg:hover:scale-105 border-1 rounded active:bg-gray-800'>Book appointment</button></Link>
      </section>
      
    </main>
    </>
  )
}
