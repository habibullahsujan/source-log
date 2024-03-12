import type { Metadata } from "next";
import "./globals.css";
import { Noto_Naskh_Arabic,Montserrat } from 'next/font/google'
import clsx from "clsx";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from '@next/third-parties/google'
export const metadata: Metadata = {
  title: "Discover Arabian Delights: Your gateway to rich culture",
  description: "The vibrant world of Arab culture, cuisine and lifestyle. Immerse yourself in tradition and inspiration.",
};

const notNaskhArabic = Noto_Naskh_Arabic({
  weight: ['400'],
  subsets: ['arabic']
})

const montserrat=Montserrat({
  weight:['400'],
  subsets:['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx('', montserrat.className)}>{children}<Toaster /></body>
      <GoogleAnalytics gaId="G-EEQ48444N2" />
    </html>
  );
}
