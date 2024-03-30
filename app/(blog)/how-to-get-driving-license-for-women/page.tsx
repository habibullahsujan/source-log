import SimilarContent from '@/app/(components)/similarContent'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import BlogContainer from '../blogContainer'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import ContentTable from '@/app/(components)/contentTable';
import featureImage from '@/public/assets/how-to-get-driving-license-feature-img.jpeg'
import step2 from '@/public/assets/driving-license/step-2.png'
import step3 from '@/public/assets/driving-license/step-3.png'
import step4 from '@/public/assets/driving-license/step-4.png'
import step5 from '@/public/assets/driving-license/step-5.png'


export const metadata: Metadata = {
  title: 'كيفية حجز موعد رخصة القيادة للنساء في السعودية',
  description: 'ستوجه هذه المقالة الرجال والنساء الذين يرغبون في الحصول على رخصة قيادة في المملكة العربية السعودية، بما في ذلك القوانين والتكاليف وكيفية التقديم.',
}
const HowToGetDrivingLicenseWomen = () => {
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
            <h1 className='font-bold text-4xl text-[#00563B]'>كيفية حجز موعد للحصول على رخصة قيادة للنساء في المملكة العربية السعودية: القوانين، الرسوم، وإجراءات التقديم</h1>

            <div className='my-10'>
              <div className='flex justify-end'>
                <Image className='w-full h-[400px] object-fill' src={featureImage} alt='رجل يجلس في مقعد السائق' />
              </div>
              <span className='cursor-pointer text-sky-400'>source: <Link href={'https://pexels.com/'}>pexels.com</Link></span>
            </div>
            <article>
              <p className='text-lg'>
              </p>
              <div className='py-6'>

                <p className='py-4'>تمثل رخصة القيادة حرية واستقلالية مهمة للنساء في المملكة العربية السعودية بعد إلغاء الحظر على قيادة المرأة في عام 2018. ومع ذلك، هناك إجراءات محددة يجب على النساء اتباعها للحصول على رخصة القيادة. دعونا نلقي نظرة على كيفية حجز موعد والحصول على رخصة القيادة للنساء في المملكة العربية السعودية.


                </p>
              </div>

              <div className='py-6' id='1. كب كيك الفانيليا الكلاسيكي'>

                <h2 className='py-4 font-bold text-lg text-[#00563B]'>
                  القوانين والمتطلبات:
                </h2>
                <div>
                  <ul className='list-disc'>
                    <li>يجب على المتقدمة للحصول على رخصة القيادة أن تكون سعودية أو مقيمة مع إقامة سارية المفعول في المملكة العربية السعودية.
                    </li>
                    <li>يجب أن تكون المتقدمة للرخصة قد بلغت سن الرشد (18 عامًا أو أكثر).
                    </li>
                    <li>يجب على المتقدمة إجتياز اختبار القيادة والتي تتضمن اختبار النظرية والعملية.
                    </li>
                  </ul>



                </div>

              </div>
              <div className='py-6' id='2. كب كيك الشوكولاتة اللذيذ:'>


                <h2 className='py-4 font-bold text-lg text-[#00563B]'>الرسوم والتكاليف:

                </h2>
                <div>

                  <ul className="list-disc">
                    <li>تتوقف الرسوم على عدة عوامل بما في ذلك نوع الرخصة المطلوبة ومدة صلاحيتها.
                    </li>
                    <li>بالإضافة إلى الرسوم الحكومية، قد تتكلف الدورات التدريبية والاختبارات التي يتعين على المتقدمة إجراؤها تكاليف إضافية.
                    </li>
                  </ul>
                </div>
              </div>

              <div className='py-6' id='3. كب كيك الليمون المنعش'>

                <h2 className='py-4 font-bold text-lg text-[#00563B]'>كيفية التقديم:
                </h2>
                <div>
                  <h3>الحجز عبر الإنترنت:

                  </h3>
                  <ul className="list-disc">
                    <li>يمكن للنساء حجز موعد للحصول على رخصة القيادة من خلال موقع الإدارة العامة للمرور.
                    </li>
                    <li>يتعين على المتقدمة اختيار الموعد والمكان المناسبين لإجراء الاختبارات.
                    </li>
                  </ul>
                  <h3>التقديم في المركز المحلي:


                  </h3>
                  <ul className="list-disc">
                    <li>يمكن للمتقدمة زيارة أقرب مركز للمرور وتقديم طلب الحصول على رخصة القيادة.
                    </li>
                    <li>يجب على المتقدمة تقديم الوثائق المطلوبة ودفع الرسوم المقررة.
                    </li>
                  </ul>

                  <h3>إجراءات التقديم:

                  </h3>
                  <ul className="list-decimal">
                    <li>تعبئة استمارة طلب رخصة القيادة.
                    </li>
                    <li>تقديم الوثائق المطلوبة مثل بطاقة الهوية الوطنية والإقامة.
                    </li>
                    <li>دفع الرسوم المقررة لطلب رخصة القيادة.
                    </li>
                    <li>حجز موعد لاختبار القيادة.
                    </li>
                    <li>إجراء اختبار القيادة النظري والعملي.
                    </li>
                    <li>بعد نجاح المتقدمة في الاختبارات، ستحصل على رخصة القيادة السعودية.
                    </li>
                  </ul>

                </div>
              </div>

              <div className='py-6'>
                <h2 className='py-4 font-bold text-lg text-[#00563B]'>كيفية حجز موعد للحصول على رخصة القيادة للنساء في المملكة العربية السعودية:</h2>
                <h3 className='font-bold py-3'>من حساب أبشر:</h3>
                <ul className='list-decimal'>
                  <li>أولاً قم بالذهاب إلى موقع أبشر<Link className='underline text-blue-500' href={'https://www.absher.sa'} target='_blank'>Absher</Link></li>
                  <li>قم بتسجيل الدخول باستخدام اسم المستخدم والمعرف وكلمة المرور. </li>
                  <li>اضغط على الخدمات الإلكترونية، ثم انتقل إلى خدماتي، ثم اضغط على حركة المرور.</li>
                  <div className='flex justify-end my-3'>
                    <Image className='w-full h-[400px] object-fill' src={step2} alt="حجز موعد رخصة القيادة الخطوة 2" />
                  </div>
                  <li className='py-4'>انقر على إصدار رخصة القيادة</li>
                  <div className='flex justify-end '>
                    <Image className='w-full h-[400px] object-fill' src={step3} alt="حجز موعد رخصة القيادة الخطوة 3" />
                  </div>
                  <div className='flex justify-end'>
                    <Image className='w-full h-[400px] object-fill' src={step4} alt='حجز موعد رخصة القيادة الخطوة 4' />
                  </div>
                  <div className='flex justify-end'>
                    <Image className='w-full h-[400px] object-fill' src={step5} alt="حجز موعد للحصول على رخصة القيادة، الخطوة 5" />
                  </div>



                  <li>
                    حدد أحد هذين الخيارين
                    <li>
                      لتحديد موعد مدرسة دله لتعليم قيادة السيارات : اختر التدريب في مدارس تعليم القيادة: طلب تدريب مبتدئ في القيادة (30) ساعة – تدريب القيادة للمبتدئين (30) ساعة
                    </li>
                    <li>لحجز اختبار القيادة لتجنب جلسات التدريب الطويلة على القيادة، حدد التدريب في المدارس التعليمية: تقييم القيادة لمن يتمتعون بالمهارة (متقدم - متوسط - مبتدئ) - تقييم مهارات القيادة</li>
                  </li>
                  <li>اختر المنطقة</li>
                  <li>الآن قم باختيار فرع مدرسة تعليم القيادة والمدينة</li>
                  <li>حدد التاريخ والوقت</li>
                  <li>في الصفحة التالية، اقرأ تفاصيل الموعد ثم اضغط على &quot;تأكيد تفاصيل الموعد&quot;</li>
                  <li>اضغط على &quot;طباعة&quot; للحصول على نسخة ورقية من الموعد.</li>
                </ul>
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

export default HowToGetDrivingLicenseWomen