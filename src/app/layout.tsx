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
  title: 'Korfit',
  description: 'Kickstart your job in Korea with a hiring roadmap for foreigners.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <head>
        {/* 폰트 preload */}
        <link
          rel="preload"
          href="/fonts/PretendardVariable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch & preconnect */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />

        {/* 크리티컬 CSS 인라인 */}
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

        {/* 🔥 GA 스크립트 - defer 옵션으로 파싱 블로킹 방지 */}
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
              window.gtag = gtag;
              gtag('js', new Date());
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
