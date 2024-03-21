
'use client'

import blog5 from "@/public/assets/riyadh-img.jpg";
import blog6 from "@/public/assets/tea-title-img.jpeg";
import blog7 from "@/public/assets/featured-blog-car-rental-company.jpeg";
import blog8 from "@/public/assets/featured-best-kitchen-sink.jpeg";
import blog9 from "@/public/assets/house-rent-blog-banner.jpg";
import blog10 from "@/public/assets/best-gym.jpeg";
import blog11 from '@/public/assets/used-farniture-feature.jpeg'

import { motion } from "framer-motion";
import useScrollGrow from "@/hooks/useScrollGrow";
import CategoryButton from "../../(components)/categoryButton";
import dynamic from "next/dynamic";
import { blogData } from "@/app/(blog-content)/blogContent";

const BlogCard = dynamic(() => import("./blogCard"), {
    ssr: false,
});


const AllBlogs = () => {
    const { style, componentRef } = useScrollGrow();
    
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
                        tags={blog.tags}
                        href={blog.href}
                        alt={blog.alt}
                        author={blog.authorName}
                    />
                ))}
            </motion.div>

        </div>

    );
};

export default AllBlogs;
