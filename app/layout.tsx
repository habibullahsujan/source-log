import type { Metadata } from "next";
import "./globals.css";
import { Noto_Serif_Georgian, Manrope } from 'next/font/google'
import clsx from "clsx";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from '@next/third-parties/google'
export const metadata: Metadata = {
  title: "Blog Source",
  description: "Arabic Lifestyles, their calture and their favorite food.",
};

const notoSerifGeorgian = Noto_Serif_Georgian({
  subsets: ['latin'], display: 'swap', variable: '--font-notoSerif'
})
const manrope = Manrope({
  subsets: ['latin'], display: 'swap', variable: '--font-manrope'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx('font-mr bg-light dark:bg-dark', notoSerifGeorgian.variable, manrope.variable)}>{children}   <Toaster /></body>
      <GoogleAnalytics gaId="G-EEQ48444N2" />
    </html>
  );
}
