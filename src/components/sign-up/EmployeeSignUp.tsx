'use client'

import { useEffect, useState } from 'react'

import { useModalStore } from '@/store/modalStore'
import ProcessBar from '@/components/common/ProcessBar'
import SignUpRequiredForm from '@/components/sign-up/employee/SignUpRequiredForm'
import SignUpAdditionalInfoForm from '@/components/sign-up/employee/SignUpAdditionalInfoForm'
import SearchAddressModal from '@/components/common/SearchAddressModal'
import { useAuthStore } from '@/store/authStore'

const EmployeeSignUp = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2>(2)
  const setModalState = useModalStore((state) => state.setState)
  const isSearchAddressModalOpen = useModalStore((state) => state.isSearchAddressModalOpen)
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)
  const setEmployeeSignUpState = useAuthStore((state) => state.setState)

  useEffect(() => {
    console.log('employeeSignUp', employeeSignUp)
  }, [employeeSignUp])

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
    setEmployeeSignUpState({
      ...employeeSignUp,
      employeeSignUp: { ...employeeSignUp, zipcode: zonecode, address1: fullAddress },
    })

    setModalState({ isSearchAddressModalOpen: false })
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-[40px]">
      {isSearchAddressModalOpen && <SearchAddressModal handleComplete={handleComplete} />}
      <div className="flex flex-col items-center justify-center gap-y-[20px]">
        <div className="desktop:block title-lg hidden">회원가입(피고용인)</div>
        <ProcessBar totalStep={2} currentStep={currentStep} step1Content={'필수 정보'} step2Content={'추가 정보'} />
      </div>
      {currentStep === 1 && <SignUpRequiredForm setCurrentStep={setCurrentStep} />}
      {currentStep === 2 && <SignUpAdditionalInfoForm setCurrentStep={setCurrentStep} />}
    </div>
  )
}
export default EmployeeSignUp
