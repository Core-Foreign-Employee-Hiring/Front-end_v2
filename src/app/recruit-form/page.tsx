'use client'

import Header from '@/components/common/Header'
import BottomButton from '@/components/recruit/form/BottomButton'
import { FormEvent, useEffect, useRef, useState } from 'react'
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
  const companyLogoImgRef = useRef<HTMLInputElement | null>(null)
  const posterImgRef = useRef<HTMLInputElement | null>(null)

  // 스텝 변경시 스크롤 상단 이동
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [currentStep])

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
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault() // 새로고침 방지

    try {
      let companyImageUrl = ''
      let posterImageUrl = ''

      // 회사 로고 이미지 업로드
      if (companyLogoImgRef.current?.files?.[0]) {
        const uploadedCompanyLogoUrl = await uploadImageFile(companyLogoImgRef.current.files[0])
        if (uploadedCompanyLogoUrl) {
          companyImageUrl = uploadedCompanyLogoUrl
        }
      }

      // 포스터 이미지 업로드
      if (posterImgRef.current?.files?.[0]) {
        const uploadedPosterUrl = await uploadImageFile(posterImgRef.current.files[0])
        if (uploadedPosterUrl) {
          posterImageUrl = uploadedPosterUrl
        }
      }

      // 업로드된 이미지 URL들을 recruitPostData에 저장
      setState({
        ...recruitPostData,
        recruitPostData: {
          ...recruitPostData,
          companyImageUrl,
          posterImageUrl,
        },
      })

      console.log('이미지 업로드 완료 - 회사로고:', companyImageUrl, '포스터:', posterImageUrl)
      const data = await postRecruit(recruitPostData)
      console.log('공고 생성', data)

      // router.push('/')
    } catch (error) {
      console.error('제출 중 오류:', error)
      // 필요시 에러 처리 로직 추가
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {isSearchAddressModalOpen && <SearchAddressModal handleComplete={handleComplete} />}
      <Header />
      <div className="h-[80px]" />
      {currentStep === 1 && <RecruitFormStep1 currentStep={currentStep} companyLogoImgRef={companyLogoImgRef} />}
      {currentStep === 2 && <RecruitFormStep2 currentStep={currentStep} />}
      {currentStep === 3 && <RecruitFormStep3 currentStep={currentStep} posterImgRef={posterImgRef} />}
      <div className="h-[100px]" />
      <BottomButton currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </form>
  )
}
