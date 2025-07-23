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
import { convertEnumToKorJobCategory } from '@/utils/recruit'

const RecruitDetailPage = () => {
  const pathName = usePathname()
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false)
  const [recruitData, setRecruitData] = useState<RecruitInputDataType>()

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

  return (
    <main>
      <Header isHomeMenuOpen={isHomeMenuOpen} setIsHomeMenuOpen={setIsHomeMenuOpen} />
      {isHomeMenuOpen ? (
        <Menu setIsHomeMenuOpen={setIsHomeMenuOpen} />
      ) : !recruitData ? (
        <div>로딩중</div>
      ) : (
        <div className="flex flex-col gap-y-[40px] px-5">
          <div className="h-[80px]" />
          <section className="border-gray2 flex flex-col gap-y-[24px] rounded-[32px] border p-5">
            <section className="flex flex-col gap-y-[24px]">
              <div className="border-gray2 relative h-[100px] w-[100px] rounded-[12px] border">
                <Image src={'/pizza.png'} alt={'이미지'} className={'rounded-[12px] object-cover'} fill />
              </div>
              <div className="flex flex-col gap-y-3">
                <p className="button text-gray4">~{formatDate(recruitData.recruitEndDate)}</p>
                <p className="title-md">{recruitData.title}</p>
                <p className="subtitle-md text-gray5">{recruitData.companyName}</p>
              </div>
            </section>
            <section className="flex flex-col gap-y-[20px]">
              <div className="flex">
                <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">계약형태</div>
                <p className="body-md w-[80%]">{recruitData.contractType}</p>
              </div>
              <div className="flex">
                <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">직종</div>
                <p className="body-md w-[80%]">{formatJobCategory()}</p>
              </div>
              <div className="flex">
                <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">근무요일</div>
                <p className="body-md w-[80%]">{recruitData.workDayType}</p>
              </div>
              <div className="flex">
                <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">근무시간</div>
                <p className="body-md w-[80%]">
                  {recruitData.workStartTime} ~ {recruitData.workEndTime}
                </p>
              </div>
              <div className="flex">
                <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">근무형태</div>
                <p className="body-md w-[80%]">{recruitData.workType}</p>
              </div>
              <div className="flex">
                <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">급여</div>
                <p className="body-md w-[80%]">{recruitData.salaryType}</p>
                <p className="body-md">{recruitData.salary}</p>
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

          {/* 근무지 정보 */}
          <section className="border-gray2 flex flex-col gap-y-[12px]">
            <h2 className="title-lg">근무지 정보</h2>
            <section className="border-gray2 flex flex-col gap-y-[16px] rounded-[32px] border p-5">
              <div className="bg-gray1 h-[240px] w-full"></div>
              <div className="flex flex-col gap-y-[12px]">
                <div className="flex">
                  <div className="subtitle-md text-gray4 w-[80px]">우편번호</div>
                  <p className="body-md w-[80%]">{recruitData.zipcode}</p>
                </div>
                <div className="flex">
                  <div className="subtitle-md text-gray4 w-[80px]">주소</div>
                  <p className="body-md w-[80%]">{recruitData.address1}</p>
                </div>
                <div className="flex">
                  <div className="subtitle-md text-gray4 w-[80px]">상세 주소</div>
                  <p className="body-md w-[80%]">{recruitData.address2}</p>
                </div>
              </div>
            </section>
          </section>

          {/* 회사 정보 */}
          <section className="border-gray2 flex flex-col gap-y-[24px] rounded-[32px] border p-5">
            <section className="flex flex-col gap-y-[24px]">
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
                <p className="body-md w-[80%]">인턴</p>
              </div>
              <div className="flex">
                <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">공고정보</div>
                <p className="body-md w-[80%]">인턴</p>
              </div>
            </section>
          </section>

          <div className="h-[80px]" />
        </div>
      )}
      <div className="fixed bottom-0 flex w-full gap-x-2 bg-white px-5 pt-3 pb-[32px]">
        <Button onClick={() => {}} customClassName={'w-full'} size={'lg'} type={'active'}>
          지원하기
        </Button>
      </div>
    </main>
  )
}
export default RecruitDetailPage
