import { Metadata } from 'next';
import React, { ReactNode } from 'react'


export const metadata: Metadata = {
    title: 'Explore the Finest: Best Car Rental Companies in Saudi Arabia for Hassle-Free Travel',
    description: 'Best Top 10 car rental companies in KSA offer diverse vehicle models, and competitive pricing. Find your ideal rental provider today!'
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