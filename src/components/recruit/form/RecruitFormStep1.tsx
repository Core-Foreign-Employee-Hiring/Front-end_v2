import ProcessBar from '@/components/common/ProcessBar'
import RecruitTitleField from '@/app/recruit-form/components/RecruitTitleField'

interface RecruitFormStep1Props {
  currentStep: 1 | 2 | 3
}

export default function RecruitFormStep1({ currentStep }: RecruitFormStep1Props) {
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
      <div className="mt-[40px] flex flex-col gap-y-[32px]">
        <RecruitTitleField />
      </div>
    </div>
  )
}
