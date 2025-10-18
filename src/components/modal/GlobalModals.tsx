'use client'
// 전역 모달 관리 컴포넌트
import { useModalStore } from '@/store/modalStore'
import TokenExpiredModal from '@/components/modal/TokenExpiredModal'
import LanguageSelectModal from '@/components/modal/LanguageSelectModal'
import AlarmModal from '@/components/modal/AlarmModal'

export default function GlobalModals() {
  const isTokenExpiredModalOpen = useModalStore((state) => state.isTokenExpiredModalOpen)
  const isLanguageSelectModalOpen = useModalStore((state) => state.isLanguageSelectModalOpen)
  const isAlarmModalOpen = useModalStore((state) => state.isAlarmModalOpen)

  return (
    <>
      {isTokenExpiredModalOpen && <TokenExpiredModal isModalOpen={isTokenExpiredModalOpen} />}
      {isLanguageSelectModalOpen && <LanguageSelectModal />}
      {isAlarmModalOpen && <AlarmModal />}
      {}
    </>
  )
}
