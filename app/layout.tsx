import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'
import clsx from "clsx";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Your guide to a simpler life in the Kingdom of Saudi Arabia",
  description: "Discover insider knowledge and practical guides to make your life in Saudi Arabia easier and more enjoyable. Discover effective solutions for everything from household chores to healthcare and entertainment.",
};


const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

<head>

<Script async src="https://www.googletagmanager.com/gtag/js?id=G-MZSQX9VLV9"/>

<Script id="google-analytics">
  {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-MZSQX9VLV9');
  `}
</Script>
</head>
      <body className={clsx('', montserrat.className)}>{children}<Toaster /></body>
    </html>
  );
}
