'use client'

import Header from '@/components/common/Header'
import BottomButton from '@/components/recruit/form/BottomButton'
import { useEffect, useState } from 'react'
import RecruitFormStep1 from '@/components/recruit/form/RecruitFormStep1'
import RecruitFormStep2 from '@/components/recruit/form/RecruitFormStep2'
import RecruitFormStep3 from '@/components/recruit/form/RecruitFormStep3'
import { useRecruitStore } from '@/store/recruitStore'
import { useModalStore } from '@/store/modalStore'
import SearchAddressModal from '@/components/common/SearchAddressModal'

export default function RecruitFormPage() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const setState = useRecruitStore((state) => state.setState)
  const setModalState = useModalStore((state) => state.setState)
  const isSearchAddressModalOpen = useModalStore((state) => state.isSearchAddressModalOpen)
  useEffect(() => {
    console.log('recruitPostData', recruitPostData)
  }, [recruitPostData])

  const handleComplete = async (data: any) => {
    let fullAddress = data.address
    let extraAddress = ''

    const { addressType, bname, buildingName, zonecode } = data
    console.log('data', data)

    if (addressType === 'R') {
      if (bname !== '') {
        extraAddress += bname
      }
      if (buildingName !== '') {
        extraAddress += `${extraAddress !== '' && ', '}${buildingName}`
      }
      fullAddress += `${extraAddress !== '' ? ` ${extraAddress}` : ''}`
    }
    setState({
      ...recruitPostData,
      recruitPostData: { ...recruitPostData, zipcode: zonecode, address1: fullAddress },
    })

    setModalState({ isSearchAddressModalOpen: false })
  }

  return (
    <main>
      {isSearchAddressModalOpen && <SearchAddressModal handleComplete={handleComplete} />}
      <Header />
      <div className="h-[80px]" />
      {currentStep === 1 && <RecruitFormStep1 currentStep={currentStep} />}
      {currentStep === 2 && <RecruitFormStep2 currentStep={currentStep} />}
      {currentStep === 3 && <RecruitFormStep3 currentStep={currentStep} />}
      <div className="h-[100px]" />
      <BottomButton currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </main>
  )
}
