// app/archive/page.tsx

import { Metadata } from 'next'
import ArchiveClientPage from '@/components/archive/ArchiveClientPage'

export const metadata: Metadata = {
  title: 'Archive | Korfit',
  description: 'Korfit Archive를 통해 취업한 외국인들의 이야기를 들을 수 있습니다.',
  keywords: ['아카이브', '취업 후기', '외국인 취업 성공사례', '커리어'],

  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://korfit.vercel.app/archive',
    siteName: 'Korfit',
    title: 'Archive | Korfit',
    description: 'Korfit Archive를 통해 취업한 외국인들의 이야기를 들을 수 있습니다.',
    images: [
      {
        url: 'https://korfit.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Korfit Archive',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Archive | Korfit',
    description: 'Korfit Archive를 통해 취업한 외국인들의 이야기를 들을 수 있습니다.',
    images: ['https://korfit.vercel.app/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://korfit.vercel.app/archive',
  },
}

export default async function ArchivePage() {
  return <ArchiveClientPage />
}
