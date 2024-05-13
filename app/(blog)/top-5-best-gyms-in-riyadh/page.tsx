import { Metadata } from 'next'
import React from 'react'
import BlogContainer from '../blogContainer'
import Link from 'next/link'
import { Home } from 'lucide-react'
import ContentTable from '@/app/(components)/contentTable'
import Image from 'next/image'
import featuredImage from '@/public/assets/best-gym.jpeg'
import SimilarContent from '@/app/(components)/similarContent'


export const metadata: Metadata = {
    title: 'Top 5 Gyms in Riyadh: Your Ultimate Fitness Guide for 2024',
    description: "Discover Riyadh's Top 5 Gyms with State-of-the-Art Facilities for Your Fitness Journey!"
}
const BestGym = () => {
    const tableContents = [
        { title: '1. Fitness Fusion' },
        { title: '2. Powerhouse Gym' },
        { title: '3. Fit Zone' },
        { title: '4. Pure-gym-ksa' },
        { title: "5. Fitness Time KSA" },
    ]
    return (
        <BlogContainer className=' mx-2 md:mx-16 py-32'>
            <div className='flex items-center gap-x-4 py-7 text-lg'>
                <Link href={'/'}><Home className='h-4 w-4' /></Link> / <Link href={'/top-5-best-gyms-in-riyadh'}>Top-5-best-gyms-in-riyadh</Link>
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
                    <h1 className='font-bold text-4xl text-[#00563B]'>Top 5 best gyms in Riyadh</h1>
                    <div className='my-10' id='The Best Chocolate in the World: A Comprehensive Guide'>
                        <div className='flex justify-end'>
                            <Image className='w-full h-[400px] object-fill' src={featuredImage} alt='a man on a treadmill in a gym' />
                        </div>
                        <span className='cursor-pointer text-sky-400'>source: <Link href={'https://unsplash.com/'} >unsplash.com</Link></span>
                    </div>
                    <article>
                        <p className='text-lg'>Are you on the hunt for the best gym in Riyadh to kickstart your fitness journey? Look no further! We&apos;ve curated a comprehensive guide to the top fitness centers in the city, each offering a unique blend of facilities, expert training, and welcoming environments to help you reach your fitness goals.</p>
                        <div className='py-16' id='1. Fitness Fusion'>
                            <h2 className='font-bold text-xl pt-1 pb-2'>
                                1. In Riyadh,
                                <Link className='underline text-blue-400' href={'https://www.fitnessfusionapp.com/'} target='_blank'> Fitness Fusion </Link>
                                is a well-known facility.</h2>
                            <iframe className='w-full h-[400px] object-cover' src="https://www.instagram.com/fitnessfusionofficial/embed/"></iframe>


                            <p className='py-2'>Fitness Fusion, located in the heart of Olaya, is renowned for its cutting-edge facilities and personalized approach to fitness. With a wide range of equipment, including cardio machines, free weights, and resistance training tools, members can tailor their workouts to suit their preferences. The gym also offers an array of group fitness classes led by certified instructors, from high-intensity interval training to yoga and Pilates. Additionally, personal training services are available for those seeking individualized guidance and support. After a rewarding workout, members can unwind in the swimming pool, sauna, or steam room, making Fitness Fusion the ultimate fitness destination in Riyadh.</p>

                            <ul className="list-disc py-4">
                                <li><span className="font-bold">Location:</span>Olaya</li>
                                <li><span className='font-bold'>Subscription Range: </span>SAR 300 - SAR 600/month</li>
                                <li><span className='font-bold'>Facilities: </span>State-of-the-art gym equipment, group fitness classes, personal training, swimming pool, sauna, and steam room.</li>
                            </ul>
                        </div>
                        <div className='py-16' id='2. Powerhouse Gym'>

                            <h2 className='font-bold text-xl pt-1 pb-2'>2.
                                <Link className='underline text-blue-400' href={'https://powerhousegym.com/'} target='_blank'> Powerhouse Gym </Link>
                                is another prominent gym in Riyadh.
                            </h2>

                            <iframe className='w-full h-[400px] object-cover' src="https://www.instagram.com/_powerhouse_gym_/embed/"></iframe>
                            <p className='py-2'>Located in Al Malaz, Powerhouse Gym is a haven for fitness enthusiasts looking to build strength and endurance. The gym boasts a comprehensive range of weightlifting equipment, catering to both beginners and seasoned lifters. In addition to traditional gym amenities, Powerhouse Gym offers specialized facilities such as a boxing ring for combat training enthusiasts. Members can also take advantage of group fitness classes led by experienced instructors, covering everything from spinning to kickboxing. With nutritional counseling services available, Powerhouse Gym empowers members to achieve their fitness goals both inside and outside the gym.</p>

                            <ul className="list-disc py-4">
                                <li><span className="font-bold">Location:</span>Al Malaz</li>
                                <li><span className='font-bold'>Subscription Range: </span>SAR 250 - SAR 500/month</li>
                                <li><span className='font-bold'>Facilities: </span>Extensive selection of weightlifting equipment, cardio machines, group fitness classes, boxing ring, and nutritional counseling.</li>
                            </ul>
                        </div>

                        <div className='py-16' id='3. Fit Zone'>
                            <h2 className='font-bold text-xl pt-1 pb-2'>3. One more well-liked gym in Riyadh is Fit Zone.
                            </h2>
                            <iframe className='w-full h-[400px] object-cover' src="https://www.instagram.com/fitzone.sa/embed/"></iframe>
                            <p className='py-2'>Nestled in Al Murooj, Fit Zone stands out for its diverse range of fitness offerings and vibrant community atmosphere. The gym features state-of-the-art equipment, ensuring members have access to the tools they need to succeed. Fit Zone also offers an array of group fitness classes designed to cater to various interests and fitness levels, from Zumba to circuit training. What sets Fit Zone apart is its unique amenities, including an indoor climbing wall for those seeking a thrilling workout experience. Additionally, the gym boasts an outdoor jogging track, allowing members to enjoy the fresh air while working on their cardiovascular health.</p>

                            <ul className="list-disc py-4">
                                <li><span className="font-bold">Location:</span>Al Murooj</li>
                                <li><span className='font-bold'>Subscription Range: </span>SAR 200 - SAR 400/month</li>
                                <li><span className='font-bold'>Facilities: </span>Modern gym equipment, group fitness classes, indoor climbing wall, and outdoor jogging track.</li>
                            </ul>
                        </div>

                        <div className='py-16' id='4. Pure-gym-ksa'>
                            <h2 className='font-bold text-xl pt-1 pb-2'>4. Pure-Gym-KSA is a well-known fitness centre in Riyadh.
                            </h2>
                            <iframe className='w-full h-[400px] object-cover' src="https://www.instagram.com/puregymksa/embed/"></iframe>
                            <p className='py-2'>Situated in Riyadh, Pure Gym is dedicated to helping individuals achieve their fitness goals through personalized training and holistic wellness services. The gym features high-quality equipment tailored to different fitness objectives, ensuring members can maximize their workouts effectively. Additionally, Pure Gym offers personalized training programs led by certified coaches, as well as sports massage therapy to aid in recovery and injury prevention. With nutritional guidance available, members can optimize their diets to complement their training regimen, making Pure Gym a top choice for those serious about their fitness journey.

                            </p>

                            <ul className="list-disc py-4">
                                <li><span className="font-bold">Location:</span>
                                    <span className='block'>Al Khobar - Golden Belt - Men</span><span className='block'>Al Khobar - Al Rakah - Women</span><span className='block'> Dammam - Al Faisaliah - Men</span><span className='block'>Riyadh - Mansoura - men</span>
                                    <span className='block'>Riyadh - Al Yasmeen - Men</span>
                                    <span className='block'> Riyadh - Al Hamra - Men</span>
                                    <span className='block'>Riyadh - Al Hamra - Women</span>
                                    <span className='block'>Riyadh - Journalism - Women</span>
                                    <span className='block'> Riyadh - Al Aziziyah - Ladies</span>
                                    <span className='block'>Riyadh - Al Munsiyah - Men</span>
                                    <span className='block'> Riyadh - Al Munsiyah - Women</span>
                                    <span className='block'>Pure Gym - Dammam - Al Shati - for ladies</span>
                                    <span className='block'> Pure Gym - Dammam - Kairouan - for men</span>
                                    <span className='block'> Pure Gym - Riyadh - Al-Rabwa - for men</span>
                                    <span className='block'>Pure Gym - Riyadh - Al Saada - for men</span>
                                    <span className='block'>PureGym Riyadh Al Rabwa for women</span><span className='block'>PureGym Men Riyadh Al Naseem</span><span className='block'      >Puregem Ladies Riyadh Al Naseem</span>

                                </li>
                                <li><span className='font-bold'>Price Range: </span>SAR 99 to 149/month</li>
                                <li><span className='font-bold'>Facilities: </span>High-quality gym equipment, personal training, sports massage therapy, and nutritional guidance.</li>
                            </ul>
                        </div>
                        <div className='py-4' id="5. Fitness Time KSA">
                            <h2 className='font-bold text-xl pt-1 pb-2'>5. Another well-liked and famous fitness centre in Riyadh is Fitness-Time-KSA.

                            </h2>
                            <iframe className='w-full h-[400px] object-cover' src="https://www.instagram.com/fitnesstimesa/embed/"></iframe>
                            <p className='py-2'>Conveniently located in Riyadh but their branches are spread all over the country, Fitness time is a modern gym that caters to individuals of all fitness levels. Equipped with the latest gym technology, Fitness Time offers a diverse range of equipment to target every muscle group effectively. Members can participate in a variety of group fitness classes led by experienced instructors, including yoga, spin, and functional training. What sets Flex Fitness Center apart is its indoor basketball court, providing an additional avenue for members to stay active and engaged. Moreover, the gym offers the services of an on-site nutritionist to help members optimize their diets for optimal performance and results.

                            </p>

                            <ul className="list-disc py-4">
                                <li><span className="font-bold">Location:</span>
                                    They has 174 branches all over the country.

                                </li>
                                <li><span className='font-bold'>Price Range: </span>SAR 115 - SAR 750/month</li>
                                <li><span className='font-bold'>Facilities: </span>State-of-the-art gym equipment, group fitness classes, indoor basketball court, and on-site nutritionist.</li>
                            </ul>
                        </div>

                        <p className='py-4'>With a myriad of options to choose from, finding the best gym in Riyadh is an exciting journey that can transform your fitness routine. Whether you prioritize cutting-edge facilities, expert training, or a supportive community atmosphere, the gyms listed above offer something for everyone. Take the first step towards a healthier lifestyle by exploring these premier fitness destinations in Riyadh today!</p>
                    </article>
                </div>

            </div>
            <div>
                {
                    <SimilarContent title='/best-gym-riyadh' />
                }
            </div>
        </BlogContainer>
    )
}

export default BestGym