// components/ScriptLoader.tsx
'use client'

import Script from 'next/script'

/**
 * 외부 스크립트(결제, 분석 등)를 로드하는 클라이언트 컴포넌트
 * RootLayout에서 분리하여 서버/클라이언트 경계를 명확히 함
 */
export function ScriptLoader() {
  return (
    <>
      {/* 토스페이먼츠 스크립트 */}
      <Script
        src="https://js.tosspayments.com/v1"
        strategy="beforeInteractive"
        onError={(error) => {
          console.error('토스페이먼츠 스크립트 로드 실패:', error)
        }}
      />

      {/* Google Analytics */}
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
    </>
  )
}
