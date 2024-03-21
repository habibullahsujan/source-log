'use client'
import Header from "./_components/header";
import AllBlogs from "./_components/allBlogs";
import RecentBlog from "./_components/recentBlogs";
import { useEffect, useState } from "react";
import LoadingPage from "../loading";




export default function Home() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)

    return () => {
      setMounted(false)
    }
  }, []);
  return (
    <>
      {
        mounted ? <div className="py-24 mx-1 md:mx-6">
          <Header />
          <RecentBlog />
          <AllBlogs />
          
          {/* <Pagination /> */}
          {/* <ContactForm /> */}
        </div> : <LoadingPage />
      }
    </>
  );
}
