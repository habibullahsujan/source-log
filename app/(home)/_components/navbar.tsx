'use client'
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion'
import { Menu } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/assets/logo.png'
import { cn } from '@/lib/utils';
import { DropdownMenuRadioGroupDemo } from '@/app/(components)/dropdownMenu';



const Navbar = () => {
    return (
        <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay: 0.9 } }} className="py-4 fixed w-full mx-auto z-50 bg-[#00563B] text-white opacity-70 px-4">
            <nav className='flex justify-between items-center'>
                <Link href={'/'} className={cn("font-semibold md:text-3xl text-lg flex gap-x-2 items-center")}>
                    <Image src={logo} alt='Blog Souce Logo' height={40} width={40} className='' />
                    <span className=''>Blog Source</span>
                </Link>
                <ul className="space-x-4 hidden md:block">
                    <Link className='hover-2 text-lg font-bold px-2 py-1' href={"/about"}>About</Link>


                </ul>
                <div className="block md:hidden">
                    <DropdownMenuRadioGroupDemo>
                        <Button><Menu className="h-8 w-8" /></Button>
                    </DropdownMenuRadioGroupDemo>
                </div>

            </nav>

        </motion.header>

    );
};

export default Navbar;
