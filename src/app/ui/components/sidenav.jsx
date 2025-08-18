import Link from 'next/link'


const links = [
  {name: 'Home', href: '/'},
  {name: 'Services', href: '/services'},
  {name: 'Shop', href: '/shop'},
  {name: 'Location', href: '/location'},
  {name: 'Recomendations', href: '/recomendations'}
]

export default function SideNav() {
  return (
    <nav className="flex flex-row justify-between h-20 w-full
                    md:fixed md:top-35 md:left-5 md:h-screen md:w-64
                    md:flex-col md:gap-20 md:justify-start">
          {links.map(link => {
            return(
              <Link
                key={link.name}
                href={link.href}
                className='lg:hover: p-2 rounded transform transition-transform duration-300 lg:hover:scale-105 lg:cursor-pointer active:bg-gray-800'
              >
                {link.name}
              </Link>
            )
          })}
    </nav>
  );
}
