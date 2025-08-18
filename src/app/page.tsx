
import Button from './ui/components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return(
    <>
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
        <Button />
      </section>
      
    </main>
    </>
  )
}
