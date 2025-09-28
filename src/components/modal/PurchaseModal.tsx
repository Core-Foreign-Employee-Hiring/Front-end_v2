import MiddleModal from '@/components/common/MiddleModal'
import { Dispatch, SetStateAction } from 'react'

interface PurchaseModalProps {
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export default function PurchaseModal({ isModalOpen, setIsModalOpen }: PurchaseModalProps) {
  return (
    <MiddleModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modalType={'GENERAL'}>
      <div>
        <p className="title-md">
          <span className="text-main">구매</span>가 완료되었어요!
        </p>
        <p className="body-sm">
          구매한 내역은 <span className="subtitle-sm">마이페이지 → 내 아카이브</span>에서 확인할 수 있어요.
        </p>
      </div>
    </MiddleModal>
  )
}
