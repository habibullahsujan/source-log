import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'


interface IContainerProps{
    className?:string,
    children:ReactNode
}

const Container = ({className,children}:IContainerProps) => {
  return (
    <div className={cn(className)}>{children}</div>
  )
}

export default Container