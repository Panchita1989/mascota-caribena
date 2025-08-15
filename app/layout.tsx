import type { Metadata } from "next";
import { Barrio } from 'next/font/google'
import "./globals.css";
import SideNav from './ui/components/sidenav'

const barrio = Barrio({
  subsets: ['latin'],
  weight: '400'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className = {barrio.className}>
        <div className=''>
          {children}
        </div>
        <div className='w-full flex-none md:w-64'>
          <SideNav />
        </div>        
      </body>
    </html>
  );
}
