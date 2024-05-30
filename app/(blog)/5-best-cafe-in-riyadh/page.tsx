import React from 'react'
import BlogContainer from '../blogContainer'
import Link from 'next/link'
import { Home } from 'lucide-react'
import SimilarContent from '@/app/(components)/similarContent'
import Image from 'next/image'
import ContentTable from '@/app/(components)/contentTable'
import featuredImg from '@/public/assets/best-coffee-feature.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "أفضل 5 مقاهي في الرياض: تجارب لا تُنسى",
    description: "اكتشف أفضل 5 مقاهي في الرياض تقدم تجارب فريدة وأسعار مناسبة. استمتع بأجواء رائعة ومشروبات لذيذة!",
};
const BestCoffeeShops = () => {


    const tableContents = [
        { title: "1.مقهى القهوة السوداء" },
        { title: "2. مقهى الشاي الأخضر" },
        { title: "3. مقهى الكابتشينو الذهبي" },
        { title: "4. مقهى القهوة المختصة" },
        { title: "5. 1/2 million cafe" }
    ]
    return (
        <>
            <BlogContainer className=' mx-2 md:mx-16 py-32'>
                <div className='flex items-center gap-x-4 py-7 text-lg'>
                    <Link href={'/'}><Home className='h-4 w-4' /></Link> / <Link href={'/5-best-cafe-in-riyadh'}>أفضل المقاهي</Link>
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
                        <h1 className='font-bold text-4xl text-[#00563B]'>أفضل 5 مقاهي في الرياض: اكتشف واستمتع بأجواء فريدة من نوعها.</h1>
                        <div className='my-10' id='The Best Chocolate in the World: A Comprehensive Guide'>
                            <div className='flex justify-end'>
                                <Image className='w-full object-fill' src={featuredImg} alt='coffee is falling down from machine to cup' />
                            </div>
                            <span className='cursor-pointer text-sky-400'>source: <Link href={'https://unsplash.com/'}>pexels.com</Link></span>
                        </div>
                        <article>
                            <p className='text-lg'>مع وجود مجموعة متنوعة من المقاهي في الرياض، يمكن أن يكون من الصعب اختيار الأفضل بينها. لذلك، قمنا بتجميع قائمة بأفضل خمسة مقاهي في الرياض التي تقدم تجارب فريدة وأجواء رائعة للزوار:</p>
                            <div className='py-4' id='1.مقهى القهوة السوداء'>
                                <h2 className='font-bold text-4xl py-8'>
                                1. أشهر مقهى في الرياض هو Black Coffee Cafe.
                                </h2>
                                <div className=' my-8'>
                                    <iframe className='w-full h-[400px] object-cover' src="https://www.instagram.com/blackcafe.ksa/embed/"></iframe>
                                </div>
                                <ul className='list-disc'>
                                    <li>الموقع: حي العليا
                                    </li>
                                    <li>السعر: تقديري SAR 20 - SAR 50
                                    </li>
                                    <li>التقييم: 4.5/5
                                    </li>
                                </ul>
                            </div>
                            <div className='py-4' id=' 2. مقهى الشاي الأخضر'>
                                <h2 className='font-bold text-4xl py-8'>
                                2. مقهى الشاي الأخضر هو ثاني أشهر مقهى في الرياض.

                                </h2>
                                <div className="my-8">
                                    <iframe className='w-full h-[400px] object-cover' src="https://www.instagram.com/green.teacafe/embed/"></iframe>
                                </div>

                                <ul className='list-disc'>

                                    <li>الموقع: حي النخيل

                                    </li>
                                    <li>السعر: تقديري SAR 25 - SAR 60

                                    </li>
                                    <li>التقييم: 4.7/5
                                    </li>
                                </ul>
                            </div>

                            <div className='py-4' id='3. مقهى الكابتشينو الذهبي'>
                                <h2 className='font-bold text-4xl py-8'>3. قهوة اسبريسو مغطاة بالذهب يعد مقهى Green Tea Cafe ثالث أفضل مقهى في الرياض.

                                </h2>
                                <div className=' my-8'>
                                    <iframe className='w-full h-[400px] object-cover' src="https://www.instagram.com/goldencafe.sa/embed/"></iframe>
                                </div>
                                <ul className='list-disc'>

                                    <li>الموقع: حي الربوة

                                    </li>
                                    <li>السعر: تقديري SAR 30 - SAR 70

                                    </li>
                                    <li>التقييم: 4.6/5

                                    </li>
                                </ul>
                            </div>
                            <div className='py-4' id='4. مقهى القهوة المختصة'>
                                <h2 className='font-bold text-4xl py-8'>4. المقهى التخصصي حصل على المركز الرابع كأفضل مقهى في الرياض
                                </h2>
                                <div className='flex justify-end'>
                                    <Image className='w-full object-fill' src={featuredImg} alt='coffee is falling down from machine to cup' />
                                </div>

                                <ul className='list-disc'>

                                    <li>الموقع: حي السليمانية

                                    </li>
                                    <li>السعر: تقديري SAR 35 - SAR 80

                                    </li>
                                    <li>التقييم: 4.8/5

                                    </li>
                                </ul>
                            </div>
                            <div className='py-4' id='5. 1/2 million cafe'>
                                <h2 className='font-bold text-4xl py-8'>5. 1/2 million café خامس أفضل مقهى في الرياض
                                </h2>
                                <div className="my-8">

                                    <iframe className='w-full h-[400px] object-cover' src="https://www.instagram.com/halfmillion_sa/embed/"></iframe>
                                </div>

                                <ul className='list-disc'>

                                    <li>لديها مواقع مختلفة.
                                    </li>
                                    <li>السعر: تقديري SAR 20 - SAR 50
                                    </li>
                                    <li>التقييم: 4.5/5
                                    </li>
                                </ul>
                            </div>
                            <p>استمتع بتجربة فريدة في أحد هذه المقاهي الرائعة واستمتع بأجواء مريحة ومشروبات شهية!
                            </p>
                        </article>
                    </div>
                </div>
                <div>
                    {
                        <SimilarContent title='/5-best-cafe-in-riyadh' />
                    }
                </div>
            </BlogContainer>
        </>
    )
}

export default BestCoffeeShops