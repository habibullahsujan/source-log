import React from 'react'

interface IContentTableProps{
  heading:{
    title:string
  }
}

const ContentTable = ({heading}:IContentTableProps) => {
  return (



    <li key={`#${heading.title}`} className="py-1">
    <a
      href={`#${heading.title}`}
      data-level={heading.title}
      className="
                     sm:data-[level=three]:pl-6
                     flex items-center justify-start
                     "
    >

      <span className="hover:underline">{heading.title}</span>
    </a>
  </li>

  )
}

export default ContentTable