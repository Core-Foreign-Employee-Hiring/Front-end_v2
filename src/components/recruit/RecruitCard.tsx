'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { RecruitResponseContentType, SalaryEnumType } from '@/types/recruit'
import { convertEnumToKorContractType, convertEnumToKorJobCategory, convertEnumToKorSalaryType } from '@/utils/recruit'

interface RecruitCardProps {
  recruit: RecruitResponseContentType
}

const RecruitCard = ({ recruit }: RecruitCardProps) => {
  const router = useRouter()

  const formatJobCategory = () => {
    return recruit.jobCategories.map((category) => convertEnumToKorJobCategory(category)).join('/')
  }

  const formatDate = (dateString: string) => {
    // "2025-07-16" -> ["2025", "07", "16"]
    const [year, month, day] = dateString.split('-')
    return `${month}.${day}`
  }

  const formatNumberWithComma = (number: number | null) => {
    if (number) return number.toLocaleString('ko-KR')
  }

  const styleBySalaryType = (salaryType: SalaryEnumType) => {
    switch (salaryType) {
      case 'ANNUAL':
        return 'border-main-dark text-main-dark'
      case 'HOURLY':
        return 'border-sub3 text-sub3'
      case 'MONTHLY':
        return 'border-sub2 text-sub2'
      case 'WEEKLY':
        return 'border-sub5 text-sub5'
      case 'DAILY':
        return 'border-sub1 text-sub1'
      case 'ETC':
        return 'border-gray2 text-gray5'
    }
  }

  return (
    <div
      onClick={() => {
        router.push(`/${recruit.recruitId}`)
      }}
      className="desktop:border-gray2 desktop:p-6 desktop:rounded-[32px] desktop:border desktop:gap-y-[20px] flex w-full flex-col gap-y-[8px] rounded-[24px]"
    >
      <div className="relative h-[133px] w-full">
        <Image
          src={recruit.companyImageUrl || '/pizza.png'}
          alt={'이미지'}
          fill
          className="rounded-[12px] object-cover"
        ></Image>
        <div className="absolute z-10 h-[133px] w-full rounded-[12px] bg-gradient-to-t from-white to-black opacity-40"></div>
        <p className="badge-sm absolute top-2 right-2 z-10 text-white">~{formatDate(recruit.recruitEndDate)}까지</p>
      </div>

      <div className="flex flex-col gap-y-1">
        <div className="flex items-center justify-between">
          <p className="subtitle-lg">{formatJobCategory()}</p>
        </div>

        <p className="body-sm text-gray5">{recruit.companyName}</p>
        <p className="body-sm text-gray5">{convertEnumToKorContractType(recruit.contractType)}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <div
          className={`${styleBySalaryType(recruit.salaryType)} badge-sm flex h-[22px] w-[37px] items-center justify-center rounded-[8px] border`}
        >
          {convertEnumToKorSalaryType(recruit.salaryType)}
        </div>
        <p className="button">{formatNumberWithComma(recruit.salary)}원</p>
      </div>
    </div>
  )
}
export default RecruitCard
