import { cn } from '@/lib/utils'
import React from 'react'


type TTagButonProps = {
    title: string,
    className?: string,

}
const TagButton = ({ title, className }: TTagButonProps) => {
    return (
        <button className={cn(className, 'border border-gray-400 px-3 py-1 rounded-xl hover:bg-slate-500 hover:text-white')}>
            {title}
        </button>
    )
}

export default TagButton