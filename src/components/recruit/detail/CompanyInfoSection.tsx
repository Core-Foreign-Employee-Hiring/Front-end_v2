import Image from 'next/image'

import { useTranslation } from 'react-i18next'

import { RecruitInputDataType } from '@/types/recruit'

import { changeCompanyTypeEnumToKor } from '@/utils/recruit'

import Info from '@/components/recruit/detail/Info'

interface CompanyInfoSectionProps {
  recruitData: RecruitInputDataType
  open: (data?: any) => void
}

export default function CompanyInfoSection({ recruitData, open }: CompanyInfoSectionProps) {
  const { t } = useTranslation()

  const companyInfoList = [
    {
      label: t('recruitDetail.companyInfo.companyAddress'),
      content: !recruitData.address1
        ? null
        : `${recruitData.address1 ? recruitData.address1 : ''} ${recruitData.address2 ? recruitData.address2 : ''}`,
    },
    { label: t('recruitDetail.companyInfo.representativeName'), content: recruitData.representativeName },
    { label: t('recruitDetail.companyInfo.businessType'), content: recruitData.businessType },
    { label: t('recruitDetail.companyInfo.companyType'), content: changeCompanyTypeEnumToKor(recruitData.companyType) },
    { label: t('recruitDetail.companyInfo.establishedDate'), content: recruitData.establishedDate },
  ]

  return (
    <section className="flex flex-col gap-y-[24px] rounded-[32px]">
      <section className="flex gap-x-3">
        {recruitData.companyImageUrl ? (
          <div className="border-gray2 relative h-[100px] w-[100px] rounded-[12px] border">
            <Image
              onClick={() => {
                open(recruitData?.companyImageUrl)
              }}
              src={recruitData.companyImageUrl}
              alt={'이미지'}
              className={'rounded-[12px] object-cover'}
              fill
            />
          </div>
        ) : null}
        <p className="title-md">{recruitData.companyName}</p>
      </section>

      <section className="flex flex-col gap-y-[20px]">
        {companyInfoList.map((companyInfo) => (
          <Info.DetailRow key={companyInfo.label} label={companyInfo.label} content={companyInfo.content} />
        ))}
      </section>
    </section>
  )
}
