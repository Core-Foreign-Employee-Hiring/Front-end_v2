'use client'

import Button from '@/components/common/Button'
import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/navigation'
import { useRecruitStore } from '@/store/recruitStore'

interface BottomButtonProps {
  currentStep: 1 | 2 | 3
  setCurrentStep: Dispatch<SetStateAction<1 | 2 | 3>>
}

export default function BottomButton({ currentStep, setCurrentStep }: BottomButtonProps) {
  const router = useRouter()
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)

  // 필수 필드 리스트
  const step1RequiredFields = [
    'title',
    'companyName',
    // 'companyImageUrl',
    'zipcode',
    'address1',
    'address2',
    'companyType',
    'representativeName',
    'establishedDate',
    'businessType',
  ]

  // 하나라도 undefined/null/빈 문자열이면 false
  const isStep1AllFilled = step1RequiredFields.every((field) => {
    const value = recruitPostData[field as keyof typeof recruitPostData]
    return value !== undefined && value !== null && value !== ''
  })

  const renderBottomButton = (currentStep: 1 | 2 | 3) => {
    switch (currentStep) {
      case 1:
        return (
          <div className="fixed bottom-0 flex w-full gap-x-4 bg-white px-[26px] pt-[10px] pb-[32px]">
            <Button onClick={() => {}} customClassName={'w-full'} type={'outline'} size={'lg'}>
              임시저장
            </Button>
            <Button
              onClick={() => {
                setCurrentStep(2)
              }}
              disabled={!isStep1AllFilled}
              customClassName={'w-full'}
              type={isStep1AllFilled ? 'active' : 'disabled'}
              size={'lg'}
            >
              다음
            </Button>
          </div>
        )
      case 2:
        return (
          <div className="fixed bottom-0 flex w-full gap-x-3 bg-white px-[26px] pt-[10px] pb-[32px]">
            <Button
              onClick={() => {
                setCurrentStep(1)
              }}
              customClassName={'w-[96px] whitespace-nowrap'}
              type={'outline'}
              size={'lg'}
            >
              이전
            </Button>
            <Button onClick={() => {}} customClassName={'w-full'} type={'outline'} size={'lg'}>
              임시저장
            </Button>
            <Button
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
          <div className="fixed bottom-0 flex w-full gap-x-3 bg-white px-[26px] pt-[10px] pb-[32px]">
            <Button
              onClick={() => {
                setCurrentStep(2)
              }}
              customClassName={'w-[96px] whitespace-nowrap'}
              type={'outline'}
              size={'lg'}
            >
              이전
            </Button>
            <Button onClick={() => {}} customClassName={'w-full'} type={'outline'} size={'lg'}>
              임시저장
            </Button>
            <Button
              onClick={() => {
                router.push('/')
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
