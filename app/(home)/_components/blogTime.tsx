import { cn } from "@/lib/utils"
import { ReactNode } from "react"


type TCategotyProps={
    children:ReactNode,
    className?:string
}

const BlogTime = ({children,className}:TCategotyProps) => {
  return (
    <div>
        <span className={cn('text-[#6941C6] font-semibold ',className)}>
                {children}
              </span>
    </div>
  )
}

export default BlogTime