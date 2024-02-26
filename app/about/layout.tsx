import { cn } from "@/lib/utils"
import Footer from "../(home)/_components/footer"
import Navbar from "../(home)/_components/navbar"
import { ReactNode } from "react"


interface ILayoutProps {
    children: ReactNode,
}

const Layout = ({ children }: ILayoutProps) => {
    return (

        <main className={cn("min-h-screen  max-h-[1200px] w-full max-w-[1300px] px-[10px] h-full mx-auto",
        )}>
            <Navbar />
            {children}
            <Footer />
        </main>



    )
}

export default Layout;