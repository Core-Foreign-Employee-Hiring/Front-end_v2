import ProcessBar from '@/components/common/ProcessBar'
import RecruitPeriodField from '@/app/recruit-form/components/RecruitPeriodField'
import RecruitContractTypeField from '@/app/recruit-form/components/RecruitContractTypeField'
import WorkTypeField from '@/app/recruit-form/components/WorkTypeField'
import WorkDaysField from '@/app/recruit-form/components/WorkDaysField'
import WorkTime from '@/app/recruit-form/components/WorkTime'
import SalaryField from '@/app/recruit-form/components/SalaryField'
import JobCategoryField from '@/app/recruit-form/components/JobCategoryField'

interface RecruitFormStep2Props {
  currentStep: 1 | 2 | 3
}
export default function RecruitFormStep2({ currentStep }: RecruitFormStep2Props) {
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
        <RecruitPeriodField />
        <RecruitContractTypeField />
        <JobCategoryField />
        <WorkTypeField />
        <WorkDaysField />
        <WorkTime />
        <SalaryField />
      </div>
    </div>
  )
}
