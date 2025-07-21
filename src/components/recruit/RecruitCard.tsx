'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface RecruitCardProps {
  recruitId: number
}

const RecruitCard = ({ recruitId }: RecruitCardProps) => {
  const router = useRouter()
  return (
    <div
      onClick={() => {
        router.push(`/${recruitId}`)
      }}
      className="desktop:border-gray2 desktop:p-6 desktop:rounded-[32px] desktop:border desktop:gap-y-[20px] flex w-full flex-col gap-y-[8px] rounded-[24px]"
    >
      <div className="relative h-[133px] w-full">
        <Image src={'/pizza.png'} alt={'피자'} fill className="rounded-[12px] object-cover"></Image>
      </div>

      <div className="flex flex-col gap-y-1">
        <div className="flex items-center justify-between">
          <p className="subtitle-lg">직무</p>
          <p className="badge-sm text-gray5">~3/31까지</p>
        </div>

        <p className="body-sm text-gray5">회사명</p>
        <p className="body-sm text-gray5">직급</p>
      </div>

      <div className="flex items-center gap-x-1">
        <div className="border-sub3 badge-sm text-sub3 flex h-[22px] w-[37px] items-center justify-center rounded-[8px] border">
          시급
        </div>
        <p className="button">129,550원</p>
      </div>
    </div>
  )
}
export default RecruitCard
