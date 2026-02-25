import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from "@/components/Analytics";
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BMI Calculator - Calculate Your Body Mass Index | Free Online Tool',
  description: 'Free BMI calculator with metric and imperial units. Calculate your Body Mass Index and understand your weight category with our easy-to-use tool.',
  keywords: 'bmi calculator, body mass index calculator, calculate bmi, bmi chart, weight calculator, health calculator, obesity calculator, underweight calculator',
  authors: [{ name: "Larry's World" }],
  creator: "Larry's World",
  publisher: "Larry's World",
  openGraph: {
    title: 'BMI Calculator - Calculate Your Body Mass Index',
    description: 'Free BMI calculator with metric and imperial units. Calculate your Body Mass Index and understand your weight category.',
    url: "https://larrys-world.github.io/bmi-calculator/",
    siteName: "Larry's World Tools",
    type: 'website',
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BMI Calculator - Calculate Your Body Mass Index",
    description: "Free BMI calculator with metric and imperial units. Calculate your Body Mass Index instantly.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://larrys-world.github.io/bmi-calculator/",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "BMI Calculator",
              "description": "Calculate your Body Mass Index (BMI) with metric and imperial units",
              "url": "https://larrys-world.github.io/bmi-calculator/",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Larry's World",
                "url": "https://larrys-world.github.io"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Analytics />
        {children}
      </body>
    </html>
  )
}