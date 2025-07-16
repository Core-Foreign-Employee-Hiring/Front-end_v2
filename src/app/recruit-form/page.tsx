'use client'

import Header from '@/components/common/Header'
import BottomButton from '@/components/recruit/form/BottomButton'
import { useState } from 'react'
import RecruitFormStep1 from '@/components/recruit/form/RecruitFormStep1'
import RecruitFormStep2 from '@/components/recruit/form/RecruitFormStep2'
import RecruitFormStep3 from '@/components/recruit/form/RecruitFormStep3'

export default function RecruitFormPage() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1)
  return (
    <main>
      <Header />
      <div className="h-[80px]" />
      {currentStep === 1 && <RecruitFormStep1 currentStep={currentStep} />}
      {currentStep === 2 && <RecruitFormStep2 currentStep={currentStep} />}
      {currentStep === 3 && <RecruitFormStep3 currentStep={currentStep} />}
      <BottomButton currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </main>
  )
}
