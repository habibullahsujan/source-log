import Link from 'next/link'
import React from 'react'

interface IContentTableProps{
  heading:{
    title:string
  }
}

const ContentTable = ({heading}:IContentTableProps) => {
  return (



    <li key={`#${heading.title}`} className="py-1">
    <Link
      href={`#${heading.title}`}
      data-level={heading.title}
      className="
                     sm:data-[level=three]:pl-6
                     flex items-center justify-start
                     "
    >

      <span className="hover:underline">{heading.title}</span>
    </Link>
  </li>

  )
}

export default ContentTable