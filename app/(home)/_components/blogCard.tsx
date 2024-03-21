import { cn } from "@/lib/utils";
import { motion } from 'framer-motion'
import Image, { StaticImageData } from "next/image";
import BlogTime from "./blogTime";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import TagButton from "@/app/(components)/tagButton";


type TBlogCardProps = {
    image: StaticImageData;
    title: string;
    publishedDate?: string;
    content: string;
    tags: string[];
    className?: string;
    index: number;
    href: string;
    alt:string;
    author?:string,
};
const BlogCard = ({
    image,
    title,
    publishedDate,
    content,
    tags,
    className,
    index,
    href,
    alt,
    author,
}: TBlogCardProps) => {
    return (
        <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }} viewport={{ once: true }} className={cn(className, "col-span-12 md:col-span-4 cursor-pointer bg-white p-4 rounded-lg hover:bg-blue-100/20 duration-300 shadow hover:shadow-lg transition-shadow group h-[600px] relative")}>
            <Link href={href}>
                <div className="pb-6 overflow-hidden">
                    <Image src={image} alt={alt} className="w-full h-[250px] object-cover object-center group-hover:scale-105 transition-all ease duration-300" 
                        sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="flex gap-x-1">
                    <span>Author: </span>{author}<BlogTime className="my-6">{publishedDate}</BlogTime>
                </div>
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xl py-3 blog-title">{title}</h3>
                    <button>
                        <ArrowRightCircle className="h-10 w-8" />{" "}
                    </button>
                </div>
                <p >{content.length > 100 ? content.slice(0, 125) : content}....</p>

            </Link>
            <div className="py-6 absolute bottom-0 flex gap-x-2">
                {tags.map((tag,i)=><TagButton key={i} title={tag}/>)}
            </div>
        </motion.div>
    );
};

export default BlogCard;
