'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { RecruitResponseContentType } from '@/types/recruit'
import { convertEnumToKorContractType } from '@/utils/recruit'
import { LocationIcon } from '@/assets/svgComponents'
import { useState } from 'react'
import { getJobCategoryLabel } from '@/utils/filterList'

interface RecruitCardProps {
  recruit: RecruitResponseContentType
}

const RecruitCard = ({ recruit }: RecruitCardProps) => {
  const [imageError, setImageError] = useState(false)
  const router = useRouter()

  const formatDate = (dateString: string) => {
    // "2025-07-16" -> "07/16(수)"
    const date = new Date(dateString + 'T00:00:00')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토']
    const dayName = dayOfWeek[date.getDay()]

    return `${month}/${day}(${dayName})`
  }

  /**
   * 주소에서 앞의 두 단어(시/도 + 시/군/구)만 추출하는 함수
   */
  const getShortAddress = (address: string | undefined | null): string => {
    if (!address) return ''

    const parts = address.split(' ')

    if (parts.length < 2) {
      return address
    }

    return `${parts[0]} ${parts[1]}`
  }

  return (
    <div
      onClick={() => {
        router.push(`/${recruit.recruitId}`)
      }}
      className="border-gray2 flex cursor-pointer flex-col gap-y-3 rounded-[20px] border bg-white p-4 transition hover:shadow-md hover:duration-75"
    >
      <section className="flex min-w-0 items-start gap-x-3">
        {imageError || recruit.companyImageUrl === '' ? null : (
          <div className="relative h-[84px] w-[84px] flex-shrink-0">
            <Image
              onError={() => setImageError(true)}
              src={recruit.companyImageUrl}
              alt={'회사로고'}
              fill
              className="absolute rounded-[16px] object-cover"
            />
          </div>
        )}

        <div className="flex min-w-0 flex-1 flex-col gap-y-1">
          <p className="button text-gray4">~{formatDate(recruit.recruitEndDate)}</p>
          <p
            className="subtitle-md"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {recruit.title}
          </p>
          <p className="small text-gray5 truncate">{recruit.companyName}</p>
        </div>
      </section>

      <section className="flex justify-between">
        <div className="flex items-center gap-x-1">
          <div className="badge-sm text-gray4 bg-gray2 flex h-[24px] items-center justify-center rounded-[8px] px-2">
            {getJobCategoryLabel(recruit.jobCategories[0])}
            {recruit.jobCategories.length !== 0 ? `외 ${recruit.jobCategories.length}종` : null}
          </div>
          <div className="badge-sm bg-main-light text-main flex h-[24px] items-center justify-center rounded-[8px] px-2">
            {convertEnumToKorContractType(recruit.contractType)}
          </div>
        </div>
        <div className="flex items-center gap-x-1">
          <LocationIcon width={16} height={16} />
          <p className="badge-sm text-gray5">{getShortAddress(recruit.address1)}</p>
        </div>
      </section>
    </div>
  )
}

export default RecruitCard
