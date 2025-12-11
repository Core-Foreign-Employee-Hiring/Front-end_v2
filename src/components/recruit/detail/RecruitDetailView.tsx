'use client'

import { useEffect } from 'react'
import { useModal } from '@/hooks/useModal'
import { useTranslation } from 'react-i18next'

import { RecruitInputDataType } from '@/types/recruit'

import ImageModal from '@/components/common/ImageModal'
import ApplicationModal from '@/components/modal/ApplicationModal'
import Button from '@/components/common/Button'
import RecruitSummarySection from '@/components/recruit/detail/RecruitSummarySection'
import RecruitDetailSection from '@/components/recruit/detail/RecruitDetailSection'
import CompanyInfoSection from '@/components/recruit/detail/CompanyInfoSection'

interface RecruitDetailViewProps {
  recruitData: RecruitInputDataType
}

export default function RecruitDetailView({ recruitData }: RecruitDetailViewProps) {
  const applicationModal = useModal(false)
  const imageModal = useModal<string | undefined | null>(false)

  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <>
      {imageModal.isOpen ? <ImageModal ImageUrl={imageModal.content} close={imageModal.close} /> : null}
      {applicationModal.isOpen && (
        <ApplicationModal
          applicationMethod={recruitData?.applicationMethod}
          directInputApplicationMethod={recruitData?.directInputApplicationMethod}
          isOpen={applicationModal.isOpen}
          onClose={applicationModal.close}
        />
      )}
      <div className="flex flex-col gap-y-[40px] px-5">
        <RecruitSummarySection recruitData={recruitData} />
        <RecruitDetailSection open={imageModal.open} recruitData={recruitData} />
        <CompanyInfoSection open={imageModal.open} recruitData={recruitData} />
        <div className="h-[80px]" />
      </div>
      <div className="absolute bottom-0 flex w-full gap-x-2 bg-white px-5 pt-3 pb-[32px]">
        <Button onClick={applicationModal.open} customClassName={'w-full'} size={'lg'} type={'active'}>
          {t('recruitDetail.apply.title')}
        </Button>
      </div>
    </>
  )
}
