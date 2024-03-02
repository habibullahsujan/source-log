import { cn } from "@/lib/utils"
import Footer from "../(home)/_components/footer"
import Navbar from "../(home)/_components/navbar"
import { ReactNode } from "react"
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "All Blogs: Dive into Arabic Culture, Lifestyle, News & History | Blog Source",
    description: "Explore a treasure trove of articles on Arabic culture, lifestyle, top news, and historical wonders on our All Blogs page. Delve into insightful narratives, stay updated with the latest news, and embark on virtual journeys through the heart of Arabia. Find inspiration, knowledge, and discovery in every blog post.",
};

interface ILayoutProps {
    children: ReactNode,
}

const Layout = ({ children }: ILayoutProps) => {
    return (

        <main className={cn("min-h-screen  max-h-[1200px] w-full max-w-[1300px] px-2 md:px-[10px] h-full mx-auto",
        )}>
            <Navbar />
            {children}
            <Footer />
        </main>



    )
}

export default Layout;