// components/layout/LayoutContent.tsx
'use client'

import { useModalStore } from '@/store/modalStore'
import GlobalModals from '@/components/modal/GlobalModals'
import Header from '@/components/common/Header'
import Menu from '@/components/common/Menu'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const isHomeMenuOpen = useModalStore((state) => state.isHomeMenuOpen)
  const router = useRouter()

  useEffect(() => {
    // 🔥 Next.js 라우팅 변화 감지
    console.log('✅ LayoutContent 마운트됨')

    // 페이지가 보여질 때 (즉, 라우팅이 완료됐을 때)
    const handlePageshow = (event: Event) => {
      const pageEvent = event as any

      console.log('📄 pageshow 이벤트 발생')
      console.log('persisted:', pageEvent.persisted)

      if (pageEvent.persisted) {
        console.log('✅ Page restored from bfcache')
        console.log('현재 시간:', new Date().toLocaleTimeString())
      } else {
        console.log('📄 Page loaded normally')
      }
    }

    const handlePagehide = (event: Event) => {
      const pageEvent = event as any

      console.log('👋 pagehide 이벤트 발생')
      console.log('persisted:', pageEvent.persisted)

      if (pageEvent.persisted) {
        console.log('📦 Page entering bfcache')
        console.log('현재 시간:', new Date().toLocaleTimeString())
      } else {
        console.log('🚪 Page is being unloaded')
      }
    }

    // 🔥 이벤트 리스너 등록
    window.addEventListener('pageshow', handlePageshow)
    window.addEventListener('pagehide', handlePagehide)

    console.log('🔍 이벤트 리스너 등록 완료')

    return () => {
      window.removeEventListener('pageshow', handlePageshow)
      window.removeEventListener('pagehide', handlePagehide)
      console.log('🔍 이벤트 리스너 제거됨')
    }
  }, [])

  return (
    <main className="relative mx-auto min-h-screen w-[375px] overflow-hidden bg-white">
      <Header headerType={'default'} />
      <div className="h-[80px]" />

      {isHomeMenuOpen ? <Menu /> : children}

      <GlobalModals />
    </main>
  )
}
