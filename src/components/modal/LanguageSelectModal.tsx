import MiddleModal from '@/components/common/MiddleModal'
import { Dispatch, SetStateAction, useState } from 'react'
import Button from '@/components/common/Button'
import { CheckIcon } from '@/assets/svgComponents'

interface LanguageSelectModalProps {
  setIsLanguageSelectModalOpen: Dispatch<SetStateAction<boolean>>
  isLanguageSelectModalOpen: boolean
}

export default function LanguageSelectModal({
  setIsLanguageSelectModalOpen,
  isLanguageSelectModalOpen,
}: LanguageSelectModalProps) {
  return (
    <MiddleModal
      setIsModalOpen={setIsLanguageSelectModalOpen}
      isModalOpen={isLanguageSelectModalOpen}
      title={'언어 선택'}
    >
      <div className={'flex flex-col gap-y-6'}>
        <div className="bg-gray1 flex h-[52px] items-center justify-between rounded-[16px] px-4 py-3">
          <CheckIcon width={24} height={24} />
          <p className="body-md text-gray5">한국어</p>
        </div>
        <Button
          onClick={() => {
            setIsLanguageSelectModalOpen(!isLanguageSelectModalOpen)
          }}
          type={'active'}
          size={'lg'}
        >
          완료
        </Button>
      </div>
    </MiddleModal>
  )
}
