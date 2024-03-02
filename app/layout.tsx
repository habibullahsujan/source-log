import type { Metadata } from "next";
import "./globals.css";
import { Noto_Naskh_Arabic } from 'next/font/google'
import clsx from "clsx";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from '@next/third-parties/google'
export const metadata: Metadata = {
  title: "Arabic Culture, Lifestyle, and Historical Wonders | Blog Source",
  description: "Experience the magic of Arabic culture, daily life, and historical wonders through our engaging blog. Stay informed with the latest news, delve into unique lifestyles, and uncover timeless treasures of Arab history. Welcome to your ultimate Arabic adventure.",
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
