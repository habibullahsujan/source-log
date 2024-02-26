import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'


interface IBlogContainerProps {
    className?: string,
    children: ReactNode
}

const BlogContainer = ({ className, children }: IBlogContainerProps) => {
    return (
        <main className={cn(className)}>{children}</main>
    )
}

export default BlogContainer