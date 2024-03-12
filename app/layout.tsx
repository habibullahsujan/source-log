import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'
import clsx from "clsx";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from '@next/third-parties/google'
export const metadata: Metadata = {
  title: "Unveiling Essential Tools, Tempting Recipes, and Lifestyle Wonders",
  description: "Join us on a culinary adventure as we delve into essential kitchen tools, share mouthwatering recipes, and offer lifestyle tips to enrich your daily routine.",
};


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
