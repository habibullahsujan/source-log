
'use client'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'

const Pagination = () => {
    const [active, setActive] = useState(0)
    return (
        <div>

            <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">

                <div className="lg:w-2/5 w-full  flex items-center justify-between border-t border-gray-200">
                    <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1665 4H12.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" strokeLinejoin="round" />
                            <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" strokeLinejoin="round" />
                            <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
                    </div>
                    <div className="sm:flex hidden">
                        <p className={cn("text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2 ", active === 1 ? 'border-indigo-600' : '')} onClick={() => setActive(1)}>1</p>
                        <p className={cn("text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2 ", active === 2 ? 'border-indigo-600' : '')} onClick={() => setActive(2)}>2</p>
                        <p className={cn("text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2 ", active === 3 ? 'border-indigo-600' : '')} onClick={() => setActive(3)}>3</p>
                        <p className={cn("text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2 ", active === 4 ? 'border-indigo-600' : '')} onClick={() => setActive(4)}>4</p>
                        <p className={cn("text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2 ", active === 5 ? 'border-indigo-600' : '')} onClick={() => setActive(5)}>5</p>
                        <p className={cn("text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2 ", active === 6 ? 'border-indigo-600' : '')} onClick={() => setActive(6)}>6</p>
                        <p className={cn("text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2 ", active === 7 ? 'border-indigo-600' : '')} onClick={() => setActive(7)}>7</p>
                        <p className={cn("text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2 ", active === 8 ? 'border-indigo-600' : '')} onClick={() => setActive(8)}>8</p>
                    </div>
                    <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                        <p className="text-sm font-medium leading-none mr-3">Next</p>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1665 4H12.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" strokeLinejoin="round" />
                            <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" strokeLinejoin="round" />
                            <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagination