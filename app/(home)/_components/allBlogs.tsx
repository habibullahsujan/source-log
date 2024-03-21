
'use client'


import { motion } from "framer-motion";
import useScrollGrow from "@/hooks/useScrollGrow";
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
                        publishedDate={blog.published_date}
                        content={blog.description}
                        tags={blog.tags}
                        href={blog.href}
                        alt={blog.alt}
                        author={blog.author_name}
                    />
                ))}
            </motion.div>

        </div>

    );
};

export default AllBlogs;
