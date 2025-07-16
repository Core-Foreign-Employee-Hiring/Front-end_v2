import ProcessBar from '@/components/common/ProcessBar'
import DetailField from '@/app/recruit-form/components/DetailField'
import MainTaskField from '@/app/recruit-form/components/MainTaskField'
import QualificationField from '@/app/recruit-form/components/QualificationField'
import PreferredQualificationsField from '@/app/recruit-form/components/PreferredQualificationsField'
import AdditionalInformationField from '@/app/recruit-form/components/AdditionalInformationField'
import ApplicationMethodField from '@/app/recruit-form/components/ApplicationMethodField'

interface RecruitFormStep3Props {
  currentStep: 1 | 2 | 3
}

export default function RecruitFormStep3({ currentStep }: RecruitFormStep3Props) {
  return (
    <div className="px-[26px] pt-[32px]">
      <section className="flex flex-col gap-y-[20px]">
        <h1 className="title-lg">공고등록</h1>
        <ProcessBar
          currentStep={currentStep}
          step1Content={'회사 정보'}
          step2Content={'공고 정보'}
          step3Content={'상세 정보'}
          totalStep={3}
          width={''}
        />
      </section>
      <div className="mt-[40px] mb-[100px] flex flex-col gap-y-[32px]">
        <DetailField />
        <section className="flex flex-col gap-y-[16px]">
          <p className="subtitle-lg text-gray5">상세정보 직접입력</p>
          <MainTaskField />
          <QualificationField />
          <PreferredQualificationsField />
          <AdditionalInformationField />
          <ApplicationMethodField />
        </section>
      </div>
    </div>
  )
}
