'use client'

import { CalenderIcon, ClockIcon, LocationIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'

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
      className="border-gray2 flex flex-col gap-y-[20px] rounded-[32px] border p-6"
    >
      <section className="flex flex-col gap-y-[9px]">
        <div>이천/물류센터/단순피킹/초보자가능/일당/단순업무/동반가능/</div>
        <div>회사명</div>
        <div className="flex flex-col gap-y-1">
          <div className="flex gap-x-1">
            <LocationIcon width={20} height={20} />
            <p className="body-sm text-gray5">흥덕구 복대동</p>
          </div>
          <div className="flex gap-x-1">
            <ClockIcon width={20} height={20} />
            <p className="body-sm text-gray5">9:00-18:00</p>
          </div>
          <div className="flex gap-x-1">
            <CalenderIcon width={20} height={20} />
            <div>
              <p className="body-sm text-gray5">
                1개월 ~ 3개월 <span className="text-gray4">(협의가능)</span>
              </p>
              <p className="body-sm text-gray5">
                주말 <span className="text-gray4">토,일 (협의가능)</span>
              </p>
            </div>
          </div>
        </div>
      </section>
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
