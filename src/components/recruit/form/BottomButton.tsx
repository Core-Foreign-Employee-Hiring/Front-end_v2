'use client'

import Button from '@/components/common/Button'
import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/navigation'

interface BottomButtonProps {
  currentStep: 1 | 2 | 3
  setCurrentStep: Dispatch<SetStateAction<1 | 2 | 3>>
}

export default function BottomButton({ currentStep, setCurrentStep }: BottomButtonProps) {
  const router = useRouter()

  const renderBottomButton = (currentStep: 1 | 2 | 3) => {
    switch (currentStep) {
      case 1:
        return (
          <div className="absolute bottom-0 flex w-full gap-x-4 bg-white px-[26px] pt-[10px] pb-[32px]">
            <Button
              buttonType={'button'}
              onClick={() => {
                setCurrentStep(2)
              }}
              customClassName={'w-full'}
              type={'active'}
              size={'lg'}
            >
              다음
            </Button>
          </div>
        )
      case 2:
        return (
          <div className="absolute bottom-0 flex w-full gap-x-3 bg-white px-[26px] pt-[10px] pb-[32px]">
            <Button
              buttonType={'button'}
              onClick={() => {
                setCurrentStep(1)
              }}
              customClassName={'w-full whitespace-nowrap'}
              type={'outline'}
              size={'lg'}
            >
              이전
            </Button>
            <Button
              buttonType={'button'}
              onClick={() => {
                setCurrentStep(3)
              }}
              customClassName={'w-full'}
              type={'active'}
              size={'lg'}
            >
              다음
            </Button>
          </div>
        )
      default:
        return (
          <div className="absolute bottom-0 flex w-full gap-x-3 bg-white px-[26px] pt-[10px] pb-[32px]">
            <Button
              buttonType={'button'}
              onClick={() => {
                setCurrentStep(2)
              }}
              customClassName={'w-full whitespace-nowrap'}
              type={'outline'}
              size={'lg'}
            >
              이전
            </Button>
            <Button
              buttonType={'submit'}
              onClick={() => {
                // router.push('/')
              }}
              customClassName={'w-full'}
              type={'active'}
              size={'lg'}
            >
              완료
            </Button>
          </div>
        )
    }
  }
  return <>{renderBottomButton(currentStep)}</>
}
