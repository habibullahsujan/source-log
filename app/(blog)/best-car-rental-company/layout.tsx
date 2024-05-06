import { Metadata } from 'next';
import React, { ReactNode } from 'react'


export const metadata: Metadata = {
    title: 'Best Car Rental Company | Top Picks',
    description: 'Top 10 car rental companies in KSA offer diverse vehicle models, and competitive pricing. Find your ideal rental provider today!'
};
type layoutProps={
    children:ReactNode
}
const layout = ({children}:layoutProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default layout