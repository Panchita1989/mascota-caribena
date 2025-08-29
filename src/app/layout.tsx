import type { Metadata } from "next";
import { Barrio } from 'next/font/google'
import "./globals.css";
import SideNav from './ui/components/molecules/sidenav'
import Header from './ui/components/molecules/header'
import Footer from './ui/components/molecules/footer'
import AppProviders from './ui/components/appProviders';

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
        <AppProviders>
          <div className='flex flex-col min-h-screen'>
            <Header />
          <div className='w-full flex-none md:w-64'>
            <SideNav />
          </div>        
          <div className='flex-grow'>
            {children}
          </div>
          <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
