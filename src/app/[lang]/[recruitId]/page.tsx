'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { usePathname } from 'next/navigation'
import { getRecruitDetailData } from '@/lib/recruit'
import { ApiResponse } from '@/types/common'
import { RecruitInputDataType } from '@/types/recruit'
import {
  changeCompanyTypeEnumToKor,
  changeEnumToKorWorkDaysType,
  changeEnumToKorWorkDaysTypeLabel,
  changeEnumToKorWorkType,
  changeEnumToKorWorkTypeLabel,
  convertEnumToKorContractType,
  convertEnumToKorContractTypeLabel,
  convertEnumToKorSalaryType,
  convertEnumToKorSalaryTypeLabel,
  SalaryTypeClassName,
} from '@/utils/recruit'
import { FaceIcon, TripIcon } from '@/assets/svgComponents'
import ApplicationModal from '@/components/modal/ApplicationModal'
import ImageModal from '@/components/common/ImageModal'
import { getJobCategoryLabel } from '@/utils/filterList'
import { useTranslation } from 'react-i18next'

const RecruitDetailPage = () => {
  const pathName = usePathname()
  const recruitId = pathName.split('/')[2]
  console.log('recruitId', recruitId)

  const [recruitData, setRecruitData] = useState<RecruitInputDataType>()

  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  //지원하기 모달창 제어
  const [isApplicationMethodModalOpen, setIsApplicationMethodModalOpen] = useState(false)
  //이미지 모달창 제어
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | undefined | null>()

  useEffect(() => {
    getRecruitDetailData(recruitId).then((response: ApiResponse<RecruitInputDataType>) => {
      setRecruitData(response.data)
      console.log(response.data)
    })
  }, [pathName])

  const formatDate = (dateString: string | undefined | null) => {
    if (dateString) {
      // "2025-07-16" -> ["2025", "07", "16"]
      const [year, month, day] = dateString.split('-')
      return `${month}.${day}`
    }
  }

  return (
    <main>
      {isImageModalOpen ? (
        <ImageModal
          ImageUrl={selectedImageUrl}
          setSelectedImageUrl={setSelectedImageUrl}
          setIsImageModalOpen={setIsImageModalOpen}
        />
      ) : null}
      {isApplicationMethodModalOpen && (
        <ApplicationModal
          applicationMethod={recruitData?.applicationMethod}
          directInputApplicationMethod={recruitData?.directInputApplicationMethod}
          isApplicationMethodModalOpen={isApplicationMethodModalOpen}
          setIsApplicationMethodModalOpen={setIsApplicationMethodModalOpen}
        />
      )}
      <div className="relative mx-auto min-h-screen w-[375px] bg-white pt-[80px]">
        {!recruitData ? (
          <div>로딩중</div>
        ) : (
          <div className="flex flex-col gap-y-[40px] px-5">
            <section className="border-gray2 flex flex-col gap-y-[24px] rounded-[32px] border p-5">
              <section className="flex flex-col gap-y-[24px]">
                <div className="flex flex-col gap-y-3">
                  <p className="button text-gray4">~{formatDate(recruitData.recruitEndDate)}</p>
                  <p className="title-md">{recruitData.title}</p>
                  <p className="subtitle-md text-gray5">{recruitData.companyName}</p>
                </div>
              </section>

              <section className="flex justify-evenly">
                {recruitData.contractType ? (
                  <section className="flex flex-col items-center gap-y-2">
                    <div className="bg-gray1 flex h-[44px] w-[44px] items-center justify-center rounded-full">
                      <FaceIcon width={19} height={19} />
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="body-md text-main">
                        {t(convertEnumToKorContractTypeLabel(recruitData.contractType))}
                      </p>
                      <p className="body-md text-gray4">{recruitData.directInputContractType}</p>
                    </div>
                  </section>
                ) : null}
                <section className="flex flex-col items-center gap-y-2">
                  <div className="bg-gray1 flex h-[44px] w-[44px] items-center justify-center rounded-full">
                    <TripIcon width={19} height={19} />
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="body-md text-main">{t(changeEnumToKorWorkTypeLabel(recruitData.workType))}</p>
                    <p className="body-md text-gray4">{recruitData.directInputWorkType}</p>
                  </div>
                </section>
              </section>

              <section className="flex flex-col gap-y-[20px]">
                <div className="border-gray2 border-b"></div>
                {recruitData.jobCategories ? (
                  <div className="flex items-center">
                    <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">
                      {t('recruitDetail.recruitInfo.jobCategories')}
                    </div>
                    <div className="flex w-[80%] flex-wrap gap-1">
                      {recruitData.jobCategories.map((jobCategory) => {
                        return (
                          <div key={jobCategory} className="badge-md text-gray4 bg-gray2 rounded-[8px] px-2 py-1">
                            {t(getJobCategoryLabel(jobCategory))}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ) : null}
                {recruitData.workDayType ? (
                  <div className="flex">
                    <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">
                      {t('recruitDetail.recruitInfo.workDayType')}
                    </div>
                    <div className="flex w-[80%] flex-col">
                      <p className="body-md">{t(changeEnumToKorWorkDaysTypeLabel(recruitData.workDayType))}</p>
                      {recruitData.directInputWorkDayType ? (
                        <p className="body-md text-gray5">{recruitData.directInputWorkDayType}</p>
                      ) : null}
                    </div>
                  </div>
                ) : null}

                {recruitData.workStartTime || recruitData.workEndTime ? (
                  <div className="flex">
                    <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">
                      {t('recruitDetail.recruitInfo.workTime')}
                    </div>
                    <div className="flex w-[80%] flex-col">
                      <p className="body-md">
                        {recruitData.workStartTime} ~ {recruitData.workEndTime}
                      </p>
                      {recruitData.directInputWorkTime ? (
                        <p className="body-md text-gray5">{recruitData.directInputWorkTime}</p>
                      ) : null}
                    </div>
                  </div>
                ) : null}

                {recruitData.salary ? (
                  <div className="flex">
                    <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">
                      {t('recruitDetail.recruitInfo.salary')}
                    </div>
                    <div className="flex w-[80%] flex-col">
                      <div className="flex items-center gap-x-2">
                        {recruitData.salaryType ? (
                          <div className={SalaryTypeClassName(recruitData.salaryType)}>
                            <p className="badge-sm">{t(convertEnumToKorSalaryTypeLabel(recruitData.salaryType))}</p>
                          </div>
                        ) : null}
                        <p className="body-md">
                          {recruitData.salary?.toLocaleString()}
                          {t('recruitDetail.recruitInfo.salarySymbol')}
                        </p>
                      </div>
                      {recruitData.directInputSalaryType ? (
                        <p className="body-md text-gray5">{recruitData.directInputSalaryType}</p>
                      ) : null}
                    </div>
                  </div>
                ) : null}

                {(recruitData.address1 || recruitData.address2) && (
                  <div className="flex">
                    <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">
                      {t('recruitDetail.recruitInfo.address')}
                    </div>
                    <p className="body-md w-[80%]">
                      {recruitData.address1} {recruitData.address2}
                    </p>
                  </div>
                )}
              </section>
            </section>

            {/* 상세 정보 */}
            <section className="flex flex-col gap-y-[12px]">
              <h2 className="title-lg">{t('recruitDetail.detailInfo.title')}</h2>
              {recruitData.posterImageUrl ? (
                <div className="relative h-[500px] w-[335px] rounded-[32px]">
                  <Image
                    onClick={() => {
                      setSelectedImageUrl(recruitData?.posterImageUrl)
                      setIsImageModalOpen(true)
                    }}
                    src={recruitData.posterImageUrl || '/pizza.png'}
                    alt={'이미지'}
                    className={'rounded-[32px] object-cover'}
                    fill
                  />
                </div>
              ) : null}
              {(recruitData.mainTasks ||
                recruitData.qualifications ||
                recruitData.preferences ||
                recruitData.others) && (
                <div className="border-gray2 flex flex-col gap-y-3 rounded-[20px] border p-5">
                  {recruitData.mainTasks ? (
                    <div className="flex">
                      <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">
                        {t('recruitDetail.detailInfo.mainTasks')}
                      </div>
                      <p className="body-md text-gray5 w-[215px]" style={{ whiteSpace: 'pre-wrap' }}>
                        {recruitData.mainTasks}
                      </p>
                    </div>
                  ) : null}
                  {recruitData.qualifications ? (
                    <div className="flex">
                      <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">
                        {t('recruitDetail.detailInfo.qualifications')}
                      </div>
                      <p className="body-md text-gray5 w-[215px]" style={{ whiteSpace: 'pre-wrap' }}>
                        {recruitData.qualifications}
                      </p>
                    </div>
                  ) : null}
                  {recruitData.preferences ? (
                    <div className="flex">
                      <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">
                        {t('recruitDetail.detailInfo.preferences')}
                      </div>
                      <p className="body-md text-gray5 w-[215px]" style={{ whiteSpace: 'pre-wrap' }}>
                        {recruitData.preferences}
                      </p>
                    </div>
                  ) : null}
                  {recruitData.others ? (
                    <div className="flex">
                      <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">
                        {t('recruitDetail.detailInfo.others')}
                      </div>
                      <p className="body-md text-gray5 w-[215px]" style={{ whiteSpace: 'pre-wrap' }}>
                        {recruitData.others}
                      </p>
                    </div>
                  ) : null}
                </div>
              )}
            </section>

            {/* 회사 정보 */}
            <section className="flex flex-col gap-y-[24px] rounded-[32px]">
              <section className="flex gap-x-3">
                {recruitData.companyImageUrl ? (
                  <div className="border-gray2 relative h-[100px] w-[100px] rounded-[12px] border">
                    <Image
                      onClick={() => {
                        setSelectedImageUrl(recruitData?.companyImageUrl)
                        setIsImageModalOpen(true)
                      }}
                      src={recruitData.companyImageUrl}
                      alt={'이미지'}
                      className={'rounded-[12px] object-cover'}
                      fill
                    />
                  </div>
                ) : null}
                <p className="title-md">{recruitData.companyName}</p>
              </section>
              <section className="flex flex-col gap-y-[20px]">
                {recruitData.address1 || recruitData.address2 ? (
                  <div className="flex">
                    <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">
                      {t('recruitDetail.companyInfo.companyAddress')}
                    </div>
                    <p className="body-md w-[80%]">
                      {recruitData.address1} {recruitData.address2}
                    </p>
                  </div>
                ) : null}
                {recruitData.representativeName ? (
                  <div className="flex">
                    <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">
                      {t('recruitDetail.companyInfo.companyAddress')}
                      {t('recruitDetail.companyInfo.representativeName')}
                    </div>
                    <p className="body-md w-[80%]">{recruitData.representativeName}</p>
                  </div>
                ) : null}
                {recruitData.businessType ? (
                  <div className="flex">
                    <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">
                      {t('recruitDetail.companyInfo.businessType')}
                    </div>
                    <p className="body-md w-[80%]">{recruitData.businessType}</p>
                  </div>
                ) : null}

                {recruitData.companyType ? (
                  <div className="flex">
                    <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">
                      {t('recruitDetail.companyInfo.companyType')}
                    </div>
                    <p className="body-md w-[80%]">{changeCompanyTypeEnumToKor(recruitData.companyType)}</p>
                  </div>
                ) : null}
                {recruitData.establishedDate ? (
                  <div className="flex">
                    <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">
                      {t('recruitDetail.companyInfo.establishedDate')}
                    </div>
                    <p className="body-md w-[80%]">{recruitData.establishedDate}</p>
                  </div>
                ) : null}
              </section>
            </section>
            <div className="h-[80px]" />
          </div>
        )}
        <div className="absolute bottom-0 flex w-full gap-x-2 bg-white px-5 pt-3 pb-[32px]">
          <Button
            onClick={() => {
              setIsApplicationMethodModalOpen(true)
            }}
            customClassName={'w-full'}
            size={'lg'}
            type={'active'}
          >
            {t('recruitDetail.apply.title')}
          </Button>
        </div>
      </div>
    </main>
  )
}
export default RecruitDetailPage
