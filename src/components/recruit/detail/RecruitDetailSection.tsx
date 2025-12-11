import { useTranslation } from 'react-i18next'

import { RecruitInputDataType } from '@/types/recruit'

import Info from '@/components/recruit/detail/Info'
import Image from 'next/image'

interface RecruitDetailSectionProps {
  recruitData: RecruitInputDataType
  open: (data?: any) => void
}

export default function RecruitDetailSection({ recruitData, open }: RecruitDetailSectionProps) {
  const { t } = useTranslation()

  const detailInfoList = [
    { label: t('recruitDetail.detailInfo.mainTasks'), content: recruitData.mainTasks },
    { label: t('recruitDetail.detailInfo.qualifications'), content: recruitData.qualifications },
    { label: t('recruitDetail.detailInfo.preferences'), content: recruitData.preferences },
    { label: t('recruitDetail.detailInfo.others'), content: recruitData.others },
  ]

  return (
    <Info label={t('recruitDetail.detailInfo.title')}>
      {recruitData.posterImageUrl ? (
        <div className="relative h-[500px] w-[335px] rounded-[32px]">
          <Image
            onClick={() => {
              open(recruitData?.posterImageUrl)
            }}
            src={recruitData.posterImageUrl || '/pizza.png'}
            alt={'이미지'}
            priority
            className={'rounded-[32px] object-cover'}
            fill
          />
        </div>
      ) : null}
      <Info.InfoCard>
        <div className="flex flex-col gap-y-3">
          {detailInfoList.map((detailInfo) => (
            <Info.DetailRow key={detailInfo.label} label={detailInfo.label} content={detailInfo.content} />
          ))}
        </div>
      </Info.InfoCard>
    </Info>
  )
}
