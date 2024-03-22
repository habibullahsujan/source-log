import { cn } from "@/lib/utils"
import Footer from "../(home)/_components/footer"
import Navbar from "../(home)/_components/navbar"
import { ReactNode } from "react"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "التعريف بنا: معلومات عنا ورؤيتنا",
    description: 'اكتشف ثروة من المحتوى الملهم والغني بالمعلومات باللغة العربية! نحن ملتزمون بالجمهور العربي بمقالات وموارد جذابة لتغذية عواطفهم واهتماماتهم.'
};



interface ILayoutProps {
    children: ReactNode,
}

const Layout = ({ children }: ILayoutProps) => {
    return (

        <main className={cn("min-h-screen  max-h-[1200px] max-w-[1220px]",
        )}>
            <Navbar />
            {children}
            <Footer />
        </main>



    )
}

export default Layout;