'use client'

import Header from '@/components/common/Header'
import BottomButton from '@/components/recruit/form/BottomButton'
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import RecruitFormStep1 from '@/components/recruit/form/RecruitFormStep1'
import RecruitFormStep2 from '@/components/recruit/form/RecruitFormStep2'
import RecruitFormStep3 from '@/components/recruit/form/RecruitFormStep3'
import { useRecruitStore } from '@/store/recruitStore'
import { useModalStore } from '@/store/modalStore'
import SearchAddressModal from '@/components/common/SearchAddressModal'
import { postRecruit, postS3File } from '@/lib/recruit-form'
import { useRouter } from 'next/navigation'
import { ApiResponse } from '@/types/common'

export default function RecruitFormPage() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const setState = useRecruitStore((state) => state.setState)
  const setModalState = useModalStore((state) => state.setState)
  const isSearchAddressModalOpen = useModalStore((state) => state.isSearchAddressModalOpen)
  const router = useRouter()

  //이미지
  const [companyLogoFile, setCompanyLogoFile] = useState<File | null>(null)
  const [posterFile, setPosterFile] = useState<File | null>(null)

  /**
   * 카카오 맵
   * @param data
   */
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

  /**
   * 개별 이미지 파일 업로드 함수
   */
  const uploadImageFile = async (file: File): Promise<string | null | undefined> => {
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response: ApiResponse<string> = await postS3File(formData)
      console.log('s3업로드', response)

      if (response.success) {
        return response.data
      }

      console.error('파일 업로드 실패:', response.message)
      return null
    } catch (error) {
      console.error('파일 업로드 중 오류:', error)
      return null
    }
  }

  /**
   * form 형식 제출 함수
   */
  const handleSubmit = async () => {
    try {
      let companyImageUrl = ''
      let posterImageUrl = ''

      // 회사 로고 이미지 업로드
      if (companyLogoFile) {
        const uploadedCompanyLogoUrl = await uploadImageFile(companyLogoFile)
        if (uploadedCompanyLogoUrl) {
          companyImageUrl = uploadedCompanyLogoUrl
        }
      }

      // 포스터 이미지 업로드
      if (posterFile) {
        const uploadedPosterUrl = await uploadImageFile(posterFile)
        if (uploadedPosterUrl) {
          posterImageUrl = uploadedPosterUrl
        }
      }

      // 업데이트된 데이터를 변수로 생성
      const updatedRecruitData = {
        ...recruitPostData,
        companyImageUrl: companyImageUrl,
        posterImageUrl: posterImageUrl,
      }

      // 스토어에 저장
      setState({
        recruitPostData: updatedRecruitData,
      })

      console.log('이미지 업로드 완료 - 회사로고:', companyImageUrl, '포스터:', posterImageUrl)

      // 업데이트된 데이터를 직접 사용
      const data = await postRecruit(updatedRecruitData)
      console.log('공고 생성', data)

      router.push('/')
    } catch (error) {
      console.error('제출 중 오류:', error)
      // 필요시 에러 처리 로직 추가
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative mx-auto min-h-screen w-[375px] bg-white">
      <div className="">
        <Header headerType={'dynamic'} />
      </div>

      {isSearchAddressModalOpen && <SearchAddressModal handleComplete={handleComplete} />}
      <div className="h-[20px]" />
      {currentStep === 1 && <RecruitFormStep1 currentStep={currentStep} setCompanyLogoFile={setCompanyLogoFile} />}
      {currentStep === 2 && <RecruitFormStep2 currentStep={currentStep} />}
      {currentStep === 3 && <RecruitFormStep3 currentStep={currentStep} setPosterFile={setPosterFile} />}
      <div className="h-[100px]" />
      <BottomButton handleSubmit={handleSubmit} currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </form>
  )
}
