import React from 'react'
import BlogContainer from '../blogContainer'
import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'
import ContentTable from '@/app/(components)/contentTable'
import Image from 'next/image'
import { Metadata } from 'next'
import featuredImage from '@/public/assets/used-farniture-feature.jpeg';
import img1 from '@/public/assets/used-furniture.jpg'
import SimilarContent from '@/app/(components)/similarContent'


export const metadata: Metadata = {
  title: 'الأثاث المستعمل: اعثر على القطعة المثالية',
  description: 'شراء الأثاث المستعمل: اكتشف أفضل الأماكن لبيع وشراء الأثاث المستعمل في المملكة العربية السعودية. نصائح مفيدة للشراء بذكاء!'
}

const UsedFurniture = () => {

  const tableContents = [
    { title: 'قبل أن تبدأ رحلة البحث عن أثاث مستعمل، إليك بعض النصائح المفيدة:' },
    { title: "1. حراج: موقع شامل لبيع وشراء الأثاث المستعمل" },
    { title: "2. شركه المحترف: شراء وبيع الأثاث المستعمل في الرياض" },
    { title: "3. شركة الحمصاني للأثاث المستعمل: تشكيلة واسعة في الرياض" },
    { title: "4. مواقع التواصل الاجتماعي: كن صبورا وستجد مبتغاك!" },
    { title: 'نصائح إضافية لشراء أثاث مستعمل بنجاح:' },
    { title: 'إعادة إحياء أثاثك القديم: البيع أو التجديد' }
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
            <h1 className='font-bold text-4xl text-[#00563B]'>أثاث مستعمل في السعودية. دليل شامل لشراء أثاث مستعمل مرضي عبر الإنترنت.</h1>
            <div className='my-10'>
              <div className='flex justify-end'>
                <Image className='w-full h-[400px] object-fill' src={featuredImage} alt='اثاث مستعمل' />
              </div>
              <span className='cursor-pointer text-sky-400'>source: <Link href={'https://pexels.com/'}>pexels.com</Link></span>
            </div>
            <article>
              <p className='text-lg'>
              </p>
              <div className='py-6' id=''>
                <h2 className='py-4 font-bold text-lg text-[#00563B]'>تمنحك قطع الأثاث المستعمل حياة جديدة!
                </h2>

                <p className='py-4'>
                  يبحث الكثير منا عن أثاث أنيق وعصري لتزيين منازله وبأسعار مناسبة. ولحسن الحظ، يعد الأثاث المستعمل خيارًا رائعًا لتحقيق ذلك! يتيح لك شراء قطع فريدة بتكلفة أقل بكثير من سعرها الأصلي مع الحفاظ على البيئة من خلال إعادة استخدام الأثاث بدلاً من التخلص منه.
                </p>



              </div>

              <div className='py-6' id='قبل أن تبدأ رحلة البحث عن أثاث مستعمل، إليك بعض النصائح المفيدة:'>
                <h2 className='py-4 font-bold text-lg text-[#00563B]'>قبل أن تبدأ رحلة البحث عن أثاث مستعمل، إليك بعض النصائح المفيدة:</h2>
                <div>
                  <ul className='list-disc'>
                    <li><span className='font-bold'>ميزانيتك: </span>حدد المبلغ الذي ترغب في إنفاقه على الأثاث مسبقًا، و التزم به أثناء عملية الشراء.</li>
                    <li><span className='font-bold'>قياسات الأثاث: </span>قم بقياس المساحة المتوفرة لديك، وقياس الأثاث الذي ترغب بشرائه للتأكد من مناسبة الأحجام.</li>
                    <li><span className='font-bold'>فحص حالة الأثاث: </span> تأكد من سلامة ومتانة القطع المستعملة، وتفحص وجود خدوش أو تشققات أو تلف في الأقمشة.</li>
                    <li><span className='font-bold'>طرح الأسئلة: </span> لا تتردد في طرح الأسئلة على البائع حول حالة الأثاث وسبب بيعه.</li>
                  </ul>

                </div>
                <h3 className='py-4 font-bold text-[#00563B]'>أماكن مميزة لشراء الأثاث المستعمل في السعودية:
                </h3>
              </div>
              <div className='py-6' id='1. حراج: موقع شامل لبيع وشراء الأثاث المستعمل'>


                <div className='flex justify-end'>
                  <Image className='w-full h-[400px] object-fill' src={img1} alt='اثاث مستعمل' />
                </div>
                <h2 className='py-4 font-bold text-lg text-[#00563B]'>1. حراج: موقع شامل لبيع وشراء الأثاث المستعمل
                </h2>
                <div>
                  <p className='py-4'>يعد موقع حراج منصة إلكترونية رائدة في السعودية لبيع وشراء كافة المستلزمات، بما في ذلك الأثاث المستعمل. تجد فيه جميع أنواع الأثاث، من غرف النوم والسفرة والمكاتب إلى الأجهزة الكهربائية والمفروشات.  يمكنك فلترة البحث حسب المدينة والمنطقة والنوع والسعر لتضييق نطاق البحث والعثور على ما يناسبك.
                  </p>
                  <Link className='underline text-blue-700' href={'https://haraj.com.sa'} target='_blank'>الموقع الإلكتروني: </Link>
                  <p className='py-2'><span className='font-bold'>مميزات: </span>عروض متنوعة - سهولة البحث - التواصل مباشر مع البائع</p>
                  <p className='py-2'><span className='font-bold'>عيوب: </span>يتطلب الحذر والانتباه عند الشراء من أشخاص غير معروفين</p>
                </div>
              </div>

              <div className='py-6' id='2. شركه المحترف: شراء وبيع الأثاث المستعمل في الرياض'>
                <h2 className='py-4 font-bold text-lg text-[#00563B]'>2. شركه المحترف: شراء وبيع الأثاث المستعمل في الرياض

                </h2>
                <div>
                  <p className='py-4'>تتخصص شركة المحترف في مدينة الرياض بشراء وبيع الأثاث المستعمل. توفر خدمات نقل و فك وتركيب الأثاث، كما تمتلك فريقًا متخصصًا في صيانة وترميم القطع عند الحاجة.  تقدم الشركة أسعارًا مميزة للأثاث المستعمل، ويمكنك التواصل معهم لمعرفة العروض المتوفرة.</p>
                  <Link className='underline text-blue-700' href={'https://re-stoore.com/'} target='_blank'>الموقع الإلكتروني: </Link>
                  <p className='py-2'><span className='font-bold'>مميزات: </span>خدمات شراء وبيع و نقل - فريق صيانة وترميم</p>
                  <p className='py-2'><span className='font-bold'>عيوب: </span>مقرها الرئيسي في الرياض</p>
                </div>
              </div>
              <div className='py-6' id='3. شركة الحمصاني للأثاث المستعمل: تشكيلة واسعة في الرياض'>
                <h2 className='py-4 font-bold text-lg text-[#00563B]'>3. شركة الحمصاني للأثاث المستعمل: تشكيلة واسعة في الرياض
                </h2>
                <div>
                  <p className='py-4'>تقدم شركة الحمصاني في الرياض تشكيلة واسعة من الأثاث المستعمل بأسعار مناسبة. تشمل معروضاتهم غرف النوم والسفرة والمكاتب والمجالس وكذلك الأجهزة الكهربائية.  يمكنك زيارة معارضهم أو التواصل معهم للاطلاع على العروض الحالية.

                  </p>
                  <Link className='underline text-blue-700 py-1' href={'https://homsane.com/furniture'} target='_blank'>الموقع الإلكتروني: </Link>


                  <p className='py-2'><span className='font-bold'>مميزات: </span>تشكيلة واسعة - معارض في الرياض - اسعار مناسبة</p>

                </div>
              </div>
              <div className='py-6' id='4. مواقع التواصل الاجتماعي: كن صبورا وستجد مبتغاك!'>
                <h2 className='py-4 font-bold text-lg text-[#00563B]'>4. مواقع التواصل الاجتماعي: كن صبورا وستجد مبتغاك!
                </h2>
                <div>
                  <p className='py-4'>
                    لا تقتصر خيارات البحث على المواقع الإلكترونية، فبإمكانك الاستفادة من وسائل التواصل الاجتماعي مثل فيسبوك وتويتر. انضم إلى المجموعات التي تهتم ببيع وشراء الأثاث المستعمل، وتابع المنشورات بشكل منتظم.  قد تجد عروضًا مميزة لأثاث بحالة جيدة وبأسعار مغرية.
                  </p>



                  <p className='py-2'><span className='font-bold'>مميزات: </span>عروض متنوعة - إمكانية التفاوض المباش</p>

                </div>
                <div className='py-6' id='نصائح إضافية لشراء أثاث مستعمل بنجاح:'>
                  <h2 className='py-4 font-bold text-lg text-[#00563B]'>نصائح إضافية لشراء أثاث مستعمل بنجاح:
                  </h2>
                  <ul className='list-disc'>
                    <li><span className='font-bold'>تأكد من طريقة الدفع:  </span>اتفق على طريقة الدفع مع البائع مسبقًا، سواء نقدًا عند الاستلام أو عن طريق التحويل المصرفي. تجنب الدفع المقدم خاصة عند الشراء من أشخاص غير معروفين.</li>
                    <li><span className='font-bold'>خيارات النقل والتوصيل: </span> إسأل البائع عن إمكانية توصيل الأثاث إلى منزلك، وتحديد التكلفة الإضافية إن وجدت. إذا كنت ستقوم بنقل الأثاث بنفسك، تأكد من توفر وسائل النقل المناسبة لحجم ووزن القطع المشتراة.
                    </li>
                    <li><span className='font-bold'> احصل على ضمان عند الحاجة: </span> في حال الشراء من معارض الأثاث المستعمل التي تقدم خدمات صيانة وترميم، اسأل عن فترة الضمان المتوفرة على القطع التي تشتريها.
                    </li>
                    <li><span className='font-bold'>لا تتسرع بالشراء: </span> خذ وقتك للبحث والمقارنة بين العروض المختلفة. لا تتردد بزيارة المعارض أو التواصل مع أكثر من بائع قبل اتخاذ قرار الشراء.
                    </li>
                    <li><span className='font-bold'>استمتع بمنزلك الجديد! </span>بعد شراء الأثاث المستعمل وتنظيفه وتجهيزه، استمتع بتزيين منزلك وإضفاء لمساتك الخاصة عليه.
                    </li>
                  </ul>
                </div>
                <div className="py-6" id='إعادة إحياء أثاثك القديم: البيع أو التجديد'>
                  <h2 className='py-4 font-bold text-lg text-[#00563B]'>إعادة إحياء أثاثك القديم: البيع أو التجديد
                  </h2>
                  <p className='py-2'>لا تفكر دائمًا بالاستبدال عند الحاجة لتغيير ديكور منزلك.  يمكنك تجديد قطع الأثاث القديمة وإعادة إحيائها بطرق بسيطة وغير مكلفة:

                  </p>
                  <ul className='list-disc'>
                    <li><span className='font-bold'>أعد طلاء الأثاث: </span>اصبغ قطع الأثاث الخشبية بألوان جديدة لتغيير مظهرها بالكامل.</li>
                    <li><span className='font-bold'>استبدل الأقمشة والمفروشات: </span> قم بتغيير أغطية الوسائد والمفارش القديمة بأخرى جديدة تضيف لمسة عصرية لديكورك.</li>
                    <li><span className='font-bold'>أضف لمسات إبداعية: </span>استخدم ورق الجدران أو الملصقات لتزيين الأسطح الخشبية أو الزجاجية في الأثاث.</li>
                    <li><span className='font-bold'>استغل الإكسسوارات: </span>وزع الإكسسوارات والتحف الفنية على الرفوف وطاولات القهوة لإضفاء طابع خاص على الأثاث.</li>
                    <li><span className='font-bold'></span></li>
                  </ul>
                </div>
              </div>
              <p className='py-4'>
                إن شراء الأثاث المستعمل أو تجديد أثاثك القديم خيار ذكي وصديق للبيئة.  باتباع النصائح التي قدمناها، ستتمكن من تأثيث منزلك بأثاث أنيق ومميز دون الحاجة إلى إنفاق مبالغ فيه. فلماذا لا تبدأ رحلة البحث عن قطعة استثنائية تمنح منزلك رونقًا خاصًا؟


              </p>
            </article>
          </div>
        </div>
        {
          <SimilarContent title='/used-furniture' />
        }
      </BlogContainer>
    </>
  )
}

export default UsedFurniture