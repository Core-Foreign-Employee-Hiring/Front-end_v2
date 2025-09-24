'use client'
import Header from '@/components/common/Header'
import { useEffect, useState } from 'react'
import Menu from '@/components/common/Menu'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { usePathname } from 'next/navigation'
import { getRecruitDetailData } from '@/lib/recruit'
import { ApiResponse } from '@/types/common'
import { RecruitInputDataType } from '@/types/recruit'
import {
  changeCompanyTypeEnumToKor,
  changeEnumToKorWorkDaysType,
  changeEnumToKorWorkType,
  convertEnumToKorContractType,
  convertEnumToKorJobCategory,
  convertEnumToKorSalaryType,
  SalaryTypeClassName,
} from '@/utils/recruit'
import { FaceIcon, TripIcon } from '@/assets/svgComponents'
import LanguageSelectModal from '@/components/modal/LanguageSelectModal'
import ApplicationModal from '@/components/modal/ApplicationModal'
import ImageModal from '@/components/common/ImageModal'

const RecruitDetailPage = () => {
  const pathName = usePathname()
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false)
  const [recruitData, setRecruitData] = useState<RecruitInputDataType>()
  //언어 선택 모달창 제어
  const [isLanguageSelectModalOpen, setIsLanguageSelectModalOpen] = useState(false)
  //지원하기 모달창 제어
  const [isApplicationMethodModalOpen, setIsApplicationMethodModalOpen] = useState(false)
  //이미지 모달창 제어
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>()

  useEffect(() => {
    getRecruitDetailData(pathName).then((response: ApiResponse<RecruitInputDataType>) => {
      setRecruitData(response.data)
      console.log(response.data)
    })
  }, [])

  const formatJobCategory = () => {
    return recruitData?.jobCategories?.map((category) => convertEnumToKorJobCategory(category)).join('/')
  }

  const formatDate = (dateString: string | undefined) => {
    if (dateString) {
      // "2025-07-16" -> ["2025", "07", "16"]
      const [year, month, day] = dateString.split('-')
      return `${month}.${day}`
    }
  }

  const formatNumberWithComma = (number: number | null) => {
    if (number) return number.toLocaleString('ko-KR')
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
      <Header
        isLanguageSelectModalOpen={isLanguageSelectModalOpen}
        setIsLanguageSelectModalOpen={setIsLanguageSelectModalOpen}
        isHomeMenuOpen={isHomeMenuOpen}
        setIsHomeMenuOpen={setIsHomeMenuOpen}
      />
      <div className="relative mx-auto min-h-screen w-[375px] bg-white pt-[80px]">
        {isLanguageSelectModalOpen ? (
          <LanguageSelectModal
            isLanguageSelectModalOpen={isLanguageSelectModalOpen}
            setIsLanguageSelectModalOpen={setIsLanguageSelectModalOpen}
          />
        ) : null}
        {isHomeMenuOpen ? (
          <Menu setIsHomeMenuOpen={setIsHomeMenuOpen} />
        ) : !recruitData ? (
          <div>로딩중</div>
        ) : (
          <div className="flex flex-col gap-y-[40px] px-5">
            <Header headerType="dynamic" title="공고" />
            <div className="h-[20px]"></div>
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
                      <p className="body-md text-main">{convertEnumToKorContractType(recruitData.contractType)}</p>
                      <p className="body-md text-gray4">{recruitData.directInputContractType}</p>
                    </div>
                  </section>
                ) : null}
                <section className="flex flex-col items-center gap-y-2">
                  <div className="bg-gray1 flex h-[44px] w-[44px] items-center justify-center rounded-full">
                    <TripIcon width={19} height={19} />
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="body-md text-main">{changeEnumToKorWorkType(recruitData.workType)}</p>
                    <p className="body-md text-gray4">{recruitData.directInputWorkType}</p>
                  </div>
                </section>
              </section>

              <section className="flex flex-col gap-y-[20px]">
                <div className="border-gray2 border-b"></div>
                {recruitData.jobCategories ? (
                  <div className="flex items-center">
                    <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">직종</div>
                    <div className="flex w-[80%] flex-wrap gap-1">
                      {recruitData.jobCategories.map((jobCategory) => {
                        return (
                          <div key={jobCategory} className="badge-md text-gray4 bg-gray2 rounded-[8px] px-2 py-1">
                            {convertEnumToKorJobCategory(jobCategory)}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ) : null}
                {recruitData.workDayType ? (
                  <div className="flex">
                    <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">근무요일</div>
                    <div className="flex w-[80%] flex-col">
                      <p className="body-md">{changeEnumToKorWorkDaysType(recruitData.workDayType)}</p>
                      {recruitData.directInputWorkDayType ? (
                        <p className="body-md text-gray5">{recruitData.directInputWorkDayType}</p>
                      ) : null}
                    </div>
                  </div>
                ) : null}

                {recruitData.workStartTime || recruitData.workEndTime ? (
                  <div className="flex">
                    <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">근무시간</div>
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
                    <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">급여</div>
                    <div className="flex w-[80%] flex-col">
                      <div className="flex items-center gap-x-2">
                        {recruitData.salaryType ? (
                          <div className={SalaryTypeClassName(recruitData.salaryType)}>
                            <p className="badge-sm">{convertEnumToKorSalaryType(recruitData.salaryType)}</p>
                          </div>
                        ) : null}
                        <p className="body-md">{recruitData.salary?.toLocaleString()}원</p>
                      </div>
                      {recruitData.directInputSalaryType ? (
                        <p className="body-md text-gray5">{recruitData.directInputSalaryType}</p>
                      ) : null}
                    </div>
                  </div>
                ) : null}

                {(recruitData.address1 || recruitData.address2) && (
                  <div className="flex">
                    <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">근무지</div>
                    <p className="body-md w-[80%]">
                      {recruitData.address1} {recruitData.address2}
                    </p>
                  </div>
                )}
              </section>
            </section>

            {/* 상세 정보 */}
            <section className="flex flex-col gap-y-[12px]">
              <h2 className="title-lg">상세 정보 (모집 포스터)</h2>
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
                      <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">주요업무</div>
                      <p className="body-md text-gray5 w-[215px]" style={{ whiteSpace: 'pre-wrap' }}>
                        {recruitData.mainTasks}
                      </p>
                    </div>
                  ) : null}
                  {recruitData.qualifications ? (
                    <div className="flex">
                      <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">자격요건</div>
                      <p className="body-md text-gray5 w-[215px]" style={{ whiteSpace: 'pre-wrap' }}>
                        {recruitData.qualifications}
                      </p>
                    </div>
                  ) : null}
                  {recruitData.preferences ? (
                    <div className="flex">
                      <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">우대사항</div>
                      <p className="body-md text-gray5 w-[215px]" style={{ whiteSpace: 'pre-wrap' }}>
                        {recruitData.preferences}
                      </p>
                    </div>
                  ) : null}
                  {recruitData.others ? (
                    <div className="flex">
                      <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">기타</div>
                      <p className="body-md text-gray5 w-[215px]" style={{ whiteSpace: 'pre-wrap' }}>
                        {recruitData.others}
                      </p>
                    </div>
                  ) : null}
                </div>
              )}
            </section>

            {/* 근무지 정보 */}
            {/*<section className="border-gray2 flex flex-col gap-y-[12px]">*/}
            {/*  <h2 className="title-lg">근무지 정보</h2>*/}
            {/*  <section className="border-gray2 flex flex-col gap-y-[16px] rounded-[32px] border p-5">*/}
            {/*    <div className="bg-gray1 h-[240px] w-full"></div>*/}
            {/*    <div className="flex flex-col gap-y-[12px]">*/}
            {/*      <div className="flex">*/}
            {/*        <div className="subtitle-md text-gray4 w-[80px]">우편번호</div>*/}
            {/*        <p className="body-md w-[80%]">{recruitData.zipcode}</p>*/}
            {/*      </div>*/}
            {/*      <div className="flex">*/}
            {/*        <div className="subtitle-md text-gray4 w-[80px]">주소</div>*/}
            {/*        <p className="body-md w-[80%]">{recruitData.address1}</p>*/}
            {/*      </div>*/}
            {/*      <div className="flex">*/}
            {/*        <div className="subtitle-md text-gray4 w-[80px]">상세 주소</div>*/}
            {/*        <p className="body-md w-[80%]">{recruitData.address2}</p>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </section>*/}
            {/*</section>*/}

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
                    <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">회사주소</div>
                    <p className="body-md w-[80%]">
                      {recruitData.address1} {recruitData.address2}
                    </p>
                  </div>
                ) : null}
                {recruitData.representativeName ? (
                  <div className="flex">
                    <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">대표자명</div>
                    <p className="body-md w-[80%]">{recruitData.representativeName}</p>
                  </div>
                ) : null}
                {recruitData.businessType ? (
                  <div className="flex">
                    <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">업종</div>
                    <p className="body-md w-[80%]">{recruitData.businessType}</p>
                  </div>
                ) : null}

                {recruitData.companyType ? (
                  <div className="flex">
                    <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">기업형태</div>
                    <p className="body-md w-[80%]">{changeCompanyTypeEnumToKor(recruitData.companyType)}</p>
                  </div>
                ) : null}
                {recruitData.establishedDate ? (
                  <div className="flex">
                    <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">설립일</div>
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
            지원하기
          </Button>
        </div>
      </div>
    </main>
  )
}
export default RecruitDetailPage
