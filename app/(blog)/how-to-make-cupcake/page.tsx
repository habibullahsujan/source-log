import React from 'react'
import BlogContainer from '../blogContainer'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import ContentTable from '@/app/(components)/contentTable'
import Image from 'next/image'
import SimilarContent from '@/app/(components)/similarContent'
import featureImage from '@/public/assets/cup-cake-feature-img.webp'
import classicVanillaCupcake from '@/public/assets/classic-vanila-cupcake.jpeg'
import chocolateCupcake from '@/public/assets/chocolate-cupcake.jpeg'
import lemonCupcake from '@/public/assets/lemon-cupcake.webp'
import caramelCupcake from '@/public/assets/caramel-cupcake.jpeg'

const HowToMakeCupcake = () => {
    const tableContents = [
        { title: '1. كب كيك الفانيليا الكلاسيكي' },
        { title: '2. كب كيك الشوكولاتة اللذيذ:' },
        { title: '3. كب كيك الليمون المنعش' },
        { title: '4.كب كيك الفانيليا المحلى بالكراميل المملح:' }
    ]
    return (
        <>
            <BlogContainer className='mx-2 md:mx-16 py-32 arabic-content-container'>
                <div className='flex items-center gap-x-1 py-7 text-lg'>
                    <Link href={'/'}><Home className='h-4 w-4' /></Link><ChevronRight /> <Link href={'/used-furniture'}>Used Furniture</Link>
                </div>
                <div className='grid grid-cols-12 gap-x-5'>
                    <div className="col-span-12  lg:col-span-4">
                        <details
                            className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-16 max-h-[80vh] overflow-hidden overflow-y-auto"
                            open
                        >
                            <summary className="text-lg font-semibold capitalize cursor-pointer">
                                Table of content
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
                    <div className='col-span-12 lg:col-span-8 text-right'>
                        <h1 className='font-bold text-4xl text-[#00563B]'>كيفية صنع كب كيك: دليل شامل لتحضير أشهى أنواع الكب كيك</h1>

                        <div className='my-10'>
                            <div className='flex justify-end'>
                                <Image className='w-full h-[400px] object-fill' src={featureImage} alt='كاب كيك' />
                            </div>
                            <span className='cursor-pointer text-sky-400'>source: <Link href={'https://pexels.com/'}>pexels.com</Link></span>
                        </div>
                        <article>
                            <p className='text-lg'>
                            </p>
                            <div className='py-6'>

                                <p className='py-4'>
                                    تُعَد كب كيك من أكثر الحلويات شهرةً وشعبيةً، وتعد وجبة خفيفة شهية تُحبها الجميع. وباستخدام هذا الدليل الشامل، ستتمكن من تحضير مجموعة متنوعة من الكب كيك بسهولة في منزلك. دعونا نكتشف معًا كيفية تحضير أشهى أنواع الكب كيك:
                                </p>
                            </div>

                            <div className='py-6' id='1. كب كيك الفانيليا الكلاسيكي'>
                                <div className='flex justify-end'>
                                    <Image className='w-full h-[400px] object-fill' src={classicVanillaCupcake} alt='كب كيك الفانيليا الكلاسيك' />
                                </div>
                                <h2 className='py-4 font-bold text-lg text-[#00563B]'>
                                    1. كب كيك الفانيليا الكلاسيكي
                                </h2>
                                <div>
                                    <h3>المكونات:
                                    </h3>
                                    <ul className='list-disc'>
                                        <li>دقيق متعدد الاستخدامات</li>
                                        <li>سكر</li>
                                        <li>زبدة غير مملحة
                                        </li>
                                        <li>بيض</li>
                                        <li>مستخلص الفانيليا
                                        </li>
                                        <li>بيكنج بودر
                                        </li>
                                        <li>حليب
                                        </li>
                                    </ul>
                                    <h3>طريقة التحضير:
                                    </h3>
                                    <ul className="list-disc">
                                        <li>اخلطي الزبدة والسكر حتى تصبح ناعمة.
                                        </li>
                                        <li>أضيفي البيض بواحد في كل مرة، ثم أضيفي مستخلص الفانيليا.
                                        </li>
                                        <li>أضيفي المكونات الجافة بالتناوب مع الحليب حتى تحصلي على خليط ناعم.
                                        </li>
                                        <li>قسمي الخليط في أكواب الكب كيك واخبزيها حتى تصبح ذهبية اللون.
                                        </li>
                                    </ul>

                                </div>

                            </div>
                            <div className='py-6' id='2. كب كيك الشوكولاتة اللذيذ:'>
                                <div className='flex justify-end'>
                                    <Image className='w-full h-[400px] object-fill' src={chocolateCupcake} alt='كب كيك الشوكولاتة' />
                                </div>

                                <h2 className='py-4 font-bold text-lg text-[#00563B]'>2. كب كيك الشوكولاتة اللذيذ:


                                </h2>
                                <div>
                                    <h3>المكونات:
                                    </h3>
                                    <ul className="list-disc">
                                        <li>دقيق متعدد الاستخدامات
                                        </li>
                                        <li>سكر</li>
                                        <li>مسحوق الكاكاو
                                        </li>
                                        <li>بيكنج بودر
                                        </li>
                                        <li>صودا الخبز
                                        </li>
                                        <li>ملح
                                        </li>
                                        <li>بيض</li>
                                        <li>زيت نباتي
                                        </li>
                                        <li>حليب اللبن
                                        </li>
                                    </ul>
                                    <h3>طريقة التحضير:
                                    </h3>
                                    <ul className="list-disc">
                                        <li>اخلطي المكونات الجافة في وعاء.
                                        </li>
                                        <li>في وعاء آخر، اخلطي البيض والزيت وحليب اللبن.
                                        </li>
                                        <li>أضيفي التدريجي للمكونات الجافة إلى المكونات الرطبة واخلطي حتى تحصلي على خليط ناعم.
                                        </li>
                                        <li>قسمي الخليط في أكواب الكب كيك واخبزيها حتى تنضج تمامًا.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='py-6' id='3. كب كيك الليمون المنعش'>
                                <div className='flex justify-end'>
                                    <Image className='w-full h-[400px] object-fill' src={lemonCupcake} alt='كب كيك الليمون' />
                                </div>
                                <h2 className='py-4 font-bold text-lg text-[#00563B]'>3. كب كيك الليمون المنعش:



                                </h2>
                                <div>
                                    <h3>المكونات:
                                    </h3>
                                    <ul className="list-disc">
                                        <li>دقيق متعدد الاستخدامات
                                        </li>
                                        <li>سكر
                                        </li>
                                        <li>زبدة غير مملحة
                                        </li>
                                        <li>بيض
                                        </li>
                                        <li>قشر الليمون
                                        </li>
                                        <li>عصير الليمون
                                        </li>
                                        <li>بيكنج بودر
                                        </li>
                                        <li>ملح
                                        </li>
                                    </ul>
                                    <h3>طريقة التحضير:
                                    </h3>
                                    <ul className="list-disc">
                                        <li>اخلطي الزبدة والسكر حتى تصبح ناعمة.
                                        </li>
                                        <li>أضيفي البيض بواحد في كل مرة، ثم أضيفي قشر الليمون وعصيره.
                                        </li>
                                        <li>أضيفي المكونات الجافة حتى تمتزج.
                                        </li>
                                        <li>قسمي الخليط في أكواب الكب كيك واخبزيها حتى تصبح ذهبية اللون.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='py-6' id='4.كب كيك الفانيليا المحلى بالكراميل المملح:'>
                                <div className='flex justify-end'>
                                    <Image className='w-full h-[400px] object-fill' src={caramelCupcake} alt='كب كيك محلى بالكراميل المملح' />
                                </div>
                                <h2 className='py-4 font-bold text-lg text-[#00563B]'>4.كب كيك الفانيليا المحلى بالكراميل المملح:
                                </h2>
                                <div>
                                    <h3>
                                        المكونات:

                                    </h3>
                                    <ul className='list-disc'>

                                        <li>دقيق متعدد الاستخدامات
                                        </li>
                                        <li>سكر بني
                                        </li>
                                        <li>زبدة غير مملحة
                                        </li>
                                        <li>بيض
                                        </li>
                                        <li>مستخلص الفانيليا
                                        </li>
                                        <li>بيكنج بودر
                                        </li>
                                        <li>صلصة الكراميل المملح
                                        </li>
                                    </ul>
                                    <h3>طريقة التحضير:
                                    </h3>
                                    <ul className='list-disc'>
                                        <li>
                                            اخلطي الزبدة والسكر البني حتى تصبح ناعمة.

                                        </li>
                                        <li>أضيفي البيض بواحد في كل مرة، ثم أضيفي مستخلص الفانيليا.
                                        </li>
                                        <li>أضيفي المكونات الجافة حتى تمتزج.
                                        </li>
                                        <li>ضعي الخليط في أكواب الكب كيك مع إضافة قليل من صلصة الكراميل المملح، ثم اخبزيها حتى تصبح ذهبية اللون.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                {
                    <SimilarContent title='/how-to-make-cupcake' />
                }
            </BlogContainer>
        </>
    )
}

export default HowToMakeCupcake