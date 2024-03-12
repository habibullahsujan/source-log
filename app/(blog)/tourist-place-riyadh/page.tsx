import React from 'react'
import BlogContainer from '../blogContainer';
import Link from 'next/link';
import { Home } from 'lucide-react';
import ContentTable from '@/app/(components)/contentTable';
import Image from 'next/image';
import { Metadata } from 'next';
import featuredImage from '@/public/assets/riyadh-img.jpg'



export const metadata: Metadata = {
  title: "افضل الاماكن السياحية في الرياض",
  description: "اكتشف الأفضل في الرياض! من المعالم التاريخية إلى الروائع الحديثة، اكتشف المعالم الجذابة ونصائح السفر لرحلتك. (104 حرفًا)"
};
const TouristPlacesRiyadh = () => {



  const tableContents = [
    { title: '1. قلعة المصمك: رمز الصمود (منطقة ديرة)' },
    { title: '2. المتحف الوطني السعودي: رحلة عبر الزمن (حي البطحاء)' },
    { title: "3. مركز المملكة: أيقونة مرتفعة (حي الماليزية)" },
    { title: "4. قصر المربع: لمحة عن التاريخ الملكي (حي المربع)"},
    { title:  "5. حافة العالم (جرف طويق)"},
   
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
          <h1 className='font-bold text-2xl text-[#00563B]'>افضل الاماكن السياحية في الرياض</h1>
          <div className=' my-10' >
            <div className='flex justify-end'>
              <Image className='w-full h-[400px] object-fill' src={featuredImage} alt='seafood-cuisine' />
            </div>
            <span className='cursor-pointer text-sky-400'>source: <Link href={'https://pexels.com'} >pexel.com</Link></span>
          </div>


          <article>
            <div>
              <p className='py-4'>
                تقدم الرياض، العاصمة الآسرة للمملكة العربية السعودية، مزيجًا آسرًا من العجائب الحديثة والكنوز التاريخية. من ناطحات السحاب الشاهقة والأسواق المزدحمة إلى الحصون القديمة والمتنزهات الهادئة، تلبي المدينة اهتمامات متنوعة وتعد بتجربة غنية. يكشف هذا الدليل الشامل عن أفضل الأماكن السياحية في الرياض، حيث يقدم معلومات مفصلة ونصائح عملية للتنقل في استكشافك.
              </p>

            </div>
            <div id='1. قلعة المصمك: رمز الصمود (منطقة ديرة)' className='py-4'>

              <h2 className='text-xl font-bold pt-14 pb-2 text-[#00563B]'>1. قلعة المصمك: رمز الصمود (منطقة ديرة)</h2>


              <div className='flex justify-end'>
                <Image className='w-full h-[400px] object-fill' src={'https://images.pexels.com/photos/1885720/pexels-photo-1885720.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='masmak fort' />
              </div>
              <p className='text-lg py-6'>
                تقف قلعة المصمك، الغارقة في التاريخ، كرمز لصمود الرياض. بُني هذا الحصن من الطين والطوب اللبن في القرن التاسع عشر، وقد لعب دورًا محوريًا في استعادة المدينة، مما يمثل نقطة تحول مهمة في توحيد المملكة العربية السعودية. استكشف الحصن المُعاد ترميمه، وتعمق في تاريخه الرائع، وشاهد المناظر البانورامية الخلابة للمدينة.
              </p>
              <ul className='list-disc'>
                <li className="px-2">
                  <span className='font-bold'>موقع:</span>حي ديرة، الرياض
                </li>

                <li><span className='font-bold'>كيفية الوصول الى هناك:</span>سيارات الأجرة أو خدمات مشاركة الركوب أو الحافلات العامة</li>

                <li><span className='font-bold'>نطاق سعر الفندق:</span>تبدأ الأسعار المناسبة للميزانية من حوالي 50 دولارًا في الليلة، بينما تتراوح أسعار الفنادق الفاخرة من 200 دولار فما فوق.</li>

              </ul>
            </div>




            <div id='2. المتحف الوطني السعودي: رحلة عبر الزمن (حي البطحاء)'>

              <h2 className='text-xl font-bold pt-14 pb-2 text-[#00563B]'>2. المتحف الوطني السعودي: رحلة عبر الزمن (حي البطحاء)</h2>


              <div className='flex justify-end'>
                <Image className='w-full h-[400px] object-cover' src={'https://images.pexels.com/photos/4552367/pexels-photo-4552367.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='National Museum of Saudi Arabia' />
              </div>
              <p className='text-lg py-4'>انطلق في رحلة آسرة عبر تاريخ المملكة العربية السعودية الغني في المتحف الوطني للمملكة العربية السعودية. يضم هذا المتحف الواسع مجموعة متنوعة من القطع الأثرية، التي تعرض التراث الثقافي للبلاد من عصور ما قبل التاريخ وحتى يومنا هذا. استكشف المعروضات التفاعلية، وشاهد الوثائق التاريخية الآسرة، واكتسب فهمًا أعمق للقصة الفريدة للبلاد.</p>


              <ul className='list-disc'>
                <li className="px-2">
                  <span className='font-bold'>موقع:</span>حي البطحاء، الرياض
                </li>

                <li><span className='font-bold'>كيفية الوصول الى هناك:</span>المترو أو سيارات الأجرة أو خدمات مشاركة الركوب أو الحافلات العامة</li>

                <li><span className='font-bold'>نطاق سعر الفندق:</span>كما هو الحال في قلعة المصمك، تتراوح خيارات أماكن الإقامة من الصديقة للميزانية إلى الفاخرة، والتي تلبي تفضيلات المسافرين المختلفة.</li>

              </ul>

            </div>
            <div id="3. مركز المملكة: أيقونة مرتفعة (حي الماليزية)" className='py-12'>
              <h2 className='font-bold text-lg py-8 text-[#00563B]'>3. مركز المملكة: أيقونة مرتفعة (حي الماليزية)</h2>

              <div className='flex justify-end'>
                <Image className='w-full h-[400px] object-fill' src={'https://images.unsplash.com/photo-1663900108404-a05e8bf82cda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2luZ2RvbSUyMHRvd2VyfGVufDB8fDB8fHww'} alt='kingdom tower' />
              </div>
              <p className='text-lg py-4'>
                شاهد روائع الرياض الحديثة في مركز المملكة، وهو مجمع ناطحات سحاب مذهل يضم ثالث أعلى برج في العالم. يمكنك الصعود إلى منصة المراقبة للاستمتاع بإطلالات بانورامية خلابة على المدينة، أو استكشاف مركز التسوق الفاخر، أو الاستمتاع بتناول وجبة شهية في أحد المطاعم الموجودة في الموقع.
              </p>

              <ul className='list-disc'>
                <li className="px-2">
                  <span className='font-bold'>موقع:</span>حي الماليزية، الرياض
                </li>

                <li><span className='font-bold'>كيفية الوصول الى هناك:</span>سيارات الأجرة أو خدمات مشاركة الركوب أو الحافلات العامة</li>

                <li><span className='font-bold'>نطاق سعر الفندق:</span>يضم مركز المملكة نفسه فندقًا فاخرًا، وهو فندق فورسيزونز الرياض في مركز المملكة، بأسعار تتراوح من 400 دولار وما فوق في الليلة الواحدة. الفنادق الأخرى في المنطقة المجاورة تلبي الميزانيات المختلفة.</li>

              </ul>
            </div>


            <div id="4. قصر المربع: لمحة عن التاريخ الملكي (حي المربع)">
              <h2 className='font-bold text-lg py-8 text-[#00563B]'>4. قصر المربع: لمحة عن التاريخ الملكي (حي المربع)</h2>
              <div className='flex justify-end'>
                <Image className='w-full h-[400px] object-fill' src={'https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='Murabba Palace' />
              </div>
              <p className='pt-4'>
                عد بالزمن إلى الوراء واستكشف قصر المربع الفخم، وهو المقر الملكي السابق الذي كان بمثابة المقر الرئيسي للملك الأول للمملكة العربية السعودية، الملك عبد العزيز. تعجب من العظمة المعمارية، وتعمق في تاريخ القصر الرائع، وشاهد العروض التي تعرض حياة وتراث العائلة المالكة السعودية.
              </p>

              <ul className='list-disc'>
                <li className="px-2">
                  <span className='font-bold'>موقع:</span>حي المربع، الرياض
                </li>

                <li><span className='font-bold'>كيفية الوصول الى هناك:</span>سيارات الأجرة أو خدمات مشاركة الركوب أو الحافلات العامة</li>

                <li><span className='font-bold'>نطاق سعر الفندق:</span>توفر منطقة المربع مجموعة متنوعة من الفنادق التي تلبي مختلف الميزانيات والتفضيلات.</li>

              </ul>
            </div>


            <div id="5. حافة العالم (جرف طويق)">
              <h2 className='font-bold text-xl py-8 text-[#00563B]'>5. حافة العالم (جرف طويق)</h2>
              <div className='flex justify-end'>
                <Image className='w-full h-[400px] object-cover' src={'https://images.pexels.com/photos/68358/pexels-photo-68358.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='Edge of the World (Tuwaiq Escarpment)' />
              </div>
              <p className='pt-4' >
                قم بالمغامرة خارج حدود المدينة واستمتع بتجربة الأعجوبة الطبيعية المذهلة المعروفة باسم حافة العالم. يوفر هذا الجرف الدراماتيكي إطلالات بانورامية مذهلة على المناظر الطبيعية الصحراوية الشاسعة، مما يجعله مثاليًا لالتقاط صور مذهلة والاستمتاع بمغامرة فريدة في الهواء الطلق.
              </p>
              <ul className='list-disc'>
                <li className="px-2">
                  <span className='font-bold'>موقع:</span>حوالي 90 كم شمال غرب الرياض (جرف طويق)
                </li>

                <li><span className='font-bold'>كيفية الوصول الى هناك:</span>يعد الانضمام إلى جولة إرشادية هو الخيار الأكثر ملاءمة وأمانًا، حيث يتطلب الوصول إلى الموقع القيادة على الطرق الوعرة.</li>

                <li><span className='font-bold'>نطاق سعر الفندق:</span>تعد الرحلات اليومية أمرًا شائعًا في هذا الموقع، لذا لن تكون توصيات الفنادق قابلة للتطبيق. ومع ذلك، توفر الرياض خيارات إقامة متنوعة لإقامتك الشاملة.</li>

              </ul>

            </div>
            <div id='نصائح سفر:'>
              <h2 className='text-lg font-bold text-[#00563B]'>نصائح سفر:</h2>
              <ul className="list-disc">
                <li>أفضل وقت لزيارة الرياض هو خلال الأشهر الباردة، من نوفمبر إلى مارس، عندما تكون درجات الحرارة أكثر راحة للاستكشاف.</li>
                <li>في حين أن اللغة العربية هي اللغة الرسمية، إلا أن اللغة الإنجليزية يتم التحدث بها على نطاق واسع في المناطق السياحية.</li>
                <li>يوصى بارتداء ملابس محتشمة، خاصة عند زيارة المواقع الدينية.</li>
                <li>فكر في شراء بطاقة الرياض للدخول بسعر مخفض إلى العديد من المعالم السياحية ووسائل النقل العام المجانية.</li>
              </ul>
            </div>

          </article>
        </div>
      </div>
    </BlogContainer>
  )
}

export default TouristPlacesRiyadh