'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { RecruitResponseContentType, SalaryEnumType } from '@/types/recruit'
import { convertEnumToKorJobCategory } from '@/utils/recruit'
import { LocationIcon } from '@/assets/svgComponents'

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
    <div className="rounded-4 border-gray2 flex flex-col gap-y-3 border bg-white p-4">
      <section>
        <div className="relative h-[84px] w-[84px]">
          <Image src={recruit.companyImageUrl} alt={'회사로고'} fill className="absolute rounded-[16px]" />
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="button text-gray4">{recruit.recruitEndDate}</p>
          <p className="subtitle-md">{recruit.title}</p>
          <p className="small text-gray5">{recruit.companyName}</p>
        </div>
      </section>
      <section className="flex justify-between">
        <div className="flex items-center gap-x-1">
          <div className="badge-sm text-gray4 bg-gray2 flex h-[24px] items-center justify-center rounded-[8px] px-2">
            {recruit.jobCategories[0]} 외 {recruit.jobCategories.length}종
          </div>
          <div className="badge-sm text-main-light bg-gray2 flex h-[24px] items-center justify-center rounded-[8px] px-2">
            인턴
          </div>
        </div>
        <div className="flex items-center gap-x-1">
          <LocationIcon width={16} height={16} />
          <p className="badge-sm text-gray5">서울시 강남구</p>
        </div>
      </section>
    </div>
  )
}
export default RecruitCard
