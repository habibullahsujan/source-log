import type { Metadata } from "next";
import "./globals.css";
import { Noto_Naskh_Arabic } from 'next/font/google'
import clsx from "clsx";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from '@next/third-parties/google'
export const metadata: Metadata = {
  title: "Blog Source",
  description: "Arabic Lifestyles, their calture and their favorite food.",
};

const notNaskhArabic = Noto_Naskh_Arabic({
  weight: ['400'],
  subsets: ['arabic']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx('', notNaskhArabic.className)}>{children}<Toaster /></body>
      <GoogleAnalytics gaId="G-EEQ48444N2" />
    </html>
  );
}
