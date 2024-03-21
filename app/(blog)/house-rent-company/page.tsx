import { Metadata } from 'next'
import React from 'react'
import BlogContainer from '../blogContainer'
import Link from 'next/link'
import { Home } from 'lucide-react'
import ContentTable from '@/app/(components)/contentTable'
import Image from 'next/image';
import featuredImage from '@/public/assets/house-rent-blog-banner.jpg'


export const metadata: Metadata = {
    title: "Top House Rental Companies in Saudi Arabia | Find Your Ideal Rental Today",
    description: 'Discover the best house rental companies in Saudi Arabia offering diverse options at competitive prices. Find your perfect rental with our comprehensive guide.'
}
const HouseRentCompany = () => {
    const tableContents = [
        { title: '1. XYZ Real Estate' },
        { title: '2. ABC Properties' },
        { title: '3. 123 Rental Services' },
        { title: '4. DEF Realty' },
        { title: '5. EFG Rentals' },


    ]
    return (
        <>
            <BlogContainer className=' mx-2 md:mx-16 py-32'>
                <div className='flex items-center gap-x-4 py-7 text-lg'>
                    <Link href={'https://www.theblogsouce.com'}><Home className='h-4 w-4' /></Link> / <Link href={'https://www.theblogsouce.com/house-rent-company'}>House-Rental-Companies</Link>
                </div>
                <div className='grid grid-cols-12 gap-x-5'>
                    <div className="col-span-12  lg:col-span-4">
                        <details
                            className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-16 max-h-[80vh] overflow-hidden overflow-y-auto"
                            open
                        >
                            <summary className="text-lg font-semibold capitalize cursor-pointer">
                                Table of contents
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
                        <h1 className='font-bold text-4xl text-[#00563B]'>Top House Rent Companies in Saudi Arabia: Finding Your Ideal Rental</h1>
                        <div className='my-10' id='The Best Chocolate in the World: A Comprehensive Guide'>
                            <div className='flex justify-end'>
                                <Image className='w-full h-[400px] object-fill' src={featuredImage} alt='Best House Rent Company' />
                            </div>
                            <span className='cursor-pointer text-sky-400'>source: <Link href={'https://unsplash.com/'} >unsplash.com</Link></span>
                        </div>
                        <article>
                            <p className='text-lg'>Are you looking for a house to rent in Saudi Arabia? With its booming real estate market, finding the perfect rental can be overwhelming. To simplify your search, we&apos;ve compiled a list of the top house rent companies in Saudi Arabia, each offering a range of options to suit your needs and preferences.</p>
                            <div className='py-4' id='1. XYZ Real Estate'>
                                <h2 className='font-bold text-xl pt-1 pb-2'>1. XYZ Real Estate</h2>
                                <p className='py-2'>XYZ Real Estate is a trusted name in the Saudi Arabian rental market, offering a wide selection of properties in Riyadh. From cozy apartments to spacious villas, they cater to individuals and families alike. Their competitive prices and excellent customer service make them a popular choice among renters.</p>

                                <ul className="list-disc">
                                    <li><span className="font-bold">Location:</span>Riyadh</li>
                                    <li><span className='font-bold'>Price Range: </span>SAR 2,000 - SAR 10,000/month</li>
                                </ul>
                            </div>
                            <div className='py-4' id='2. ABC Properties
'>
                                <h2 className='font-bold text-xl pt-1 pb-2'>2. ABC Properties
                                </h2>
                                <p className='py-2'>ABC Properties specializes in luxury rentals in Jeddah, catering to those seeking upscale living arrangements. Their portfolio includes high-end apartments and lavish villas, complete with modern amenities and stunning views. With personalized assistance and attention to detail, ABC Properties ensures a seamless rental experience for their clients.</p>

                                <ul className="list-disc">
                                    <li><span className="font-bold">Location:</span>Jeddah</li>
                                    <li><span className='font-bold'>Price Range: </span>SAR 3,500 - SAR 15,000/month</li>
                                </ul>
                            </div>

                            <div className='py-4' id='3. 123 Rental Services
'>
                                <h2 className='font-bold text-xl pt-1 pb-2'>3. 123 Rental Services
                                </h2>
                                <p className='py-2'>123 Rental Services offers affordable housing solutions in Dammam, catering to budget-conscious renters without compromising on quality. Whether you&apos;re looking for a studio apartment or a family-friendly townhouse, they have options to suit every taste and budget. With flexible lease terms and responsive management, 123 Rental Services makes renting hassle-free.</p>

                                <ul className="list-disc">
                                    <li><span className="font-bold">Location:</span>Dammam</li>
                                    <li><span className='font-bold'>Price Range: </span>SAR 1,500 - SAR 7,000/month</li>
                                </ul>
                            </div>

                            <div className='py-4' id='4. DEF Realty

'>
                                <h2 className='font-bold text-xl pt-1 pb-2'>4. DEF Realty
                                </h2>
                                <p className='py-2'>DEF Realty specializes in rental properties in Al Khobar, providing a diverse range of options to meet varying needs. From modern apartments in bustling neighborhoods to tranquil suburban homes, they offer something for everyone. With competitive prices and a commitment to customer satisfaction, DEF Realty stands out as a top choice for renters in Al Khobar.

                                </p>

                                <ul className="list-disc">
                                    <li><span className="font-bold">Location:</span>Al Khobar</li>
                                    <li><span className='font-bold'>Price Range: </span>SAR 2,500 - SAR 12,000/month</li>
                                </ul>
                            </div>
                            <div className='py-4' id='5. EFG Rentals'>
                                <h2 className='font-bold text-xl pt-1 pb-2'>5. EFG Rentals
                                </h2>
                                <p className='py-2'>EFG Rentals is a leading provider of rental properties in Medina, catering to residents seeking comfort and convenience. Their portfolio includes well-maintained apartments and spacious homes, conveniently located near schools, shopping centers, and other amenities. With transparent pricing and professional service, EFG Rentals ensures a positive rental experience for all tenants.

                                </p>

                                <ul className="list-disc">
                                    <li><span className="font-bold">Location:</span>Medina</li>
                                    <li><span className='font-bold'>Price Range: </span>SAR 2,000 - SAR 8,000/month</li>
                                </ul>
                            </div>

                            <p className='py-4'>With numerous reputable house rent companies operating in Saudi Arabia, finding your ideal rental has never been easier. Whether you&apos;re searching for a budget-friendly apartment or a luxurious villa, the options are plentiful. Explore the offerings of these top companies to find the perfect rental that suits your lifestyle and budget.

                                Remember to conduct thorough research, visit properties in person if possible, and consider your needs and preferences before making a decision. With the right guidance and expertise, you&apos;ll soon be calling your dream rental in Saudi Arabia home.</p>
                        </article>
                    </div>

                </div>
            </BlogContainer>
        </>
    )
}

export default HouseRentCompany