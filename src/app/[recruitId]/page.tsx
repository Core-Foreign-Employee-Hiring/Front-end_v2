'use client'
import Header from '@/components/common/Header'
import { useEffect, useState } from 'react'
import Menu from '@/components/common/Menu'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { usePathname } from 'next/navigation'
import { getRecruitDetailData } from '@/lib/recruit'
import { ApiResponse } from '@/types/common'
import {
  ContractEnumType,
  JobCategoryEnumType,
  RecruitInputDataType,
  SalaryEnumType,
  WorkDaysType,
  WorkType,
} from '@/types/recruit'
import { convertEnumToKorJobCategory } from '@/utils/recruit'
import { FaceIcon, TripIcon } from '@/assets/svgComponents'
import LanguageSelectModal from '@/components/modal/LanguageSelectModal'

const RecruitDetailPage = () => {
  const pathName = usePathname()
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false)
  const [recruitData, setRecruitData] = useState<RecruitInputDataType>()
  //언어 선택 모달창 제어
  const [isLanguageSelectModalOpen, setIsLanguageSelectModalOpen] = useState(false)

  useEffect(() => {
    getRecruitDetailData(pathName).then((response: ApiResponse<RecruitInputDataType>) => {
      setRecruitData(response.data)
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

  const changeEnumToKorContractType = (contractType: ContractEnumType | undefined) => {
    switch (contractType) {
      case 'INTERN':
        return '인턴'
      case 'REGULAR':
        return '정규직'
      case 'NEWCOMER':
        return '신입'
      case 'EXPERIENCED':
        return '경력'
      case 'CONTRACT':
        return '계약직'
    }
  }

  const changeEnumToKorWorkType = (workType: WorkType | undefined) => {
    switch (workType) {
      case 'ONSITE':
        return '온라인'
      case 'HYBRID':
        return '혼합근무'
      case 'REMOTE':
        return '원격'
      case 'ETC':
        return '기타'
    }
  }

  const changeEnumToKorWorkDaysType = (workDaysType: WorkDaysType | undefined) => {
    switch (workDaysType) {
      case 'WEEKDAYS':
        return '평일(월, 화, 수, 목, 금)'
      case 'WEEKENDS':
        return '주말(토, 일)'
      case 'FULL_WEEK':
        return '주 7일(월~일)'
      case 'SIX_DAYS':
        return '주 6일'
      case 'MONDAY':
        return '월요일'
      case 'TUESDAY':
        return '화요일'
      case 'WEDNESDAY':
        return '수요일'
      case 'THURSDAY':
        return '목요일'
      case 'FRIDAY':
        return '금요일'
      case 'SATURDAY':
        return '토요일'
      case 'SUNDAY':
        return '일요일'
      default:
        return '기타'
    }
  }

  const changeEnumToKorSalaryType = (salaryType: SalaryEnumType | undefined) => {
    switch (salaryType) {
      case 'ANNUAL':
        return '연봉'
      case 'MONTHLY':
        return '월급'
      case 'WEEKLY':
        return '주급'
      case 'DAILY':
        return '일급'
      case 'HOURLY':
        return '시급'
      default:
        return '기타'
    }
  }

  const changeEnumToKorJobCategory = (category: JobCategoryEnumType | undefined) => {
    switch (category) {
      case 'DESIGN':
        return '디자인'
      case 'PRODUCTION_MANUFACTURING':
        return '생산/제조'
      case 'IT':
        return 'IT'
      case 'MARKETING_ADVERTISING':
        return '마케팅/광고'
      case 'ENTERTAINMENT':
        return '엔터테인먼트'
      case 'MANAGEMENT_OFFICE':
        return '경영/사무'
      case 'EDUCATION':
        return '교육'
      case 'TRADE_LOGISTICS':
        return '무역/물류'
      case 'SALES_CS':
        return '영업/CS'
      case 'SERVICE':
        return '서비스'
      case 'CONSTRUCTION':
        return '건설'
      case 'R_AND_D':
        return 'R&D'
      case 'TRANSLATION':
        return '번역'
      default:
        return '기타'
    }
  }

  return (
    <main>
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
            <div className="h-[40px]"></div>
            <section className="border-gray2 flex flex-col gap-y-[24px] rounded-[32px] border p-5">
              <section className="flex flex-col gap-y-[24px]">
                <div className="flex flex-col gap-y-3">
                  <p className="button text-gray4">~{formatDate(recruitData.recruitEndDate)}</p>
                  <p className="title-md">{recruitData.title}</p>
                  <p className="subtitle-md text-gray5">{recruitData.companyName}</p>
                </div>
              </section>
              <section className="flex justify-between">
                <section className="flex flex-col items-center gap-y-2">
                  <div className="bg-gray1 flex h-[44px] w-[44px] items-center justify-center rounded-full">
                    <FaceIcon width={19} height={19} />
                  </div>
                  <p className="body-md text-main">{changeEnumToKorJobCategory(recruitData.jobCategories?.[0])}</p>
                </section>
                <section className="flex flex-col items-center gap-y-2">
                  <div className="bg-gray1 flex h-[44px] w-[44px] items-center justify-center rounded-full">
                    <TripIcon width={19} height={17} />
                  </div>
                  <div className="flex flex-col">
                    <p className="body-md text-main">{changeEnumToKorContractType(recruitData.contractType)}</p>
                    <p className="body-md text-gray4">{recruitData.directInputContractType}</p>
                  </div>
                </section>
                <section className="flex flex-col items-center gap-y-2">
                  <div className="bg-gray1 flex h-[44px] w-[44px] items-center justify-center rounded-full">
                    <FaceIcon width={19} height={19} />
                  </div>
                  <div className="flex flex-col">
                    <p className="body-md text-main">{changeEnumToKorWorkType(recruitData.workType)}</p>
                    <p className="body-md text-gray4">{recruitData.directInputWorkType}</p>
                  </div>
                </section>
              </section>
              <section className="flex flex-col gap-y-[20px]">
                <div className="flex">
                  <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">근무요일</div>
                  <div className="flex w-[80%] flex-col">
                    <p className="body-md">{changeEnumToKorWorkDaysType(recruitData.workDayType)}</p>
                    <p className="body-md text-gray5">{recruitData.directInputWorkDayType}</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">근무시간</div>
                  <div className="flex w-[80%] flex-col">
                    <p className="body-md">
                      {recruitData.workStartTime} ~ {recruitData.workEndTime}
                    </p>
                    <p className="body-md text-gray5">{recruitData.directInputWorkTime}</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">급여</div>
                  <div className="flex w-[80%] flex-col">
                    <div className="flex gap-x-2">
                      <p className="body-md">{changeEnumToKorSalaryType(recruitData.salaryType)}</p>
                      <p className="body-md">{recruitData.salary?.toLocaleString()}원</p>
                    </div>
                    <p className="body-md text-gray5">{recruitData.directInputSalaryType}</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">근무지</div>
                  <p className="body-md w-[80%]">
                    {recruitData.address1} {recruitData.address2}
                  </p>
                </div>
              </section>
            </section>

            {/* 상세 정보 */}
            {recruitData.posterImageUrl ? (
              <section className="flex flex-col gap-y-[12px]">
                <h2 className="title-lg">상세 정보 (모집 포스터)</h2>
                <div className="relative h-[500px] w-[335px] rounded-[32px]">
                  <Image
                    src={recruitData.posterImageUrl || '/pizza.png'}
                    alt={'이미지'}
                    className={'rounded-[32px] object-cover'}
                    fill
                  />
                </div>
              </section>
            ) : null}

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
            <section className="border-gray2 flex flex-col gap-y-[24px] rounded-[32px] border p-5">
              <section className="flex gap-x-3">
                <div className="border-gray2 relative h-[100px] w-[100px] rounded-[12px] border">
                  <Image src={'/pizza.png'} alt={'이미지'} className={'rounded-[12px] object-cover'} fill />
                </div>
                <p className="title-md">{recruitData.title}</p>
              </section>
              <section className="flex flex-col gap-y-[20px]">
                <div className="flex">
                  <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">회사주소</div>
                  <p className="body-md w-[80%]">
                    {recruitData.address1} {recruitData.address2}
                  </p>
                </div>
                <div className="flex">
                  <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">대표자명</div>
                  <p className="body-md w-[80%]">{recruitData.representativeName}</p>
                </div>
                <div className="flex">
                  <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">업종</div>
                  <p className="body-md w-[80%]">{recruitData.businessType}</p>
                </div>
                <div className="flex">
                  <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">기업형태</div>
                  <p className="body-md w-[80%]">{recruitData.companyType}</p>
                </div>
                <div className="flex">
                  <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">설립일</div>
                  <p className="body-md w-[80%]">{recruitData.establishedDate}</p>
                </div>
                <div className="flex">
                  <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">상세정보</div>
                  <p className="body-md w-[80%]">{recruitData.others}</p>
                </div>
                <div className="flex">
                  <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">공고정보</div>
                  <p className="body-md w-[80%]">{recruitData.preferences}</p>
                </div>
              </section>
            </section>
            <div className="h-[80px]" />
          </div>
        )}
        <div className="absolute bottom-0 flex w-full gap-x-2 bg-white px-5 pt-3 pb-[32px]">
          <Button onClick={() => {}} customClassName={'w-full'} size={'lg'} type={'active'}>
            지원하기
          </Button>
        </div>
      </div>
    </main>
  )
}
export default RecruitDetailPage
