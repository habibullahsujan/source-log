
'use client'

import featureBlog1 from "@/public/assets/feature-blog-1.jpeg";
import featureBlog2 from "@/public/assets/feature-blog-2.jpg";
import featureBlog3 from "@/public/assets/history-of-chocolate.jpeg";
import CategoryButton from "../../(components)/categoryButton";
import BlogTime from "./blogTime";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import { motion } from 'framer-motion'
import Link from "next/link";

const RecentBlog = () => {
    return (

        <div className="my-10">
            <h2 className="font-semibold text-2xl my-10">Recent blog posts</h2>
            <div className="grid grid-cols-12 gap-2 ">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { duration: 1, ease: 'linear' } }}
                    className=" hover:bg-slate-100 cursor-pointer col-span-12 md:col-span-6 rounded-lg pb-14 border-card group"
                >
                    <Link href={'/seafood-cuisine'}>
                        <div className="overflow-hidden">
                            <Image
                                src={featureBlog1}
                                alt=""

                                className="h-64 w-full object-cover  rounded-lg group-hover:scale-105 transition-all ease duration-300 "
                            />
                        </div>
                        <div className="mt-10 p-2">
                            <span className="flex text-black font-semibold items-center gap-x-2">Author: <BlogTime>Abu Al Hasan • 1 January 2022</BlogTime></span>

                            <div className="flex items-center justify-between">
                                <h2 className="font-bold text-xl py-3 text-black blog-title">
                                How to prepare the best seafood in the world.
                                </h2>
                                <button>
                                    <ArrowRightCircle className="h-10 w-8 text-black" />{" "}
                                </button>
                            </div>
                            <p className="text-slate-500">
                            The ocean&apos;s bounty offers a treasure trove of delicacies, and cultures around the world have developed unique and delicious ways to showcase <span className='font-bold'>the best seafood</span>. From the delicate artistry of Japanese sushi to the bold spices of Moroccan tagines, seafood takes center stage in countless culinary traditions, exciting the sense of taste and enriching cultural experiences...
                            </p>
                            <div className="flex items-center gap-x-4 mt-5">
                                <CategoryButton className="cursor-pointer hover:bg-[#6941C6] hover:text-[#F9F5FF] bg-[#F9F5FF] text-[#6941C6]">
                                    Food
                                </CategoryButton>
                                <CategoryButton className=" transition-all cursor-pointer hover:bg-[#3538CD] hover:text-[#EEF4FF] bg-[#EEF4FF] text-[#3538CD]">
                                    Kitchen
                                </CategoryButton>
                                <CategoryButton className="transition-all cursor-pointer hover:bg-[#C11574] hover:text-[#FDF2FA] text-[#C11574] bg-[#FDF2FA]">
                                    Sea Food
                                </CategoryButton>
                            </div>
                        </div>
                    </Link>
                </motion.div>
                <div className="px-2 md:px-10 col-span-12 md:col-span-6 flex flex-col gap-4 rounded-lg ">
                    <motion.div initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: 'linear' } }}
                        className=" group  cursor-pointer rounded-lg border-card">
                        <Link href={'/hershey-chocolate'} className="flex flex-col p-2 gap-4">
                            <div className="overflow-hidden w-full h-full">
                                <Image
                                    src={featureBlog2}
                                    alt="hershey's chocolate"
                                    className="my-auto rounded-lg h-[220px] w-full group-hover:scale-105 transition-all ease duration-300 object-cover"
                                />
                            </div>
                            <div className="text-black">
                                <span className="font-bold flex gap-x-1 items-center">Author: <BlogTime> Kobir Ali • 8 Jan 2023</BlogTime></span>

                                <h3 className="blog-title font-bold text-xl py-3">
                                     Revealing the sweet secrets of Hershey&apos;s chocolate: a journey through decades of delight
                                 </h3>
                                 <p>For more than a century, <span className="font-bold">Hershey&apos;s chocolate</span>has been synonymous with creamy sweetness and nostalgic memories. From its iconic candy bars to its versatile baking squares, Hershey&apos;s has established itself as a cornerstone of American confectionery, delighting generations with its unique flavors....
                                </p>
                                <div className="flex items-center gap-x-4 mt-5">
                                    <CategoryButton className="bg-[#F9F5FF] text-[#6941C6] transition-all cursor-pointer hover:bg-[#6941C6] hover:text-[#F9F5FF]">
                                        History
                                    </CategoryButton>
                                    <CategoryButton className="bg-[#EEF4FF] text-[#3538CD] transition-all cursor-pointer hover:bg-[#3538CD] hover:text-[#EEF4FF]">
                                        Food
                                    </CategoryButton>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: 'linear' } }} className="group md:flex block rounded-lg border-card gap-x-4  hover:bg-slate-100 hover:text-black cursor-pointer">
                        <Link href={'/best-chocolate'} className="flex flex-col gap-4 p-2">
                            <div className="overflow-hidden">
                                <Image
                                    src={featureBlog3}
                                    alt="best chocolate"
                                    className="rounded-lg h-[220px] w-full group-hover:scale-105 transition-all ease duration-300 "
                                />
                            </div>
                            <div className="text-black">
                                <span className="font-bold flex gap-x-2 items-center">Author:  <BlogTime> Abu Ahsan • 1 Jan 2023</BlogTime></span>

                                <h3 className="blog-title font-bold text-xl py-3">
                                    The best chocolate in the world: a comprehensive guide
                                </h3>
                                <p>
                                    Chocolate, the word itself evokes a series of delightful sensations - creamy textures, rich aromas, and the promise of pure indulgence. But this ubiquitous treat boasts a history as rich and complex as its flavor.....
                                </p>
                                <div className="flex items-center gap-x-4 mt-5">
                                    <CategoryButton className="bg-[#F9F5FF] text-[#6941C6] cursor-pointer hover:bg-[#6941C6] hover:text-[#F9F5FF] transition-all">
                                        History
                                    </CategoryButton>
                                    <CategoryButton className="bg-[#EEF4FF] text-[#3538CD] cursor-pointer hover:bg-[#3538CD] hover:text-white transition-all">
                                        Chocolate
                                    </CategoryButton>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default RecentBlog;
