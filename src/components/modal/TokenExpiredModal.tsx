'use client'
import MiddleModal from '@/components/common/MiddleModal'
import Link from 'next/link'
import { useModalStore } from '@/store/modalStore'

interface TokenExpiredModalProps {
  isModalOpen: boolean
}

export default function TokenExpiredModal({ isModalOpen }: TokenExpiredModalProps) {
  const setState = useModalStore((state) => state.setState)
  return (
    <MiddleModal isModalOpen={isModalOpen} modalType={'GENERAL'}>
      <p className="title-lg">로그인을 다시 진행해주세요.</p>
      <Link
        href={'/login'}
        onClick={() => {
          setState({ isTokenExpiredModalOpen: false })
        }}
      >
        로그인
      </Link>
    </MiddleModal>
  )
}
