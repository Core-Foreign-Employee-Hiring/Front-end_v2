import React, { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KORFIT | 아카이브 상세페이지',
  description:
    '외국인을 위한 한국 취업 로드맵 서비스 KORFIT. 10단계 역량 검증 시스템, AI 취업 코칭, 포트폴리오 지원으로 성공적인 한국 취업을 시작하세요.',
  keywords: [
    'KORFIT',
    '외국인 취업',
    '한국 취업',
    '외국인 채용',
    '취업 로드맵',
    'AI 취업 코칭',
    '10단계 역량 검증',
    '외국인 구직',
    '한국 일자리',
    '글로벌 인재',
    '취업 플랫폼',
    '채용 정보',
    '포트폴리오 지원',
    '취업 역량 강화',
  ],
  openGraph: {
    title: '아카이브 상세페이지',
    description:
      '외국인을 위한 한국 취업 로드맵 서비스 KORFIT. 10단계 역량 검증 시스템, AI 취업 코칭, 포트폴리오 지원으로 성공적인 한국 취업을 시작하세요.',
    url: 'https://forwork-xi.vercel.app',
    siteName: 'KORFIT',
    images: [
      {
        url: 'https://coreforwork.s3.ap-northeast-2.amazonaws.com/file/FowfcOVfTZCgKLuU/file_2025-07-22_00:23:20.png',
        width: 1200,
        height: 630,
        alt: 'KORFIT - 외국인을 위한 한국 취업 플랫폼',
      },
    ],
    type: 'website',
    locale: 'ko_KR',
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
    canonical: 'https://forwork-xi.vercel.app', // 실제 도메인으로 수정 필요
  },
}

export default async function RecruitLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div className="">
      <main className="">{children}</main>
    </div>
  )
}
