'use client'
import React, { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import Navbar from '../(home)/_components/navbar'
import Footer from '../(home)/_components/footer'



interface ILayoutProps {
  children: ReactNode,
}
const Layout = ({ children }: ILayoutProps) => {
  return (

    <main className={cn("min-h-screen  max-h-[1200px] w-full max-w-[1300px] px-2 md:px-[10px] h-full mx-auto",
    )}>
      <Navbar />
      {children}
      <Footer />
    </main>



  )
}

export default Layout