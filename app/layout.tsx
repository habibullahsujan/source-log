import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'
import clsx from "clsx";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from '@next/third-parties/google'
export const metadata: Metadata = {
  title: "دليلك لحياة أبسط في المملكة العربية السعودية",
  description: "اكتشف المعرفة الداخلية والأدلة العملية لتجعل حياتك في المملكة العربية السعودية أسهل وأكثر متعة. اكتشف الحلول الفعالة لكل شيء بدءًا من الأعمال المنزلية وحتى الرعاية الصحية والترفيه.",
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
