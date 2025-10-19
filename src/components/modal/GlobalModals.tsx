'use client'
// 전역 모달 관리 컴포넌트
import { useModalStore } from '@/store/modalStore'
import TokenExpiredModal from '@/components/modal/TokenExpiredModal'
import LanguageSelectModal from '@/components/modal/LanguageSelectModal'
import AlarmModal from '@/components/modal/AlarmModal'
import { useEffect } from 'react'

export default function GlobalModals() {
  const isTokenExpiredModalOpen = useModalStore((state) => state.isTokenExpiredModalOpen)
  const isLanguageSelectModalOpen = useModalStore((state) => state.isLanguageSelectModalOpen)
  const isAlarmModalOpen = useModalStore((state) => state.isAlarmModalOpen)
  const setModalState = useModalStore((state) => state.setState)

  // 🔥 bfcache 진입 시 모든 모달 닫기
  useEffect(() => {
    const handlePagehide = (event: Event) => {
      const e = event as any
      if (e.persisted) {
        // bfcache로 들어가기 전에 모든 모달 닫기
        setModalState({
          isTokenExpiredModalOpen: false,
          isLanguageSelectModalOpen: false,
          isAlarmModalOpen: false,
        })
      }
    }

    window.addEventListener('pagehide', handlePagehide)

    return () => {
      window.removeEventListener('pagehide', handlePagehide)
    }
  }, [setModalState])

  return (
    <>
      {isTokenExpiredModalOpen && <TokenExpiredModal isModalOpen={isTokenExpiredModalOpen} />}
      {isLanguageSelectModalOpen && <LanguageSelectModal />}
      {isAlarmModalOpen && <AlarmModal />}
      {}
    </>
  )
}
