
'use client'

import blog5 from "@/public/assets/riyadh-img.jpg";
import blog6 from "@/public/assets/tea-title-img.jpeg";
import blog7 from "@/public/assets/featured-blog-car-rental-company.jpeg";
import blog8 from "@/public/assets/featured-best-kitchen-sink.jpeg";
import blog9 from "@/public/assets/house-rent-blog-banner.jpg";
import blog10 from "@/public/assets/best-gym.jpeg";

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
            title: "Best tourist places in the Kingdom of Saudi Arabia, excellent tourism guide",
            description:
                "Travelling to Saudi Arabia offers a captivating journey through some of the world's best tourist attractions, where ancient traditions blend seamlessly with modern marvels. From vast expanses of desert dunes to vibrant, vibrant cities, Saudi Arabia attracts travelers with its rich tapestry of cultural heritage and scenery. The stunning natural landscape and warm hospitality. One of the most compelling reasons to explore Saudi Arabia is its wealth of historical and cultural treasures. The Kingdom is home to some of the best-preserved archaeological sites in the world, offering a glimpse into the ancient civilizations that once flourished in this region. Of antiquities The towering towers of Mada&apos; in Saleh, a UNESCO World Heritage Site, to the ancient rock art of Jubbah, Saudi Arabia&apos;s historical landmarks transport visitors back in time to a bygone era of kings, merchants and Bedouins.For those seeking natural wonders, Saudi Arabia boasts some Top tourist attractions, including the majestic Red Sea coast, where pristine beaches and vibrant coral reefs await exploration. Dive into the crystal-clear waters to discover a kaleidoscope of marine life, from colorful fish to majestic sea turtles, or take a thrilling desert safari to witness the mesmerizing beauty of the sand dunes at sunset. Saudi Arabia&apos;s cities are vibrant centers of culture, commerce and innovation, offering a variety of experiences for travellers. The capital, Riyadh, features iconic landmarks such as the Kingdom Center Tower and the historic Masmak Castle, while Jeddah, the gateway to the Red Sea, enchants visitors with its bustling markets, ancient architecture, and vibrant street art scene. Along with its cultural and natural attractions, Saudi Arabia offers visitors a warm welcome and the opportunity to experience the kingdom&apos;s legendary hospitality first-hand. From traditional Bedouin tents in the desert to luxury resorts along the coast, accommodation options cater to all tastes and budgets, ensuring a comfortable and memorable stay for travelers from all over the world. In conclusion, traveling to Saudi Arabia opens up a world of wonders, where ancient history, natural beauty and modern innovation converge to create an unforgettable trip. Whether exploring ancient ruins, diving in azure waters, or immersing yourself in vibrant city life, the best tourist attractions in Saudi Arabia promise a truly enriching and transformative experience for travelers seeking adventure, discovery, and cultural immersion.",
            tags: [
                <CategoryButton key={1} className="bg-[#F9F5FF] text-[#6941C6]">
                    Tourist Places
                </CategoryButton>,
                <CategoryButton key={2} className="bg-[#EEF4FF] text-[#3538CD]">
                    Lifestyle
                </CategoryButton>,
            ],
            alt: 'Best Tourist Places in Riyadh'
        },
        {
            image: blog6,
            authorName: "Alec Whitten",
            publishedDate: "• 1 Jan 2023",
            href: '/perfect-tea',

            title: "How to make a perfect cup of tea. A comprehensive guide",
            description:
                "Tea has been appreciated for centuries, celebrated for its comforting warmth, soothing aroma, and countless health benefits. From the elegant Japanese matcha ceremony to the intense flavors of Indian tea, tea culture spreads across the world, capturing hearts and minds with every sip...",
            tags: [
                <CategoryButton key={3} className="bg-[#F9F5FF] text-[#6941C6]">
                    Lifestyle
                </CategoryButton>,
                <CategoryButton key={4} className="bg-[#EEF4FF] text-[#3538CD]">
                    Food
                </CategoryButton>,
            ],
            alt: 'A cup of tea'
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
            alt: 'Best car rental company in Saudi Arabia'
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
                    Lifestyle
                </CategoryButton>,
                <CategoryButton key={3} className="bg-[#EEF4FF] text-[#3538CD]">
                    Kitchen
                </CategoryButton>,
            ],
            alt: 'Best kitchen sink'
        },
        {
            image: blog9,
            authorName: "Alec Whitten",
            publishedDate: "• 1 Jan 2023",
            title: "Top House Rent Companies in Saudi Arabia: Finding Your Ideal Rental",
            href: '/house-rent-company',
            description:
                "Are you looking for a house to rent in Saudi Arabia? With its booming real estate market, finding the perfect rental can be overwhelming. To simplify your search, we&apos;ve compiled a list of the top house rent companies in Saudi Arabia, each offering a range of options to suit your needs and preferences.",
            tags: [
                <CategoryButton key={3} className="bg-[#F9F5FF] text-[#6941C6]">
                    Lifestyle
                </CategoryButton>,
                <CategoryButton key={3} className="bg-[#EEF4FF] text-[#3538CD]">
                    House Rent
                </CategoryButton>,
            ], alt: 'House renting company banner'
        },
        {
            image: blog10,
            authorName: "Alec Whitten",
            publishedDate: "• 1 Jan 2023",
            href: '/best-gym-riyadh',
            title: "Best Gym Destinations in Riyadh",
            description:
                "Are you on the hunt for the best gym in Riyadh to kickstart your fitness journey? Look no further! We&apos;ve curated a comprehensive guide to the top fitness centers in the city, each offering a unique blend of facilities, expert training, and welcoming environments to help you reach your fitness goals.",
            tags: [
                <CategoryButton key={3} className="bg-[#F9F5FF] text-[#6941C6]">
                    Fitness
                </CategoryButton>,
                <CategoryButton key={3} className="bg-[#EEF4FF] text-[#3538CD]">
                    Health
                </CategoryButton>,
            ],
            alt: 'A man running in treadmill'
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
                        alt={blog.alt}
                    />
                ))}
            </motion.div>

        </div>

    );
};

export default AllBlogs;
