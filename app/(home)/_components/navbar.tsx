'use client'
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion'
import { Menu } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/assets/logo.png'
import { Noto_Serif_Bengali } from 'next/font/google';
import { cn } from '@/lib/utils';
const roboto = Noto_Serif_Bengali({
    subsets: ['latin'],
    weight: ['400']
})

const Navbar = () => {
    return (
        <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay: 0.9 } }} className="py-6 fixed w-full mx-auto px-12 z-50 bg-white/80 backdrop-blur-sm ">
            <nav className='flex justify-between items-center'>
                <Link href={'/'} className={cn("font-semibold md:text-3xl text-lg flex", roboto.className)}>
                    <Image src={logo} alt='logo' height={40} width={40} />
                    <span className=''>Blog Source</span>
                </Link>
                <ul className="space-x-4 hidden md:block">
                    <Link className='hover-2 text-lg font-bold px-2 py-1' href={"/blog"}>Blog</Link>

                    <Link className='hover-2 text-lg font-bold px-2 py-1' href={"/about"}>About</Link>

                    {/* <Link className='hover-2 text-lg font-bold px-2 py-1' href={'/login'}>
                        <Button variant={'outline'}>Login</Button>
                    </Link> */}
                    {/* <Link className='hover-2 text-lg font-bold px-2 py-1' href={'/login'}>
                        <Button variant={'outline'}>Write Blog</Button>
                    </Link> */}

                </ul>


            </nav>
            <div className="block md:hidden">
                <Menu className="h-8 w-8" />
            </div>
        </motion.header>

    );
};

export default Navbar;