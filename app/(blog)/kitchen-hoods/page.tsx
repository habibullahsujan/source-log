import ContentTable from '@/app/(components)/contentTable'
import { Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BlogContainer from '../blogContainer'

const KitchenHoods = () => {
  const tableContents = [
    { title: 'الكشف عن السبب: الدور الحيوي لشفاطات المطبخ' },
    { title: 'إزالة الغموض عن الخيارات: مجموعة متنوعة من شفاطات المطبخ ' },
    { title: 'اختيار بطلك: الاعتبارات الأساسية' },
    { title: 'ما وراء الأساسيات: ميزات متقدمة للارتقاء بمطبخك' },
    { title: 'رؤى التثبيت: ضمان الأداء الأمثل' },
    { title: 'الحفاظ على بطلك: الحفاظ على غطاء محرك السيارة في أفضل حالاته' },
    { title: 'المخفقة النهائية: اختيار شفاط المطبخ المناسب لك' },
  ]
  return (

    <BlogContainer className='text-right mx-16 pt-32'>
 <div className='flex items-center gap-x-4 py-7'>
        <Link href={'/'}><Home className='h-4 w-4' /></Link> / <Link href={'/kitchen-hoods'}>Kitchen Hoods</Link>
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
          <h1 className='font-bold text-2xl'>غزو المطبخ بالوضوح: دليلك الشامل لأغطية المحركات</h1>
          <div className=' my-10' >
            <div className='flex justify-end'>
              <Image className='' src={'https://images.pexels.com/photos/15119073/pexels-photo-15119073/free-photo-of-exhaust-hood-over-cooker.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='kitchen hoods' width={500} height={200} />


            </div>
            <span className='cursor-pointer text-sky-400'>source: <Link href={'https://pexels.com'} >pexel.com</Link></span>
          </div>
          <article>
            <p className='text-lg'>
              شفاطات المطبخ هي الأبطال المجهولون في معارك الطهي. هؤلاء الحراس الصامتون، الذين يحومون فوق موقدك، يتعاملون مع الدخان والشحوم والروائح المنبعثة أثناء الطهي، مما يحافظ على مطبخك طازجًا وصحة رئتيك. ولكن مع وجود عدد كبير من الخيارات المتاحة، فإن اختيار غطاء المحرك المناسب يمكن أن يبدو وكأنه التنقل في متاهة. لا تخافوا يا عشاق الطعام! سيزودك هذا الدليل الشامل بالمعرفة اللازمة لاختيار شفاط المطبخ المثالي، وتحويل مساحة الطهي الخاصة بك إلى ملاذ للإبداع في الطهي.
            </p>
            <div id='الكشف عن السبب: الدور الحيوي لشفاطات المطبخ'>
              <h2 className='text-xl font-bold pt-14 pb-2'>الكشف عن السبب: الدور الحيوي لشفاطات المطبخ</h2>
              <p className='text-lg'>
                تخيل أنك تقوم بتحمير شرائح اللحم، أو تحضير الكاري العطري، أو الانغماس في وليمة من القلي العميق. في حين أنها شهية، فإن مغامرات الطهي هذه تطلق العنان لسيل من الأعداء المحمولين بالهواء - الدخان والشحوم والبخار، وحتى الملوثات الضارة. يمكن أن يؤدي استنشاقها إلى تهيج عينيك ورئتيك، وإثارة الحساسية، وحتى إتلاف الأجزاء الداخلية من منزلك. أدخل غطاء المطبخ، مدافعك الشجاع ضد هؤلاء الضيوف غير المرغوب فيهم.
              </p>
            </div>
            <div id='إزالة الغموض عن الخيارات: مجموعة متنوعة من شفاطات المطبخ'>
              <h2 className='text-xl font-bold pt-14 pb-2'>
                إزالة الغموض عن الخيارات: مجموعة متنوعة من شفاطات المطبخ
              </h2>
              <p className='text-lg py-3 font-semibold'>
                عالم شفاطات المطبخ متنوع مثل أذواقك في الطهي. وفيما يلي تفصيل للأنواع الرئيسية:
              </p>

              <ul className='list-disc'>
                <li><span className='font-bold px-2'>اغطية تحت الخزانة:</span>تعتبر أدوات توفير المساحة هذه التي يتم وضعها بشكل خفي أسفل الخزانات مثالية للمطابخ الصغيرة.</li>
                <li><span className='font-bold px-2'>الشفاطات المثبتة على الحائط:</span>الخيار الكلاسيكي، يوفر تهوية قوية ويأتي في أنماط مختلفة لتناسب ديكورك.</li>
                <li><span className='font-bold px-2'>أغطية الجزيرة:</span>مثالية للمطابخ المفتوحة أو الجزر، هذه الوحدات الأنيقة تتدلى من السقف، مما يدلي ببيان أثناء تنقية الهواء.</li>
                <li><span className='font-bold px-2'>اغطية Downdraft:</span>تم دمج هذه الخيارات الأنيقة في الموقد المسطح الخاص بك، وتختفي عند عدم استخدامها، مما يزيد من مساحة المنضدة.</li>
                <li>
                  <span className='font-bold px-2'>إعادة تدوير القلنسوات:</span>
                  مثالية للشقق أو المساحات التي لا تحتوي على تهوية خارجية، حيث تقوم بتصفية الهواء وإعادة تدويره داخل مطبخك.
                </li>
              </ul>
            </div>
            <div id='اختيار بطلك: الاعتبارات الأساسية'>
              <h2 className='text-xl font-bold pt-14 pb-2'>اختيار بطلك: الاعتبارات الأساسية</h2>
              <p className='text-lg py-3 font-semibold'>الآن بعد أن قابلت المتنافسين، حان الوقت لاختيار بطلك! فيما يلي العوامل الرئيسية التي يجب التفكير فيها:</p>
              <ul className='list-disc'>
                <li><span className='font-bold px-2'>مقاس:</span>تأكد من أن غطاء محرك السيارة الخاص بك يغطي سطح الطهي بالكامل لالتقاط الملوثات المحمولة جواً بشكل فعال.</li>
                <li><span className='font-bold px-2'>قوة التهوية:</span>عند قياسه بالقدم المكعب في الدقيقة (CFM)، يشير ارتفاع CFM إلى قوة الشفط. قم بمطابقة CFM مع أسلوب الطبخ الخاص بك وحجم المطبخ.</li>
                <li><span className='font-bold px-2'>مستوى الضوضاء:</span>اختر شفاطًا ذو تصنيف ديسيبل يناسب مستوى راحتك، خاصة إذا كنت تطبخ بشكل متكرر.</li>
                <li><span className='font-bold px-2'>المرشحات:</span>اختر المرشحات التي يسهل تنظيفها واستبدالها. فكر في استخدام مرشحات الفحم لإعادة تدوير الأغطية.</li>
                <li><span className='font-bold px-2'>إضاءة:</span>تضيء مصابيح LED المدمجة سطح الطبخ الخاص بك، مما يعزز الرؤية ويضيف لمسة من الأناقة.</li>
                <li><span className='font-bold px-2'>جماليات:</span>اختر الشفاط الذي يكمل تصميم مطبخك وتفضيلاتك الشخصية.</li>
              </ul>
            </div>
            <div id='ما وراء الأساسيات: ميزات متقدمة للارتقاء بمطبخك' >
              <h2 className='text-xl font-bold pt-14 pb-2'>ما وراء الأساسيات: ميزات متقدمة للارتقاء بمطبخك</h2>
              <h3 className='font-semibold'>توفر الشفاطات الحديثة مجموعة من الميزات لتعزيز تجربة الطهي الخاصة بك:</h3>
              <ul className='list-disc'>
                <li><span className='font-bold px-2'>التحكم في السرعة المتغيرة:</span>اضبط قوة الشفط لتتناسب مع كثافة الطبخ لديك.</li>
                <li><span className='font-bold px-2'>مصابيح الحرارة:</span>حافظ على أطباقك دافئة أثناء الانتهاء من طهي العناصر الأخرى.</li>
                <li><span className='font-bold px-2'>جهاز التحكم:</span>قم بتشغيل غطاء محرك السيارة الخاص بك وأنت مستريح على كرسيك.</li>
                <li><span className='font-bold px-2'>الاغلاق التلقائي:</span>يضمن إيقاف تشغيل غطاء المحرك بعد فترة زمنية محددة، مما يوفر الطاقة.</li>
                <li><span className='font-bold px-2'>الاتصال الذكي:</span>تحكم في غطاء محرك السيارة الخاص بك وراقب أدائه من خلال هاتفك الذكي.</li>
              </ul>
            </div>
            <div id='رؤى التثبيت: ضمان الأداء الأمثل'>
              <h2 className='text-xl font-bold pt-14 pb-2'>رؤى التثبيت: ضمان الأداء الأمثل</h2>
              <p>للحصول على الأداء الأمثل والسلامة، يعد التثبيت المناسب أمرًا بالغ الأهمية. استشر أحد المتخصصين المؤهلين للتأكد من تهوية غطاء محرك السيارة بشكل صحيح واستيفاءه لجميع قوانين البناء المحلية.</p>
            </div>
            <div>
              <h2 className='text-xl font-bold pt-14 pb-2'>الحفاظ على بطلك: الحفاظ على غطاء محرك السيارة في أفضل حالاته</h2>
              <p>يعد التنظيف والصيانة المنتظمة أمرًا ضروريًا لضمان عمل غطاء المحرك بشكل فعال. قم بتنظيف المرشحات بانتظام، باتباع إرشادات الشركة المصنعة. امسح الجزء الخارجي للغطاء بقطعة قماش مبللة ومنظف معتدل. تذكر أن غطاء المحرك الذي يتم صيانته جيدًا هو غطاء سعيد وفعال!</p>
            </div>
            <div>
              <h2 className='text-xl font-bold pt-14 pb-2'>المخفقة النهائية: اختيار شفاط المطبخ المناسب لك</h2>
              <p>مع هذا الدليل الشامل الموجود في ترسانتك، أنت مجهز للتغلب على معضلة شفاط المطبخ. تذكر أن الشفاط &quot;الأفضل&quot; هو الذي يتوافق تمامًا مع احتياجاتك وتفضيلاتك وميزانيتك. لذلك، ارتدي عباءة الطهي الخاصة بك، واحتضن الشيف بداخلك، ودع شفاط المطبخ الخاص بك يكون رفيقك الموثوق به في مغامراتك اللذيذة!</p>
            </div>
            <div>
              <p><span className='font-bold px-2'>نصيحة إضافية:</span>ضع في اعتبارك تصميم مطبخك وعادات الطهي والميزانية عند اتخاذ قرارك. لا تتردد في استشارة المتخصصين للحصول على توصيات مخصصة.</p>
            </div>
            <p className='font-bold py-6'>طبخ سعيد!</p>
          </article>
        </div>
      </div>
    </BlogContainer>

  )
}

export default KitchenHoods