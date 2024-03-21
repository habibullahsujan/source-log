import React from 'react'
import BlogContainer from '../blogContainer';
import Link from 'next/link';
import { Home } from 'lucide-react';
import ContentTable from '@/app/(components)/contentTable';
import Image from 'next/image';
import { Metadata } from 'next';
import featuredImage from '@/public/assets/riyadh-img.jpg'
import SimilarContent from '@/app/(components)/similarContent';



export const metadata: Metadata = {
  title: "Best tourist places in Riyadh",
  description: "Discover the best of Riyadh! From historical landmarks to modern masterpieces, discover attractions and travel tips for your trip. (104 characters)"
};
const TouristPlacesRiyadh = () => {



  const tableContents = [
    { title: '1. Al-Masmak Castle: Symbol of Resilience (Deira Region)' },
    { title: '2. The Saudi National Museum: A Journey Through Time (Al-Bathaa Neighborhood)' },
    { title: "3. Kingdom Center: Elevated Icon (Malaysia District)" },
    { title: "4. Al Murabba Palace: A glimpse into the royal history (Al Murabba District)" },
    { title: "5. The Edge of the World (Jarf Tuwaiq)" },

  ]
  return (

    <BlogContainer className='mx-2 md:mx-16 py-32'>
      <div className='flex items-center gap-x-4 py-7'>
        <Link href={'/'}><Home className='h-4 w-4' /></Link> / <Link href={'/tourist-place-riyadh'}>Seafood Cuisine</Link>
      </div>
      <div className='grid grid-cols-12 gap-x-5'>
        <div className="col-span-12  lg:col-span-4 lg:mr-6 mr-0">
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
          <h1 className='font-bold text-2xl text-[#00563B]'>Best tourist places in Riyadh</h1>
          <div className=' my-10' >
            <div className='flex justify-end'>
              <Image className='w-full h-[400px] object-fill' src={featuredImage} alt='seafood-cuisine' />
            </div>
            <span className='cursor-pointer text-sky-400'>source: <Link href={'https://pexels.com'} >pexel.com</Link></span>
          </div>


          <article>
            <div>
              <p className='py-4'>
                Riyadh, the captivating capital of Saudi Arabia, offers a captivating mix of modern wonders and historical treasures. From towering skyscrapers and bustling markets to ancient forts and peaceful parks, the city caters to diverse interests and promises an enriching experience. This comprehensive guide reveals the best tourist attractions in Riyadh, providing detailed information and practical tips to navigate your exploration.
              </p>

            </div>
            <div id='1. Al-Masmak Castle: Symbol of Resilience (Deira Region)' className='py-4'>

              <h2 className='text-xl font-bold pt-14 pb-2 text-[#00563B]'>1. Al-Masmak Castle: Symbol of Resilience (Deira Region)</h2>


              <div className='flex justify-end'>
                <Image className='w-full h-[400px] object-fill' width={400} height={400} src={'https://images.pexels.com/photos/1885720/pexels-photo-1885720.jpeg?auto=compress&cs=tinysrgb&w=600 '} alt='masmak fort' />
              </div>
              <p className='text-lg py-6'>
                Steeped in history, Masmak Castle stands as a symbol of Riyadh&apos;s resilience. Built from mud and mud brick in the 19th century, this fort played a pivotal role in the restoration of the city, marking an important turning point in the unification of Saudi Arabia. Explore the restored fort, delve into its fascinating history, and see stunning panoramic views of the city.
              </p>
              <ul className='list-disc'>
                <li className="px-2 arabic-li">
                  <span className='font-bold'>Location:</span>Deira District, Riyadh
                </li>

                <li className='arabic-li'><span className='font-bold'>How to get there:</span>Taxis, ride-sharing services, or public buses</li>

                <li className='arabic-li'><span className='font-bold'>Hotel price range:</span>Budget-friendly rates start at around $50 per night, while luxury hotels range from $200 and up. </li>

              </ul>
            </div>




            <div id='2. The Saudi National Museum: A Journey Through Time (Al-Bathaa Neighborhood)'>

              <h2 className='text-xl font-bold pt-14 pb-2 text-[#00563B]'>2. The Saudi National Museum: A Journey Through Time (Al-Bathaa Neighborhood)</h2>


              <div className='flex justify-end'>
                <Image className='w-full h-[400px] object-cover' width={400} height={400} src={'https://images.pexels.com/photos/4552367/pexels-photo-4552367.jpeg?auto=compress&cs=tinysrgb&w=600 '} alt='National Museum of Saudi Arabia' />
              </div>
              <p className='text-lg py-4'>Embark on a captivating journey through Saudi Arabia&apos;s rich history at the National Museum of Saudi Arabia. This extensive museum houses a variety of artifacts, showcasing the country&apos;s cultural heritage from prehistoric times to the present day. Explore interactive exhibits, view captivating historical documents, and gain a deeper understanding of the country&apos;s unique story.</p>


              <ul className='list-disc'>
                <li className="px-2 arabic-li">
                  <span className='font-bold'>Location:</span>Al Batha District, Riyadh
                </li>

                <li className='arabic-li'><span className='font-bold'>How to get there:</span>Metro, taxis, ride-sharing services or public buses</li>

                <li className='arabic-li'><span className='font-bold'>Hotel price range:</span>As in the Masmak Fort, accommodation options range from budget-friendly to luxury, catering to different traveler preferences. .</li>

              </ul>

            </div>
            <div id="3. Kingdom Center: Elevated Icon (Malaysia District)" className='py-12'>
              <h2 className='font-bold text-lg py-8 text-[#00563B]'>3. Kingdom Center: Elevated icon (Malaysia District)</h2>

              <div className='flex justify-end'>
                <Image className='w-full h-[400px] object-fill' width={400} height={400} src={'https://images.unsplash.com/photo-1663900108404-a05e8bf82cda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0 .3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2luZ2RvbSUyMHRvd2VyfGVufDB8fDB8fHww'} alt='kingdom tower' />
              </div>
              <p className='text-lg py-4'>
                See Riyadh&apos;s modern masterpieces at Kingdom Center, a stunning skyscraper complex that includes the third tallest tower in the world. You can climb to the observation deck for stunning panoramic views of the city, explore the luxury shopping mall, or enjoy a delicious meal at one of the on-site restaurants.
              </p>

              <ul className='list-disc'>
                <li className="px-2 arabic-li">
                  <span className='font-bold'>Location:</span>Malaysia District, Riyadh
                </li>

                <li className='arabic-li'><span className='font-bold'>How to get there:</span>Taxis, ride-sharing services, or public buses</li>

                <li className='arabic-li'><span className='font-bold'>Hotel price range:</span>The Kingdom Center itself includes a luxury hotel, the Four Seasons Hotel Riyadh at Kingdom Center, with prices ranging from $400 and up per night. Other hotels in the vicinity cater to different budgets.</li>

              </ul>
            </div>


            <div id="4. Al Murabba Palace: A glimpse into the royal history (Al Murabba District)">
              <h2 className='font-bold text-lg py-8 text-[#00563B]'>4. Al Murabba Palace: A glimpse into the royal history (Al Murabba District)</h2>
              <div className='flex justify-end'>
                <Image className='w-full h-[400px] object-fill' width={400} height={400} src={'https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&w=600 '} alt='Murabba Palace' />
              </div>
              <p className='pt-4'>
                Step back in time and explore the opulent Murabba Palace, a former royal residence that served as the main residence of the first king of Saudi Arabia, King Abdulaziz. Marvel at the architectural grandeur, delve into the palace&apos;s fascinating history, and watch displays showcasing the life and heritage of the Saudi royal family.
              </p>

              <ul className='list-disc'>
                <li className="px-2 arabic-li">
                  <span className='font-bold'>Location:</span>Al Murabba District, Riyadh
                </li>

                <li className='arabic-li'><span className='font-bold'>How to get there:</span>Taxis, ride-sharing services, or public buses</li>

                <li className='arabic-li'><span className='font-bold'>Hotel price range:</span>The Al Murabba area offers a variety of hotels that cater to different budgets and preferences.</li>

              </ul>
            </div>


            <div id="5. Edge of the World (Tuwaiq Cliff)">
              <h2 className='font-bold text-xl py-8 text-[#00563B]'>5. Edge of the World (Jarf Tuwaiq)</h2>
              <div className='flex justify-end'>
                <Image className='w-full h-[400px] object-cover' width={400} height={400} src={'https://images.pexels.com/photos/68358/pexels-photo-68358.jpeg?auto=compress&cs=tinysrgb&w=600 '} alt='Edge of the World (Tuwaiq Escarpment)' />
              </div>
              <p className='pt-4' >
                Venture beyond the city limits and experience the stunning natural wonder known as the Edge of the World. This dramatic cliff offers stunning panoramic views of the vast desert landscape, perfect for taking stunning photos and enjoying a unique outdoor adventure.
              </p>
              <ul className='list-disc'>
                <li className="px-2 arabic-li">
                  <span className='font-bold'>Location:</span>About 90 km northwest of Riyadh (Jarf Tuwaiq)
                </li>

                <li className='arabic-li'><span className='font-bold'>How to get there:</span>Joining a guided tour is the most convenient and safest option, as reaching the site requires off-road driving. </li>

                <li className='arabic-li'><span className='font-bold'>Hotel price range:</span>Day trips are common at this location, so hotel recommendations will not be applicable. However, the riad offers various accommodation options for your all-inclusive stay.</li>

              </ul>

            </div>
            <div id='Travel Tips:'>
              <h2 className='text-lg font-bold text-[#00563B]'>Travel tips:</h2>
              <ul className="list-disc">
                <li className='arabic-li'>The best time to visit Riyadh is during the cooler months, from November to March, when temperatures are more comfortable for exploring.</li>
                <li className='arabic-li'>While Arabic is the official language, English is widely spoken in tourist areas.</li>
                <li className='arabic-li'>It is recommended to dress modestly, especially when visiting religious sites.</li>
                <li className='arabic-li'>Consider purchasing the Riyadh Card for discounted access to many tourist attractions and free public transportation.</li>
              </ul>
            </div>

          </article>
        </div>
      </div>
      {
        <SimilarContent title='/tourist-place-riyadh' />
      }
    </BlogContainer>
  )
}

export default TouristPlacesRiyadh