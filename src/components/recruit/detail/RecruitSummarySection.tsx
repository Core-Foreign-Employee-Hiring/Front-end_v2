import { useTranslation } from 'react-i18next'

import { RecruitInputDataType } from '@/types/recruit'

import Info from '@/components/recruit/detail/Info'
import { FaceIcon, TripIcon } from '@/assets/svgComponents'
import {
  changeEnumToKorWorkDaysTypeLabel,
  changeEnumToKorWorkTypeLabel,
  convertEnumToKorContractTypeLabel,
  convertEnumToKorSalaryTypeLabel,
  SalaryTypeClassName,
} from '@/utils/recruit'

import { getJobCategoryLabel } from '@/utils/filterList'

interface RecruitSummarySectionProps {
  recruitData: RecruitInputDataType
}

export default function RecruitSummarySection({ recruitData }: RecruitSummarySectionProps) {
  const { t } = useTranslation()
  const formatDate = (dateString: string | undefined | null) => {
    if (dateString) {
      // "2025-07-16" -> ["2025", "07", "16"]
      const [year, month, day] = dateString.split('-')
      return `${month}.${day}`
    }
  }
  return (
    <Info.InfoCard>
      <section className="flex flex-col gap-y-[24px]">
        <div className="flex flex-col gap-y-2">
          <p className="button text-gray4">~{formatDate(recruitData.recruitEndDate)}</p>
          <p className="title-md">{recruitData.title}</p>
          <p className="subtitle-md text-gray5">{recruitData.companyName}</p>
        </div>

        <div className="flex flex-col gap-y-5">
          <section className="flex justify-evenly">
            {recruitData.contractType ? (
              <section className="flex w-1/2 flex-col items-center gap-y-2">
                <div className="bg-gray1 flex h-[44px] w-[44px] items-center justify-center rounded-full">
                  <FaceIcon width={19} height={19} />
                </div>
                <div className="flex flex-col items-center">
                  <p className="body-md text-main">{t(convertEnumToKorContractTypeLabel(recruitData.contractType))}</p>
                  <p className="body-md text-gray4">{recruitData.directInputContractType}</p>
                </div>
              </section>
            ) : null}
            <section className="flex w-1/2 flex-col items-center gap-y-2">
              <div className="bg-gray1 flex h-[44px] w-[44px] items-center justify-center rounded-full">
                <TripIcon width={19} height={19} />
              </div>
              <div className="flex flex-col items-center">
                <p className="body-md text-main">{t(changeEnumToKorWorkTypeLabel(recruitData.workType))}</p>
                <p className="body-md text-gray4">{recruitData.directInputWorkType}</p>
              </div>
            </section>
          </section>

          <section className="flex flex-col gap-y-[20px]">
            <div className="border-gray2 border-b" />

            <Info.DetailRow
              content={recruitData.jobCategories ? recruitData.jobCategories[0] : null} // 데이터가 있는지 판단하기 위한 prop
              className={'items-center'}
              label={t('recruitDetail.recruitInfo.jobCategories')}
            >
              <div className="flex w-[80%] flex-wrap gap-1">
                {recruitData.jobCategories?.map((jobCategory) => {
                  return (
                    <div key={jobCategory} className="badge-md text-gray4 bg-gray2 rounded-[8px] px-2 py-1">
                      {t(getJobCategoryLabel(jobCategory))}
                    </div>
                  )
                })}
              </div>
            </Info.DetailRow>

            <Info.DetailRow
              content={recruitData.workDayType} // 데이터가 있는지 판단하기 위한 prop
              label={t('recruitDetail.recruitInfo.workDayType')}
            >
              <div className="flex w-[80%] flex-col">
                <p className="body-md">{t(changeEnumToKorWorkDaysTypeLabel(recruitData.workDayType))}</p>
                {recruitData.directInputWorkDayType ? (
                  <p className="body-md text-gray5">{recruitData.directInputWorkDayType}</p>
                ) : null}
              </div>
            </Info.DetailRow>

            <Info.DetailRow content={recruitData.workStartTime} label={t('recruitDetail.recruitInfo.workTime')}>
              <div className="flex w-[80%] flex-col">
                <p className="body-md">
                  {recruitData.workStartTime} ~ {recruitData.workEndTime}
                </p>
                {recruitData.directInputWorkTime ? (
                  <p className="body-md text-gray5">{recruitData.directInputWorkTime}</p>
                ) : null}
              </div>
            </Info.DetailRow>

            <Info.DetailRow content={recruitData.salary} label={t('recruitDetail.recruitInfo.salary')}>
              <div className="flex w-[80%] flex-col">
                <div className="flex items-center gap-x-2">
                  {recruitData.salaryType ? (
                    <div className={SalaryTypeClassName(recruitData.salaryType)}>
                      <p className="badge-sm">{t(convertEnumToKorSalaryTypeLabel(recruitData.salaryType))}</p>
                    </div>
                  ) : null}
                  <p className="body-md">
                    {recruitData.salary?.toLocaleString()}
                    {t('recruitDetail.recruitInfo.salarySymbol')}
                  </p>
                </div>
                {recruitData.directInputSalaryType ? (
                  <p className="body-md text-gray5">{recruitData.directInputSalaryType}</p>
                ) : null}
              </div>
            </Info.DetailRow>

            <Info.DetailRow
              label={t('recruitDetail.recruitInfo.address')}
              content={
                !recruitData.address1
                  ? null
                  : `${recruitData.address1 ? recruitData.address1 : ''} ${recruitData.address2 ? recruitData.address2 : ''}`
              }
            />
          </section>
        </div>
      </section>
    </Info.InfoCard>
  )
}
