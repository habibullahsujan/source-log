
'use client'

import blog5 from "@/public/assets/riyadh-img.jpg";
import blog6 from "@/public/assets/tea-title-img.jpeg";
import blog7 from "@/public/assets/featured-blog-car-rental-company.jpeg";
import blog8 from "@/public/assets/featured-best-kitchen-sink.jpeg";
import blog9 from "@/public/assets/blog-9.jpeg";
import blog10 from "@/public/assets/blog-10.jpeg";

import { motion } from "framer-motion";
import useScrollGrow from "@/hooks/useScrollGrow";
import CategoryButton from "../../(components)/categoryButton";
import dynamic from "next/dynamic";

const BlogCard = dynamic(() => import("./blogCard"), {
    ssr: false,
});


const AllBlogs = () => {
    const { style, componentRef } = useScrollGrow();
    const blogData = [
        {
            image: blog5,
            authorName: "Alec Whitten",
            publishedDate: "• 1 Jan 2023",
            href: '/tourist-place-riyadh',
            title: "أفضل الأماكن السياحية في المملكة العربية السعودية دليل السياحة الممتاز",
            description:
                "يوفر السفر إلى المملكة العربية السعودية رحلة آسرة عبر بعض أفضل الأماكن السياحية في العالم، حيث تمتزج التقاليد القديمة بسلاسة مع الأعجوبة الحديثة. من المساحات الشاسعة من الكثبان الصحراوية إلى المدن النابضة بالحياة النابضة بالحياة، تجذب المملكة العربية السعودية المسافرين بنسيجها الغني من التراث الثقافي والمناظر الطبيعية الخلابة وكرم الضيافة. أحد الأسباب الأكثر إلحاحا لاستكشاف المملكة العربية السعودية هو ثروتها من الكنوز التاريخية والثقافية. تعد المملكة موطنًا لبعض المواقع الأثرية التي تم الحفاظ عليها بشكل أفضل في العالم، وتقدم لمحة عن الحضارات القديمة التي ازدهرت في هذه المنطقة ذات يوم. من الآثار الشاهقة لمدائن صالح، إحدى مواقع التراث العالمي لليونسكو، إلى الفن الصخري القديم في جبة، تنقل المعالم التاريخية في المملكة العربية السعودية الزوار إلى الوراء في الزمن إلى حقبة ماضية من الملوك والتجار والبدو. بالنسبة لأولئك الذين يبحثون عن العجائب الطبيعية، تفتخر المملكة العربية السعودية ببعض أفضل الأماكن السياحية، بما في ذلك ساحل البحر الأحمر المهيب، حيث الشواطئ البكر والشعاب المرجانية النابضة بالحياة في انتظار الاستكشاف. انغمس في المياه الصافية لاكتشاف مشهد من الحياة البحرية، من الأسماك الملونة إلى السلاحف البحرية المهيبة، أو انطلق في رحلة سفاري صحراوية مثيرة لمشاهدة الجمال الساحر للكثبان الرملية عند غروب الشمس. تُعد مدن المملكة العربية السعودية مراكز نابضة بالحياة للثقافة والتجارة والابتكار، حيث تقدم مجموعة متنوعة من التجارب للمسافرين. تتميز العاصمة الرياض بمعالم بارزة مثل برج مركز المملكة وقلعة المصمك التاريخية، في حين أن جدة، بوابة البحر الأحمر، تسحر الزوار بأسواقها الصاخبة والهندسة المعمارية القديمة والمشهد الفني النابض بالحياة في الشوارع. إلى جانب معالمها الثقافية والطبيعية، تقدم المملكة العربية السعودية للزوار ترحيبًا حارًا وفرصة لتجربة ضيافة المملكة الأسطورية بشكل مباشر. من الخيام البدوية التقليدية في الصحراء إلى المنتجعات الفاخرة على طول الساحل، تلبي خيارات الإقامة جميع الأذواق والميزانيات، مما يضمن إقامة مريحة لا تنسى للمسافرين من جميع أنحاء العالم. وفي الختام، فإن السفر إلى المملكة العربية السعودية يفتح عالمًا من العجائب، حيث يتلاقى التاريخ القديم والجمال الطبيعي والابتكار الحديث لخلق رحلة لا تُنسى. سواء كنت تستكشف الآثار القديمة، أو تغوص في المياه اللازوردية، أو تنغمس في حياة المدينة النابضة بالحياة، فإن أفضل الأماكن السياحية في المملكة العربية السعودية تعد بتجربة غنية وتحويلية حقًا للمسافرين الباحثين عن المغامرة والاكتشاف والانغماس الثقافي.",
            tags: [
                <CategoryButton key={1} className="bg-[#F9F5FF] text-[#6941C6]">
                    Tourist Places
                </CategoryButton>,
                <CategoryButton key={2} className="bg-[#EEF4FF] text-[#3538CD]">
                    Lifestyle
                </CategoryButton>,
            ],
        },
        {
            image: blog6,
            authorName: "Alec Whitten",
            publishedDate: "• 1 Jan 2023",
            href: '/perfect-tea',

            title: "اصنع كوبًا مثاليًا من الشاي. دليل شامل",
            description:
                "لقد تم الاعتزاز به لعدة قرون، وتم الاحتفال به لدفئه المريح، ورائحته المهدئة، وعدد لا يحصى من الفوائد الصحية. من حفل الماتشا الياباني الأنيق إلى النكهات القوية للشاي الهندي، تنتشر ثقافة الشاي في جميع أنحاء العالم، وتأسر القلوب والعقول مع كل رشفة.",
            tags: [
                <CategoryButton key={3} className="bg-[#F9F5FF] text-[#6941C6]">
                    Lifestyle
                </CategoryButton>,
                <CategoryButton key={4} className="bg-[#EEF4FF] text-[#3538CD]">
                    Food
                </CategoryButton>,
            ],
        },
        {
            image: blog7,
            authorName: "Alec Whitten",
            publishedDate: "• 1 Jan 2024",
            title: "Best car rental company in Saudi Arabia",
            href: '/best-car-rental-company',
            description:
                "Planning a trip to Saudi Arabia and in need of reliable transportation? Look no further! We've curated a list of the top 10 car rental companies across the Kingdom to ensure your journey is smooth and hassle-free.",
            tags: [
                <CategoryButton key={3} className="bg-[#F9F5FF] text-[#6941C6]">
                    LifeStyle                </CategoryButton>,
                <CategoryButton key={3} className="bg-[#EEF4FF] text-[#3538CD]">
                    Car
                </CategoryButton>,
            ],
        },
        {
            image: blog8,
            authorName: "Habib Ullah",
            publishedDate: "• 1 Jan 2024",
            title: "Best Kitchen Sinks for Every Need",
            href: '/best-kitchen-sink',
            description:
                "The kitchen sink - the unsung hero of countless meals, dishes, and culinary creations. It's a workhorse, a stage for prep work, and a crucial element in maintaining a clean and functional kitchen. But with a multitude of options available, choosing the best kitchen sink can feel overwhelming. Fear not! This comprehensive guide dives into the top 10 contenders, exploring materials, styles, functionalities, and price points to help you find the perfect fit for your kitchen.",
            tags: [
                <CategoryButton key={3} className="bg-[#F9F5FF] text-[#6941C6]">
                    Leadership
                </CategoryButton>,
                <CategoryButton key={3} className="bg-[#EEF4FF] text-[#3538CD]">
                    Management
                </CategoryButton>,
            ],
        },
        {
            image: blog9,
            authorName: "Alec Whitten",
            publishedDate: "• 1 Jan 2023",
            title: "Bill Walsh leadership lessons",
            href: '/',
            description:
                "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
            tags: [
                <CategoryButton key={3} className="bg-[#F9F5FF] text-[#6941C6]">
                    Leadership
                </CategoryButton>,
                <CategoryButton key={3} className="bg-[#EEF4FF] text-[#3538CD]">
                    Management
                </CategoryButton>,
            ],
        },
        {
            image: blog10,
            authorName: "Alec Whitten",
            publishedDate: "• 1 Jan 2023",
            href: '/',
            title: "Bill Walsh leadership lessons",
            description:
                "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
            tags: [
                <CategoryButton key={3} className="bg-[#F9F5FF] text-[#6941C6]">
                    Leadership
                </CategoryButton>,
                <CategoryButton key={3} className="bg-[#EEF4FF] text-[#3538CD]">
                    Management
                </CategoryButton>,
            ],
        },
    ];
    return (

        <div>
            <h2 className="text-2xl font-bold pt-10 pb-6">All blog posts</h2>
            <motion.div style={style}
                ref={componentRef} className="grid grid-cols-12 gap-5">
                {blogData.map((blog, index) => (
                    <BlogCard key={index}
                        index={index}
                        image={blog.image}
                        title={blog.title}
                        authorDate={blog.publishedDate}
                        content={blog.description}
                        category={blog.tags}
                        href={blog.href}
                    />
                ))}
            </motion.div>

        </div>

    );
};

export default AllBlogs;
