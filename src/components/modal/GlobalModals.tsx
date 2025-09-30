'use client'
// 전역 모달 관리 컴포넌트
import { useModalStore } from '@/store/modalStore'
import TokenExpiredModal from '@/components/modal/TokenExpiredModal'

export default function GlobalModals() {
  const isTokenExpiredModalOpen = useModalStore((state) => state.isTokenExpiredModalOpen)

  return <>{isTokenExpiredModalOpen && <TokenExpiredModal isModalOpen={isTokenExpiredModalOpen} />}</>
}
