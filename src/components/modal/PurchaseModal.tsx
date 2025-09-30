import MiddleModal from '@/components/common/MiddleModal'
import { Dispatch, SetStateAction } from 'react'
import { PurchaseGraphicsIcon } from '@/assets/svgComponents'
import Button from '@/components/common/Button'

interface PurchaseModalProps {
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export default function PurchaseModal({ isModalOpen, setIsModalOpen }: PurchaseModalProps) {
  return (
    <MiddleModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modalType={'GENERAL'}>
      <div className="flex flex-col gap-y-[40px]">
        <div className="flex flex-col gap-y-2">
          <p className="title-md">
            <span className="text-main">구매</span>가 완료되었어요!
          </p>
          <p className="body-md text-gray5">
            구매한 내역은
            <br />
            <span className="subtitle-md">마이페이지 → 내 아카이브</span>에서 <br />
            확인할 수 있어요.
          </p>
        </div>
        <PurchaseGraphicsIcon width={300} height={200} />
        <Button
          buttonType={'button'}
          onClick={() => {}}
          type={'outline'}
          size={'lg'}
          customClassName={'w-full bg-white'}
        >
          닫기
        </Button>
      </div>
    </MiddleModal>
  )
}
