'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { RecruitResponseContentType } from '@/types/recruit'
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
        <div className="border-sub3 badge-sm text-sub3 flex h-[22px] w-[37px] items-center justify-center rounded-[8px] border">
          {convertEnumToKorSalaryType(recruit.salaryType)}
        </div>
        <p className="button">{recruit.salary}원</p>
      </div>
    </div>
  )
}
export default RecruitCard
