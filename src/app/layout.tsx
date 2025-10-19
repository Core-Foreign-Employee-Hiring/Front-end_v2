// app/layout.tsx

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Script from 'next/script'
import React from 'react'
import LayoutContent from '@/components/common/LayoutContent'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Korfit - 외국인을 위한 한국 취업 로드맵',
  description: 'Kickstart your job in Korea with a hiring roadmap for foreigners.',
  keywords: ['한국 취업', '외국인 채용', '취업 가이드', '비자'],

  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.korfit.co.kr/',
    siteName: 'Korfit',
    title: 'Korfit - 외국인을 위한 한국 취업 로드맵',
    description: 'Kickstart your job in Korea with a hiring roadmap for foreigners.',
    images: [
      {
        url: 'https://www.korfit.co.kr/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Korfit',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Korfit',
    description: 'Kickstart your job in Korea with a hiring roadmap for foreigners.',
  },

  authors: [{ name: 'Korfit Team' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: 'https://www.korfit.co.kr/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <head>
        <meta httpEquiv="Cache-Control" content="public, max-age=3600" />
        <link
          rel="preload"
          href="/fonts/PretendardVariable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />

        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            background: white;
            font-family: var(--font-pretendard), system-ui, sans-serif;
          }
          main {
            width: 375px;
            margin: 0 auto;
            background: white;
          }
        `}</style>

        {/* Schema.org 구조화된 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Korfit',
              url: 'https://korfit.vercel.app',
              logo: 'https://korfit.vercel.app/logo.svg',
              description: 'Kickstart your job in Korea with a hiring roadmap for foreigners.',
              sameAs: ['https://www.linkedin.com/company/korfit'],
            }),
          }}
        />

        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          async
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      // 🔥 bfcache 감지 후 GA 이벤트 전송
      window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
            page_path: window.location.pathname,
          });
        }
      });
      
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
        page_path: window.location.pathname,
      });
    `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${pretendard.variable} antialiased`}>
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  )
}
