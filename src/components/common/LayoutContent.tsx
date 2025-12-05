// components/layout/LayoutContent.tsx
'use client'

import { useModalStore } from '@/store/modalStore'
import GlobalModals from '@/components/modal/GlobalModals'
import Menu from '@/components/common/Menu'
import React, { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const isHomeMenuOpen = useModalStore((state) => state.isHomeMenuOpen)
  const pathname = usePathname()
  const locale = pathname.split('/')[1]

  return (
    <main className="relative mx-auto min-h-screen w-[375px] overflow-hidden bg-white">
      <div className="h-[80px]" />

      {isHomeMenuOpen ? <Menu currentLng={locale} /> : children}

      <GlobalModals currentLng={locale} />
    </main>
  )
}
