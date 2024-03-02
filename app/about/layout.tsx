import { cn } from "@/lib/utils"
import Footer from "../(home)/_components/footer"
import Navbar from "../(home)/_components/navbar"
import { ReactNode } from "react"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us: Exploring Arabic Culture, Lifestyle, News & History | Blog Source",
    description: "Learn more about our passion for unraveling the mysteries of Arabic culture, lifestyle, and history on our About page. Discover our commitment to sharing top news, daily life insights, and historical wonders with you. Join us as we delve deeper into the vibrant tapestry of the Arab world.",
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