import React from 'react'
import BlogContainer from '../blogContainer'
import Link from 'next/link'
import { Home } from 'lucide-react'
import ContentTable from '@/app/(components)/contentTable'
import Image from 'next/image'
import { Metadata } from 'next';
import blogFeature from '@/public/assets/tea-blog-feature.jpeg'

export const metadata: Metadata = {
    title: "اصنع كوبًا مثاليًا من الشاي. دليل شامل",
    description: "اكتشف أسرار تحضير كوب الشاي المثالي من خلال دليلنا المتعمق. تعلم التقنيات والنصائح والحيل لرفع مهاراتك في صنع الشاي إلى آفاق جديدة."
};

const TeaComponent = () => {
    const tableContents = [

        { title: 'أهمية جودة المكونات' },
        { title: 'فن التخمير' },
        { title: "تعزيز تجربة الشاي الخاص بك" },
        {
            title: 'احتضان طقوس الشاي'
        }

    ]
    return (
        <>
            <BlogContainer className='text-right mx-2 md:mx-16 py-32'>
                <div className='flex items-center gap-x-4 py-7 text-lg'>
                    <Link href={'/'}><Home className='h-4 w-4' /></Link> / <Link href={'/perfect-tea'}>Perfect Tea</Link>
                </div>
                <div className='grid grid-cols-12 gap-x-5'>
                    <div className="col-span-12  lg:col-span-4">
                        <details
                            className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-16 max-h-[80vh] overflow-hidden overflow-y-auto"
                            open
                        >
                            <summary className="text-lg font-semibold capitalize cursor-pointer">
                                قائمة المحتويات
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
                        <h1 className='font-bold text-2xl text-[#00563B]'>اصنع كوبًا مثاليًا من الشاي. دليل شامل</h1>
                        <div className='my-10' id='أفضل شوكولاتة في العالم: دليل شامل'>
                            <div className='flex justify-end'>
                                <Image className='w-full h-[400px] object-fill' src={blogFeature} alt='cocoa bean' />
                            </div>
                            <span className='cursor-pointer text-sky-400'>source: <Link href={'https://pexels.com/'} >pexels.com</Link></span>
                        </div>
                        <article>
                            <p className=''>لقد تم تقدير الشاي لعدة قرون، ويتم الاحتفال به لدفئه المريح، ورائحته المهدئة، وعدد لا يحصى من الفوائد الصحية. من حفل الماتشا الياباني الأنيق إلى النكهات القوية للشاي الهندي، تنتشر ثقافة الشاي في جميع أنحاء العالم، وتأسر القلوب والعقول مع كل رشفة.</p>
                            <p className='py-4'>في هذا الدليل الشامل، نتعمق في فن تحضير كوب الشاي المثالي، ونستكشف التقنيات والنصائح والحيل لرفع مهاراتك في صنع الشاي إلى آفاق جديدة. سواء كنت من عشاق الشاي المخضرمين أو بدأت رحلتك للتو في عالم الشاي، انضم إلينا ونحن نكشف أسرار هذا المشروب المحبوب.</p>

                            <div className='py-4' id='أهمية جودة المكونات'>
                                <h2 className='text-xl font-bold pb-2 pt-4 text-[#00563B]'>أهمية جودة المكونات</h2>

                                <p className='text-lg py-4'>
                                    أساس أي كوب شاي رائع يكمن في جودة مكوناته. ابدأ بأوراق الشاي الطازجة عالية الجودة، والتي يتم الحصول عليها من موردين ذوي سمعة طيبة ومعروفين بالتزامهم بالتميز. سواء كنت تفضل النكهات الرقيقة للشاي الأخضر، أو النكهات الجريئة للشاي الأسود، أو التعقيدات الدقيقة للشاي الصيني الاسود، فاختر أنواع الشاي التي تتناسب مع ذوقك وتفضيلاتك.
                                </p>
                            </div>

                            <div className='py-4' id='فهم أصناف الشاي'>
                                <h2 className='font-bold  text-[#00563B] text-lg'>فهم أصناف الشاي</h2>
                                {/* <div className='flex justify-end'>
                <Image className='w-full h-[400px] object-fill' src={cocoaBean} alt='cocoa bean' />
              </div> */}
                                <p className='py-4'>يأتي الشاي في مجموعة مبهرة من الأصناف، كل منها يقدم خصائصه الفريدة ونكهته المميزة. تعرف على أنواع الشاي المختلفة، بما في ذلك الشاي الأسود والأخضر والأبيض والشاي الصيني الاسود والشاي العشبي. استكشف الفروق الدقيقة في كل صنف، بدءًا من الروائح الزهرية لشاي الياسمين الأخضر وحتى الثراء الترابي لنبات Pu-erh.</p>


                            </div>

                            <div className='py-4' id='فن التخمير'>
                                <h2 className='font-bold text-[#00563B] text-lg' >فن التخمير</h2>
                                <p className='py-4'>إن تحقيق المشروب المثالي يتطلب الدقة والصبر واندفاعة من الحدس. ابدأ باختيار الوعاء المناسب لشايك، سواء كان إبريق شاي كلاسيكي، أو غيوان أنيق، أو سلة مصفاة مريحة. قم بقياس أوراق الشاي بعناية، مع اتباع إرشادات التخمير الموصى بها لضمان استخلاص النكهة الأمثل.</p>
                                <p className='py-4'>
                                    انتبه إلى درجة حرارة الماء وأوقات النقع، لأن هذه العوامل يمكن أن تؤثر بشكل كبير على طعم ورائحة الشاي. قم بتجربة طرق ومعلمات تخمير مختلفة، واضبط المتغيرات لتناسب تفضيلاتك الشخصية.
                                </p>


                            </div>



                            <div className='py-4' id='تعزيز تجربة الشاي الخاص بك'>
                                <h2 className='font-bold text-[#00563B] text-lg'>تعزيز تجربة الشاي الخاص بك</h2>

                                <p className='py-4'>تمتد الرحلة إلى كوب الشاي المثالي إلى ما هو أبعد من عملية التخمير. ضع في اعتبارك الأجواء والمناطق المحيطة التي تستمتع فيها بالشاي، سواء كان ذلك ركنًا مريحًا في منزلك، أو بيئة حديقة هادئة، أو مقهى صاخبًا مليئًا بالضحك والمحادثة.

                                    قم بتجربة أزواج الشاي، واستكشف النكهات والقوام التكميلي الذي يعزز التجربة الحسية الشاملة. انغمس في الحلويات مثل المعجنات الرقيقة، أو كعكات الزبدة، أو الشوكولاتة اللذيذة، مما يخلق مجموعات نكهات متناغمة تُبهج الذوق.</p>

                            </div>

                            <div className='font-lg py-4' id='احتضان طقوس الشاي'>
                                <h2 className='font-bold text-lg'>احتضان طقوس الشاي</h2>

                                <p className='py-4'>الشاي هو أكثر من مجرد مشروب - إنه طقوس ولحظة من الوعي التام والتواصل في عالم سريع الخطى. استمتع بطقوس الشاي من جميع أنحاء العالم، بدءًا من الهدوء التأملي لحفل الشاي الياباني وحتى التجمعات المبهجة لشاي بعد الظهر الإنجليزي.

قم بإنشاء طقوس الشاي الخاصة بك، وغرس كل كوب بالنية والامتنان والتقدير لمتعة الحياة البسيطة. سواء كنت تتذوق الشاي بمفردك أو تشاركه مع أحبائك، دع كل رشفة تكون تذكيرًا لك بالتباطؤ والتنفس بعمق وتذوق اللحظة.</p>
                            </div>

                        </article>
                    </div>
                </div>
            </BlogContainer>
        </>
    )
}

export default TeaComponent