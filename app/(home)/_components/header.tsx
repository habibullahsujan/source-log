import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import banner1 from '@/public/assets/banner-2.jpg'

import { Button } from '@/components/ui/button'

const Header = () => {

    const headerContentDetails = {
        imageSrc: banner1,
        imageAlt: 'kitchen hoods',
        href: '/kitchen-hoods',
        blogTitle: 'Conquering the Kitchen with Clarity: Your Comprehensive Guide to Hoods',
        blogDescription: 'Conquering the Kitchen with Clearness: Your Definitive Guide to Kitchen Hoods Kitchen hoods are the unsung heroes of culinary battles. Hovering over your stove, these silent sentinels take care of the smoke, grease and odors released during cooking, keeping your kitchen fresh and your lungs healthy. But with so many options available, choosing the right hood can feel like navigating a maze. Fear not, foodies! This comprehensive guide will provide you with the knowledge to choose the perfect range hood, and transform your cooking space into a haven of culinary creativity. Revealing the reason: The vital role of range hoods Imagine searing steaks, preparing a fragrant curry, or indulging in a stir-fry feast. While delicious, these culinary adventures unleash a torrent of airborne enemies—smoke, grease, steam, and even harmful pollutants. Inhaling them can irritate your eyes and lungs, trigger allergies, and even damage the interior of your home. Enter the kitchen hood, your stout defender against these unwanted guests. Demystifying the choices: A variety of range hoods The world of range hoods is as diverse as your culinary tastes. Here&apos;s a breakdown of the main types: Under-cabinet hoods: These are discreetly placed under cabinets and are ideal for small kitchens. Wall-mounted hoods: The classic choice, they provide powerful ventilation and come in different shapes to suit your decor. Island Hoods: Perfect for open kitchens or islands, these stylish units hang from the ceiling, making a statement while purifying the air. Downdraft Hoods: Built into your cooktop, these stylish options disappear when not in use, maximizing counter space. Recirculating hoods: Ideal for apartments or spaces without external ventilation, they filter and recirculate the air inside your kitchen. Choosing Your Champion: Key Considerations Now that you&apos;ve met the contenders, it&apos;s time to choose your champion! Here are the main factors to consider: Size: Make sure your hood covers the entire cooking surface to effectively capture airborne contaminants. Ventilation Power: Measured in cubic feet per minute (CFM), higher CFM indicates suction power. Match the CFM to your cooking style and kitchen size. Noise Level: Choose a hood with a decibel rating that suits your comfort level, especially if you cook frequently. Filters: Choose filters that are easy to clean and replace. Consider using charcoal filters to recycle the lids. Illumination: Built-in LED lights illuminate your cooking surface, enhancing visibility and adding a touch of elegance. Aesthetics: Choose a hood that complements your kitchen design and personal preferences. Beyond the Basics: Advanced Features to Elevate Your Kitchen Modern hoods offer a range of features to enhance your cooking experience: Variable Speed Control: Adjust suction power to match your cooking intensity. Heat Lamps: Keep your dishes warm while you finish cooking other items. Remote Control: Operate your hood from the comfort of your chair. Automatic shut-off: Ensures the hood turns off after a specified period of time, saving energy. Smart Connectivity: You can control your hood and monitor its performance through your smartphone. Installation Insights: Ensuring Optimal Performance For optimal performance and safety, proper installation is critical. Consult a qualified professional to ensure your hood is properly ventilated and meets all local building codes. MAINTAINING YOUR CHAMPION: Keeping your hood in tip-top condition Regular cleaning and maintenance are essential to ensure your hood is working effectively. Clean filters regularly, following the manufacturer&apos;s instructions. Wipe the outside of the cover with a damp cloth and mild detergent. Remember, a well-maintained hood is a happy and efficient hood! The Ultimate Whisk: Choosing the Right Kitchen Hood for You With this comprehensive guide in your arsenal, you&apos;re equipped to conquer your kitchen hood dilemma. Remember, the “best” hood is the one that perfectly matches your needs, preferences, and budget. So, put on your culinary mantle, embrace your inner chef, and let your kitchen hood be your trusted companion on your delicious adventures! Bonus tip: Consider your kitchen layout, cooking habits, and budget when making your decision. Feel free to consult professionals for personalized recommendations. Happy cooking!',

    }
    return (

        <div className='w-full inline-block'>
            <div className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]'>
                <div className='absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
            ' />
                <Image src={headerContentDetails.imageSrc}
                    alt={headerContentDetails.imageAlt}
                    fill
                    className='opacity-60 w-full h-full object-center object-cover rounded-3xl -z-10'
                    sizes='100vw'
                    priority
                />

                <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col items-start justify-center z-0 text-light'>

                    <Link href={headerContentDetails.href} className='mt-6 blog-title'>
                        <h1 className='font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl'>
                            <span className='bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '>
                                {headerContentDetails.blogTitle}
                            </span>
                        </h1>
                    </Link>
                    <p className='hidden  sm:inline-block mt-4 md:text-lg lg:text-xl font-in'>
                        {headerContentDetails.blogDescription.length > 400 ? headerContentDetails.blogDescription.slice(0, 400) : headerContentDetails.blogDescription}....
                    </p>
                    <div className='flex items-center justify-center gap-x-2'>
                        <Button className='rounded-xl font-semibold px-2 py-1 border border-sky-500 bg-sky-800 text-white'>Food</Button>
                        <Button className='rounded-xl font-semibold px-2 py-1 border border-sky-500 bg-sky-800 text-white'>Kitchen</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header