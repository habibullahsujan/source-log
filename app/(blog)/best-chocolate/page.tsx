import React from 'react'
import BlogContainer from '../blogContainer'
import { Metadata } from 'next';
import { Home } from 'lucide-react';
import Link from 'next/link';
import ContentTable from '@/app/(components)/contentTable';
import Image from 'next/image';
import image1 from '@/public/assets/history-of-chocolate.jpeg'



export const metadata: Metadata = {
  title: "فك رموز اللذة: دليل شامل لأفضل أنواع الشوكولاتة في العالم",
  description: "",
};
const HistoryOfChocolate = () => {

  const tableContents = [
    { title: 'إرث متجذر في الابتكار' },


  ]
  return (
    <BlogContainer className='text-right mx-2 md:mx-16 py-32'>
      <div className='flex items-center gap-x-4 py-7'>
        <Link href={'/'}><Home className='h-4 w-4' /></Link> / <Link href={'/best-chocolate'}>Best Chocolate</Link>
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
          <h1 className='font-bold text-2xl'> فك رموز اللذة: دليل شامل لأفضل أنواع الشوكولاتة في العالم </h1>
          <div className=' my-10' >
            <div className='flex justify-end'>
              <Image className='' src={image1} alt="hershey's chocolate" width={500} height={200} />


            </div>
            <span className='cursor-pointer text-sky-400'>source: <Link href={'https://unsplash.com/'} >unsplash.com</Link></span>
          </div>
          <article>
            <p className='text-lg'>الشوكولاتة، الكلمة نفسها تثير سلسلة من الأحاسيس المبهجة - قوام كريمي، وروائح غنية، ووعد بالانغماس الخالص. لكن هذه المعالجة المنتشرة في كل مكان تفتخر بتاريخ غني ومعقد مثل نكهتها. من أصولها القديمة إلى الأصناف المتنوعة التي تزين أرفف المتاجر اليوم، أسرت الشوكولاتة الثقافات في جميع أنحاء العالم لآلاف السنين. يتعمق هذا الدليل الشامل في عالم الشوكولاتة الرائع، ويستكشف تاريخها، وفن صناعة قالب الشوكولاتة المثالي، والمناظر الطبيعية المتنوعة لشركات الشوكولاتة، والمكونات الرئيسية التي تجعل هذه الحلوى المحبوبة تنبض بالحياة.</p>

            <div>
              <h2 className='text-xl font-bold pb-2 pt-4'>رحلة عبر الزمن: التاريخ الساحر للشوكولاتة</h2>
              <p className='text-lg py-4'>تتكشف قصة الشوكولاتة في أمريكا الوسطى، حيث نشأت <Link href={'https://en.wikipedia.org/wiki/Cocoa_bean'} className='font-bold hover:underline'>حبوب الكاكاو</Link>، أساس الشوكولاتة. ويعتقد أن حضارة الأولمك (1800-400 قبل الميلاد) هي أول من استهلك الشوكولاتة، واستخدمها في المشروبات الاحتفالية المملوءة بالماء والفلفل الحار. قام المايا (2000 قبل الميلاد - 900 م) بتحسين استخدام <Link href={'https://en.wikipedia.org/wiki/Cocoa_bean'}>حبوب الكاكاو، </Link> وطحنها إلى عجينة ودمجها في المشروبات والعروض الطقسية.</p>
              <p className='text-lg py-2'>لننتقل سريعًا إلى الأزتيك (1300-1521 م)، الذين كانوا يقدسون الشوكولاتة باعتبارها طعامًا للآلهة. لقد تناولوا مشروبًا مريرًا ورغويًا يسمى &quot;xocolatl&quot;، مصنوع من حبوب الكاكاو المطحونة ودقيق الذرة والفلفل الحار والتوابل. يُعتقد أن هذا المشروب القوي يمتلك خصائص منشطة وكان مخصصًا للنبلاء والمحاربين.</p>
              <p className='text-lg py-2'>كان وصول الغزاة الإسبان في القرن السادس عشر بمثابة نقطة تحول في تاريخ الشوكولاتة. لقد اعتمدوا مشروب الأزتك، مضيفين السكر وغيروا الوصفة لتناسب أذواقهم. اكتسبت هذه النسخة الأكثر حلاوة من الشوكولاتة شعبية في أوروبا، وتطورت في النهاية إلى ألواح الشوكولاتة الصلبة التي نعرفها ونحبها اليوم.</p>
            </div>

            <div>
              <h2 className='font-bold text-xl text-[#00563B]'>فن صياغة الشوكولاتة: من الفول إلى البار</h2>
              <p className='py-2 text-lg'>إن تحويل حبة الكاكاو المتواضعة إلى لوح شوكولاتة منحل ينطوي على عملية دقيقة تتطلب الخبرة والاهتمام الدقيق بالتفاصيل. فيما يلي لمحة عن المراحل الرئيسية لصنع الشوكولاتة:</p>

            </div>



          </article>
        </div>
      </div>
    </BlogContainer>
  )
}

export default HistoryOfChocolate