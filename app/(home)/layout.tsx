import React, { ReactNode } from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/footer'
import { cn } from '@/lib/utils'



interface ILayoutProps {
  children: ReactNode,
  className?: string
}
const Layout = ({ children, className }: ILayoutProps) => {
  return (

    <main className={cn("min-h-screen  max-h-[1200px] w-full max-w-[1300px] px-[10px] h-full mx-auto", className,
    )}>
      <Navbar />
      {children}
      <Footer />
    </main>



  )
}

export default Layout