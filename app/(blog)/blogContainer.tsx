import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'


interface IBlogContainerProps {
    className?: string,
    children: ReactNode
}

const BlogContainer = ({ className, children }: IBlogContainerProps) => {
    return (
        <div className={cn(className)}>{children}</div>
    )
}

export default BlogContainer