import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { motion } from 'framer-motion'


type TCategotyProps = {
    children: ReactNode,
    className?: string
}

const CategoryButton = ({ children, className }: TCategotyProps) => {
    return (
        <motion.button whileTap={{ scale: 0.85 }} className={cn(className, 'rounded-xl font-semibold px-2 py-1')}>
            {children}
        </motion.button>
    )
}

export default CategoryButton