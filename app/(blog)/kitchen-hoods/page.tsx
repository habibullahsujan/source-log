import ContentTable from '@/app/(components)/contentTable'
import { Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BlogContainer from '../blogContainer'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Best Kitchen hoods: breathe easy and enjoy cooking',
  description: "Find the perfect range hoods for your needs! Explore types, features and installation tips for a clean, new kitchen."
};
const KitchenHoods = () => {
  const tableContents = [
    { title: 'Uncovering the cause: The vital role of kitchen hoods' },
    { title: 'Demystifying the choices: A variety of range hoods' },
    { title: 'Choosing your hero: essential considerations' },
    { title: 'Beyond the basics: advanced features to elevate your kitchen' },
    { title: 'Installation Insights: Ensuring Optimal Performance' },
    { title: 'Maintain your hero: keeping your hood looking its best' },
    { title: 'The ultimate blender: Choosing the right kitchen hood for you' },
  ]
  return (

    <BlogContainer className='mx-2 md:mx-16 py-32'>
      <div className='flex items-center gap-x-4 py-7'>
        <Link href={'https://www.theblogsouce.com'}><Home className='h-4 w-4' /></Link> / <Link href={'https://www.theblogsouce.com/kitchen-hoods'}>Kitchen Hoods</Link>
      </div>
      <div className='grid grid-cols-12 gap-5'>
        <div className="col-span-12  lg:col-span-4 lg:mr-6 mr-0">
          <details
            className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-16 max-h-[80vh] overflow-hidden overflow-y-auto"
            open
          >
            <summary className="text-lg font-semibold capitalize cursor-pointer">
              Table of Contents
            </summary>
            <ul className="mt-4 font-in text-base">
              {
                tableContents.map((heading, index) => (
                  <ContentTable key={index} heading={heading} />
                ))
              }
            </ul>
          </details>
        </div>
        <div className='col-span-12 lg:col-span-8'>
          <h1 className='font-bold text-2xl text-[#00563B]'>Conquering the Kitchen with Clarity: Your Comprehensive Guide to Hoods</h1>
          <div className=' my-10' >
            <div className='flex'>
              <Image className='' src={'https://images.pexels.com/photos/15119073/pexels-photo-15119073/free-photo-of-exhaust-hood-over-cooker.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='kitchen hoods' width={500} height={200} />


            </div>
            <span className='cursor-pointer text-sky-400'>source: <Link href={'https://pexels.com'} >pexel.com</Link></span>
          </div>
          <article>
            <p className='text-lg'>
              Kitchen hoods are the unsung heroes of culinary battles. Hovering over your stove, these silent sentinels take care of the smoke, grease and odors released during cooking, keeping your kitchen fresh and your lungs healthy. But with so many options available, choosing the right hood can feel like navigating a maze. Fear not, foodies! This comprehensive guide will provide you with the knowledge to choose the perfect range hood, and transform your cooking space into a haven of culinary creativity.
            </p>
            <div id='Uncovering the cause: The vital role of kitchen hoods'>
              <h2 className='text-xl font-bold pt-14 pb-2 text-[#00563B]'>Uncovering the reason: the vital role of kitchen hoods</h2>
              <p className='text-lg'>
                Imagine searing steaks, preparing an aromatic curry, or indulging in a deep-frying feast. While delicious, these culinary adventures unleash a torrent of airborne enemies—smoke, grease, steam, and even harmful pollutants. Inhaling them can irritate your eyes and lungs, trigger allergies, and even damage the interior of your home. Enter the kitchen hood, your stout defender against these unwanted guests.
              </p>
            </div>
            <div id='Demystifying the choices: A variety of range hoods'>
              <h2 className='text-xl font-bold pt-14 pb-2 text-[#00563B]'>
                Demystifying the options: A variety of range hoods
              </h2>
              <p className='text-lg py-3 font-semibold'>
                The world of range hoods is as diverse as your culinary tastes. Below is a breakdown of the main types:
              </p>

              <ul className='list-disc'>
                <li className=''><span className='font-bold'>Under Cabinet Hoods: </span>These space savers that are discreetly placed under cabinets are ideal for small kitchens.</li >
                <li className=''><span className='font-bold '>Wall-mounted hoods: </span>The classic option, provides powerful ventilation and comes in different styles to suit your decor.</li>
                <li className=''><span className='font-bold '>Island Hoods: </span>Perfect for open kitchens or islands, these stylish units hang from the ceiling, making a statement while purifying the air. </li>
                <li className=''><span className='font-bold '>Downdraft Hoods: </span>These stylish options are built into your stovetop, and disappear when not in use, maximizing space The desk.</li>
                <li className=''>
                  <span className='font-bold '>Cap recycling: </span>
                  Ideal for apartments or spaces without external ventilation, it filters and recirculates the air inside your kitchen.
                </li>
              </ul>
            </div>
            <div id='Choosing Your Hero: Key Considerations'>
              <h2 className='text-xl font-bold pt-14 pb-2 text-[#00563B]'>Choosing Your Hero: Key Considerations</h2>
              <p className='text-lg py-3 font-semibold'>Now that you&apos;ve met the contenders, it&apos;s time to choose your champion! Here are the main factors to think about:</p>
              <ul className='list-disc'>
                <li className=''><span className='font-bold '>Size: </span>Make sure your hood covers the entire cooking surface to effectively capture airborne contaminants.</li>
                <li className=''><span className='font-bold '>Ventilation power: </span>When measured in cubic feet per minute (CFM), a higher CFM indicates suction power. Match the CFM to your cooking style and kitchen size.</li>
                <li className=''><span className='font-bold '>Noise level: </span>Choose a range hood with a decibel rating that suits your comfort level, especially if you cook frequently.</li>
                <li className=''><span className='font-bold '>Filters: </span>Choose filters that are easy to clean and replace. Consider using charcoal filters to recycle lids.</li>
                <li className=''><span className='font-bold '>Lighting: </span>Built-in LED lights illuminate your cooking surface, enhancing visibility and adding a touch of elegance.</li>
                <li className=''><span className='font-bold '>Aesthetics: </span>Choose a hood that complements your kitchen design and personal preferences.</li>
              </ul>
            </div>
            <div id='Beyond the basics: advanced features to elevate your kitchen' >
              <h2 className='text-xl font-bold pt-14 pb-2 text-[#00563B]'>Beyond the basics: advanced features to elevate your kitchen</h2>
              <h3 className='font-semibold text-[#00563B]'>Modern hoods offer a range of features to enhance your cooking experience:</h3>
              <ul className='list-disc'>
                <li className=''><span className='font-bold '>Variable speed control: </span>Adjust suction power to match your cooking intensity.</li>
                <li className=''><span className='font-bold '>Heat lamps: </span>Keep your dishes warm while you finish cooking other items.</li>
                <li className=''><span className='font-bold '>Control: </span>Operate your hood from the comfort of your chair.</li>
                <li className=''><span className='font-bold '>Automatic shut-off: </span>Ensures that the hood turns off after a specified period of time, saving energy.</li>
                <li className=''><span className='font-bold '>Smart Connectivity: </span>Control your car hood and monitor its performance through your smartphone.</li>
              </ul>
            </div>
            <div id='Installation Insights: Ensuring Optimal Performance'>
              <h2 className='text-xl font-bold pt-14 pb-2 text-[#00563B]'>Installation Insights: Ensuring Optimal Performance</h2>
              <p>For optimal performance and safety, proper installation is critical. Consult a qualified professional to ensure your hood is properly ventilated and meets all local building codes.</p>
            </div>
            <div>
              <h2 className='text-xl font-bold pt-14 pb-2 text-[#00563B]'>Maintaining your hero: keeping your hood looking its best</h2>
              <p>Regular cleaning and maintenance is essential to ensure your hood is working effectively. Clean filters regularly, following the manufacturer&apos;s instructions. Wipe the outside of the cover with a damp cloth and mild detergent. Remember, a well-maintained hood is a happy and efficient hood!</p>
            </div>
            <div>
              <h2 className='text-xl font-bold pt-14 pb-2 text-[#00563B]'>The ultimate whisk: choosing the right kitchen hood for you</h2>
              <p>With this comprehensive guide in your arsenal, you&apos;re equipped to overcome your kitchen hood dilemma. Remember that the &quot;best&quot; The one that perfectly matches your needs, preferences and budget. So, put on your culinary mantle, embrace your inner chef, and let your range hood be your trusted companion on your delicious adventures!</p>
            </div>
            <div>
              <p><span className='font-bold '>Bonus tip:</span>Consider your kitchen layout, cooking habits, and budget when making your decision. Feel free to consult specialists for personalized recommendations.</p>
            </div>
            <p className='font-bold py-6'>Happy cooking!</p>
          </article>
        </div>
      </div>
    </BlogContainer>

  )
}

export default KitchenHoods