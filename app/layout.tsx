import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from "@/components/Analytics";
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BMI Calculator - Calculate Your Body Mass Index',
  description: 'Free BMI calculator with metric and imperial units. Calculate your Body Mass Index and understand your weight category with our easy-to-use tool.',
  keywords: 'bmi calculator, body mass index calculator, calculate bmi, bmi chart, weight calculator, health calculator',
  openGraph: {
    title: 'BMI Calculator - Calculate Your Body Mass Index',
    description: 'Free BMI calculator with metric and imperial units. Calculate your Body Mass Index and understand your weight category.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <Analytics />
        {children}
      </body>
    </html>
  )
}