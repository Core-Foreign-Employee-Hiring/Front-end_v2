'use client'
// 전역 모달 관리 컴포넌트
import { useModalStore } from '@/store/modalStore'
import TokenExpiredModal from '@/components/modal/TokenExpiredModal'
import LanguageSelectModal from '@/components/modal/LanguageSelectModal'
import AlarmModal from '@/components/modal/AlarmModal'
import { useState } from 'react'
import i18n from 'i18next'

interface GlobalModalsProps {
  currentLng: string
}

export default function GlobalModals({ currentLng }: GlobalModalsProps) {
  const isTokenExpiredModalOpen = useModalStore((state) => state.isTokenExpiredModalOpen)
  const isLanguageSelectModalOpen = useModalStore((state) => state.isLanguageSelectModalOpen)
  const isAlarmModalOpen = useModalStore((state) => state.isAlarmModalOpen)
  const setModalState = useModalStore((state) => state.setState)
  const [lng, setLng] = useState(currentLng)

  // 언어 변경 시 페이지 새로고침 (선택사항)
  const handleLanguageChange = (langCode: string) => {
    localStorage.setItem('language', langCode)
    setLng(langCode)
    i18n.changeLanguage(langCode)
    setModalState({ isLanguageSelectModalOpen: false })

    // 필요시 페이지 전체 새로고침
    // window.location.reload()
  }

  return (
    <>
      {isTokenExpiredModalOpen && <TokenExpiredModal isModalOpen={isTokenExpiredModalOpen} />}
      {isLanguageSelectModalOpen && <LanguageSelectModal onLanguageChange={handleLanguageChange} />}
      {isAlarmModalOpen && <AlarmModal />}
    </>
  )
}
