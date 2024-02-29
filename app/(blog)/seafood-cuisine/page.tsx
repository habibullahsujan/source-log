import ContentTable from '@/app/(components)/contentTable'
import { Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image1 from '@/public/assets/feature-blog-1.jpeg'
import japaneseCuisine from '@/public/assets/japanese-cuisine.jpeg';
import mediterraneanCuisine from '@/public/assets/mediterranean-cuisine.jpeg'
import southEastAsianCuisine from '@/public/assets/south-east-asian-cuisine.jpeg';
import peruSeafoodCuisine from '@/public/assets/peru-sea-food-cuisine.jpeg';
import italySeafoodCuisine from '@/public/assets/italy-seafood-cuisine.jpeg'
import BlogContainer from '../blogContainer'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: "كيفية تحضير أفضل المأكولات البحرية في العالم.",
    description: "تقدم سخاء المحيط كنزًا من المأكولات الشهية، وقد طورت الثقافات حول العالم طرقًا فريدة ولذيذة لعرض",
};
const SeafoodCuisine = () => {

    const tableContents = [
        { title: 'اليابان: سيمفونية النضارة' },
        { title: 'البحر الأبيض المتوسط: مزيج من النكهات' },
        { title: 'جنوب شرق آسيا: انفجار التوابل' },
        { title: 'بيرو: مزيج من التقاليد والابتكار' },
        { title: 'إيطاليا: احتفال بالبساطة' },
        { title: 'ما وراء الطبق: الأهمية الثقافية لمطبخ المأكولات البحرية' },
        { title: 'انطلق في رحلة الطهي الخاصة بك' },
    ]
    return (

        <BlogContainer className='text-right mx-2 md:mx-16 py-32'>
            <div className='flex items-center gap-x-4 py-7'>
                <Link href={'/'}><Home className='h-4 w-4' /></Link> / <Link href={'/seafood-cuisine'}>Seafood Cuisine</Link>
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
                    <h1 className='font-bold text-2xl text-[#00563B]'>كيفية تحضير أفضل المأكولات البحرية في العالم.</h1>
                    <div className=' my-10' >
                        <div className='flex justify-end'>
                            <Image className='w-full h-[400px] object-fill' src={image1} alt='seafood-cuisine' />
                        </div>
                        <span className='cursor-pointer text-sky-400'>source: <Link href={'https://pexels.com'} >pexel.com</Link></span>
                    </div>
                    <article>
                        <div>
                            <p className='text-lg'>
                                تقدم سخاء المحيط كنزًا من المأكولات الشهية، وقد طورت الثقافات حول العالم طرقًا فريدة ولذيذة لعرض  <span className='font-bold'>أفضل المأكولات البحرية</span>. من المهارة الفنية الدقيقة للسوشي الياباني إلى التوابل الجريئة للطواجن المغربية، تحتل المأكولات البحرية مركز الصدارة في عدد لا يحصى من تقاليد الطهي، مما يثير حاسة التذوق ويثري التجارب الثقافية.
                            </p>
                            <p className='text-lg'>
                                يتعمق هذا الدليل الشامل في أعماق العالم <span className='font-bold'>أفضل المأكولات البحرية</span>
                                والكشف عن خصائصها الفريدة وأطباقها المميزة والقصص الرائعة التي تقف وراءها. لذا، استعد للشروع في رحلة لذيذة حول العالم!
                            </p>
                        </div>
                        <div id='اليابان: سيمفونية النضارة' className='py-4'>

                            <h2 className='text-xl font-bold pt-14 pb-2 text-[#00563B]'>1. اليابان: سيمفونية النضارة</h2>
                            <div className='flex justify-end'>
                                <Image className='w-full h-[400px] object-fill' src={japaneseCuisine} alt='seafood-cuisine' />
                            </div>
                            <p className='text-lg py-6'>
                                يشتهر المطبخ الياباني بتركيزه على النضارة والموسمية والعرض الدقيق. تلعب المأكولات البحرية دورًا مركزيًا، حيث تعرض أطباق مثل السوشي والساشيمي النكهة المتأصلة وجمال خيرات المحيط. شرائح السمك النيئة بدقة، مع الأرز بالخل والطبقة الأخرى، تخلق سيمفونية من القوام والأذواق في كل قضمة.
                            </p>
                            <h3 className='text-lg font-semibold py-2 text-[#00563B]'>الأطباق المميزة:</h3>
                            <ul className='list-disc'>
                                <li className="px-2">
                                    <span className='font-bold'>سوشي: </span>
                                    شرائح رقيقة من السمك النيئ تقدم على أرز بالخل، ومزينة بطبقة مختلفة مثل الأعشاب البحرية والوسابي والزنجبيل المخلل.
                                </li>
                                <li><span className='font-bold'>ساشيمي:</span>يتم تقديم شرائح الأسماك النيئة الرقيقة غالبًا مع صلصة الصويا والوسابي، مما يسلط الضوء على الحلاوة الطبيعية والملمس للمأكولات البحرية.</li>
                                <li><span className='font-bold'>تمبورا:</span>المأكولات البحرية والخضروات المقلية والمقلية، تقدم تباينًا مبهجًا في القوام.</li>
                                <li><span className='font-bold'>حساء ميسو:</span>مرق مريح بنكهة معجون الميسو، وغالبًا ما يحتوي على المأكولات البحرية مثل التوفو أو المحار.</li>
                            </ul>
                        </div>
                        <div id='البحر الأبيض المتوسط: مزيج من النكهات'>
                            <h2 className='text-xl font-bold pt-14 pb-2 text-[#00563B]'>2. البحر الأبيض المتوسط: مزيج من النكهات</h2>
                            <div className='flex justify-end'>
                                <Image className='w-full h-[400px] object-cover' src={mediterraneanCuisine} alt='mediterranean-cuisine' />
                            </div>
                            <p className='text-lg py-4'>لقد ولدت الثقافات النابضة بالحياة في منطقة البحر الأبيض المتوسط نسيجًا طهيًا غنيًا بالنكهات النابضة بالحياة والمكونات الطازجة. <span className='font-bold'>مأكولات بحرية </span>هو عنصر أساسي، ويظهر بشكل بارز في الأطباق التي تجمع بين بعضها البعض  <span className='font-bold'>
                                الأعشاب العطرية والفواكه الحمضية والتوابل القوية </span>من أطباق المأكولات البحرية في اليونان إلى الباييلا في إسبانيا، يقدم البحر الأبيض المتوسط مشهدًا من أحاسيس التذوق لمحبي المأكولات البحرية.</p>
                            <h3 className="text-lg font-semibold py-2 text-[#00563B]">
                                الأطباق المميزة:
                            </h3>
                            <ul className='list-disc text-lg'>
                                <li className="px-2">
                                    <span className='font-bold'>الباييلا:</span>طبق أرز إسباني يضم المأكولات البحرية مثل الجمبري وبلح البحر والكاليماري، مع نكهة الزعفران والبابريكا والتوابل الأخرى.
                                </li>
                                <li className="px-2">
                                    <span className='font-bold'>حساء:</span>
                                    يخنة سمك فرنسية مصدرها بروفانس، مليئة بمجموعة متنوعة من المأكولات البحرية ومطهوة في مرق لذيذ.
                                </li>
                                <li className="px-2">
                                    <span className='font-bold'>أكوا بيتزا:</span>
                                    يخنة سمك إيطالي مع مرق خفيف من الطماطم متبل بالأعشاب والثوم، يسلط الضوء على النكهات اللذيذة للمأكولات البحرية.
                                </li>
                                <li className="px-2">
                                    <span className='font-bold'>سيوبينو:</span>
                                    طبق خاص من سان فرانسيسكو مستوحى من يخنة السمك الإيطالية، ويتميز بوفرة من المأكولات البحرية في مرق غني بالطماطم.
                                </li>
                            </ul>
                        </div>
                        <div id="جنوب شرق آسيا: انفجار التوابل" className='py-12'>
                            <h2 className='font-bold text-lg py-8 text-[#00563B]'>3. جنوب شرق آسيا: انفجار التوابل</h2>
                            <div className='flex justify-end'>
                                <Image className='w-full h-[400px] object-fill' src={southEastAsianCuisine} alt='south-east-asian-cuisine' />
                            </div>
                            <p className='text-lg py-4'>ال<span className='font-bold'>نكهات جريئة ونابضة بالحياة </span>من مطبخ جنوب شرق آسيا هي وليمة للحواس. <span className='font-bold'>مأكولات بحرية </span>
                                يأخذ مركز الصدارة، وغالبًا ما يتم طهيه
                                <span className='font-bold' >الكاري العطري، المقلي مع الصلصات اللاذعة، أو  المشوي على الفحم. </span>من الكاري العطري في تايلاند إلى البطاطس المقلية الحارة في فيتنام، تقدم تقاليد الطهي في جنوب شرق آسيا سيمفونية فريدة ولذيذة لعشاق المأكولات البحرية. </p>
                            <h3 className='text-lg font-semibold pt-4 text-[#00563B]'>الأطباق المميزة:</h3>
                            <ul className='list-disc'>
                                <li className="px-2">
                                    <span className='font-bold'>توم يم غونغ: </span>
                                    حساء تايلاندي عطري وحار مع الروبيان وعشب الليمون وأوراق الليمون الكافير والخولنجان، يقدم تفاعلًا معقدًا من النكهات والقوام.
                                </li>
                                <li className="px-2">
                                    <span className='font-bold'>سيفيتشي: </span>
                                    طبق نشأ في بيرو، ويضم الأسماك النيئة المتبلة في عصائر الحمضيات ومتبلة بالفلفل الحار والبصل والكزبرة، مما يخلق تجربة منعشة ولذيذة.
                                </li>
                                <li className="px-2">
                                    <span className='font-bold'>الوسادة التايلاندية: </span>
                                    طبق تايلاندي شهير يضم نودلز الأرز والخضروات والبيض، وغالبًا، المأكولات البحرية مثل الجمبري أو الحبار، متبلة بصلصة التمر الهندي الفريدة.
                                </li>
                            </ul>
                        </div>
                        <div id="بيرو: مزيج من التقاليد والابتكار">
                            <h2 className='font-bold text-lg py-8 text-[#00563B]'>4. بيرو: مزيج من التقاليد والابتكار</h2>
                            <div className='flex justify-end'>
                                <Image className='w-full h-[400px] object-fill' src={peruSeafoodCuisine} alt='peru-seafood-cuisine' />
                            </div>
                            <p className='pt-4'>برز المطبخ البيروفي كنجم عالمي في عالم الطهي، حيث اشتهر بطعمه الرائع<span className='font-bold'>أطباق مبتكرة ولذيذة. مأكولات بحرية</span>يلعب دورًا مركزيًا، مستوحى من التقاليد القديمة ويدمج التقنيات الحديثة. يستخدم الطهاة البيروفيون مكونات فريدة مثل <span className='font-bold'>آجي أماريلو الفلفل الحار، وفاكهة لوكوما، والكينوا،</span>إنشاء أطباق مألوفة وغير متوقعة.</p>
                            <h3 className='text-lg font-semibold pt-4 text-[#00563B]'>الأطباق المميزة:</h3>
                            <ul className='list-disc'>
                                <li className="px-2">
                                    <span className='font-bold'>سيفيتشي:</span>
                                    طبق وطني في بيرو، يتميز بالأسماك النيئة المتبلة في عصائر الحمضيات، وفلفل آجي أماريلو الحار، والعديد من المكونات الأخرى، مما يؤدي إلى تجربة نابضة بالحياة ولذيذة.
                                </li>
                                <li className="px-2">
                                    <span className='font-bold'>لومو سالتادو: </span>
                                    طبق لحم بقري مقلي مع الخضار والمأكولات البحرية في كثير من الأحيان مثل الجمبري، متبل بصلصة الصويا والخل والتوابل، مما يعكس مزيجًا من التأثيرات البيروفية والصينية.
                                </li>
                                <li className="px-2">
                                    <span className='font-bold'>آجي دي جالينا:</span>
                                    يخنة دجاج كريمية بنكهة فلفل أجي أماريلو الحار، وأحيانًا تتميز بالمأكولات البحرية مثل الإسكالوب أو بلح البحر، مما يعرض تنوع المطبخ البيروفي.
                                </li>
                            </ul>
                        </div>
                        <div id="إيطاليا: احتفال بالبساطة">
                            <h2 className='font-bold text-xl py-8 text-[#00563B]'>5. إيطاليا: احتفال بالبساطة</h2>
                            <div className='flex justify-end'>
                                <Image className='w-full h-[400px] object-cover' src={italySeafoodCuisine} alt='mediterranean-cuisine' />
                            </div>
                            <p className='pt-4' >المطبخ الإيطالي معروف بتركيزه على<span className='font-bold'>مكونات طازجة وعالية الجودة</span>و<span className='font-bold'>تحضيرات بسيطة ولكنها لذيذة. مأكولات بحرية </span>يتميز بشكل بارز في المناطق الساحلية، وغالبًا ما يتم طهيه مع الثوم وزيت الزيتون والليمون والأعشاب الطازجة. تعرض أطباق مثل فروتي دي ماري ومعكرونة ألي فونجول النكهات المتأصلة للبحر، وتسلط الضوء على الفلسفة الإيطالية المتمثلة في &quot;الأقل هو الأكثر&quot;.</p>
                            <h3 className='text-lg font-semibold pt-4 text-[#00563B]'>الأطباق المميزة:</h3>
                            <ul className='list-disc'>
                                <li className="px-2">
                                    <span className='font-bold'>فروتي دي ماري:</span>
                                    طبق من المأكولات البحرية يضم أنواعًا مختلفة من المحار، غالبًا ما يتم طهيه في صلصة طماطم خفيفة أو مشوي ببساطة مع الثوم والأعشاب.
                                </li>
                                <li className="px-2">
                                    <span className='font-bold'>معكرونة alle فونجولي:</span>
                                    معكرونة مع المحار، مطبوخة في صلصة بسيطة من زيت الزيتون والثوم والنبيذ الأبيض والبقدونس الطازج، مما يسمح للنكهات الطبيعية للمحار بالتألق.
                                </li>
                                <li className="px-2">
                                    <span className='font-bold'>أكوا بازا (النسخة الإيطالية):</span>
                                    على غرار نسخة البحر الأبيض المتوسط، يتميز هذا الطبق بسمك أبيض مطهو في مرق خفيف من الطماطم مع الثوم والأعشاب وأحيانًا الزيتون، مما يوفر تجربة مريحة ولذيذة.
                                </li>
                            </ul>
                        </div>
                        <div id='ما وراء الطبق: الأهمية الثقافية لمطبخ المأكولات البحرية'>
                            <h2 className='text-lg font-bold text-[#00563B]'>ما وراء الطبق: الأهمية الثقافية لمطبخ المأكولات البحرية</h2>
                            <p><span className='font-bold'>المأكولات البحرية</span>يتجاوز مجرد المسرات الطهي؛ فهو منسوج في النسيج الثقافي لعدد لا يحصى من المجتمعات حول العالم. من ممارسات الصيد التقليدية للمجتمعات الساحلية إلى الأعياد الاحتفالية التي تتميز بالمأكولات البحرية، تعكس تقاليد الطهي هذه ارتباطًا عميقًا بالبحر وخيراته.</p>
                        </div>
                        <div className='py-6'>
                            <h2 className='text-lg font-bold text-[#00563B]' >الممارسات المستدامة: ضمان مستقبل المأكولات البحرية</h2>
                            <p>بينما نحتفل بال <span className='font-bold'>افضل المأكولات البحرية,</span>ومن الأهمية بمكان الاعتراف بأهمية <span className='font-bold'>ممارسات الصيد المستدامة</span>ويشكل الصيد الجائر والتدهور البيئي تهديدات كبيرة للنظم الإيكولوجية البحرية. ومن خلال اتخاذ خيارات واعية بشأن المأكولات البحرية التي نستهلكها ودعم ممارسات الصيد المستدامة، يمكننا ضمان قدرة الأجيال القادمة على الاستمرار في الاستمتاع بخيرات المحيط لسنوات قادمة.</p>
                        </div>
                        <div id='انطلق في رحلة الطهي الخاصة بك' className='py-6'>
                            <h2 className='text-lg font-bold text-[#00563B]'>انطلق في رحلة الطهي الخاصة بك:</h2>
                            <p>هذا الاستكشاف للعالم <span className='font-bold'>أفضل المأكولات البحرية</span>هي مجرد نقطة انطلاق. تقدم كل منطقة عددًا كبيرًا من الأطباق الفريدة وتجارب الطهي التي تنتظر من يكتشفها. لذلك، استمتع بالمغامرة، واستكشف أسواق المأكولات البحرية المحلية، وجرب وصفات جديدة، واصنع ذكرياتك اللذيذة مع خيرات البحر!</p>
                        </div>
                    </article>
                </div>
            </div>
        </BlogContainer>
    )
}

export default SeafoodCuisine