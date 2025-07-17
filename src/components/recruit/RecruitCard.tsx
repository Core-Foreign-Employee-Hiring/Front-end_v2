'use client'

import { CalenderIcon, ClockIcon, LocationIcon } from '@/assets/svgComponents'
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
      className="border-gray2 desktop:p-6 desktop:rounded-[32px] flex flex-col gap-y-[20px] rounded-[24px] border p-4"
    >
      <div className="relative h-[120px] w-full">
        <Image src={'/pizza.png'} alt={'피자'} fill className="rounded-[12px] object-cover"></Image>
      </div>

      <section className="flex items-center justify-between">
        <div className="flex items-center gap-x-1">
          <div className="border-sub3 badge-sm text-sub3 flex h-[22px] w-[37px] items-center justify-center rounded-[8px] border">
            시급
          </div>
          <p className="button">129,550원</p>
        </div>
        <p className="text-gray5 badge-sm">~3/31까지</p>
      </section>
    </div>
  )
}
export default RecruitCard
