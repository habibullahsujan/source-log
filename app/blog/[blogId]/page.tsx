
'use client'
import Navbar from '@/app/(home)/_components/navbar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useState } from 'react'

const BlogIdPage = () => {

  const blogDetails={
    title:'',
    heading1:'',
    blogImage:'',
    para1:'',
    heading2:'',
    image2:'',
    para2:'',
    

  }

  const [activeButton, setActiveButton] = useState(0)
  return (
    <div>
      <Navbar />
      <div className='grid grid-cols-12 pt-16 px-32 gap-x-6'>
        <div className='col-span-12 md:col-span-8'>

          <h1>The 13 best Presidents&apos;Day TV deals from Best Buy&apos;s sale - save up to $1,000</h1>

          <div>
            <Button>News</Button>
            <span>By author name:publishing time</span>
            <div>
              <Image src={'https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8'} height={400} width={400} alt='blog' />
              <span>imge source:</span>
            </div>
            <p>The 2024 Presidents&apos; Day sales event is officially underway, and if you&apos;re looking to pick up a new TV, Best Buy is a top destination thanks to record-low prices on a range of displays. I&apos;ve gone through Best Buy&apos;s Presidents&apos; Day sale and hand-picked the very best 13 deals on best-selling 4K and OLED displays.</p>
            <p>Todays Presidents&apos; Day TV deals include massive big-screen TVs for cheap and high-end OLED displays that are down to record-low prices. Some of the best offers include LG&apos;s stunning 65-inch C3 OLED TV on sale for $1,599.99, this TCL 65-inch 4K smart TV marked down to a fantastic price of just $379.99 and LG&apos;s best-selling 48-inch A2 OLED TV on sale for $599.99.</p>
            <p>See more of the best Presidents Day TV deals below, and keep in mind that Best Buy&apos;s sale ends on Monday at Midnight. If you&apos;re looking to shop for more bargains, you can visit our main Presidents&apos; Day sales guide for all the best offers around the web.</p>
          </div>

        </div>
        <div className='col-span-12 md:col-span-4 flex gap-x-1 items-center justify-center bg-slate-700 h-48'>
          <Button onClick={() => setActiveButton(1)} variant={'outline'} className={
            cn('bg-white text-neutral-600 font-semibold rounded-none', activeButton === 1 && 'bg-slate-200 transition-all text-black')
          }>
            Most Popular
          </Button>
          <Button onClick={() => setActiveButton(2)} variant={'outline'} className={
            cn('bg-white text-neutral-600 font-semibold rounded-none', activeButton === 2 && 'bg-neutral-200 transition-all text-black')
          }>
            Most Shared
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BlogIdPage