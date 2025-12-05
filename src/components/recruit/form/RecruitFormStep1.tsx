import ProcessBar from '@/components/common/ProcessBar'
import RecruitTitleField from '@/app/[lang]/recruit-form/components/RecruitTitleField'
import CompanyNameField from '@/app/[lang]/recruit-form/components/CompanyNameField'
import CompanyAddressField from '@/app/[lang]/recruit-form/components/CompanyAddressField'
import CompanyEstablishedDateField from '@/app/[lang]/recruit-form/components/CompanyEstablishedDateField'
import RepresentativeNameField from '@/app/[lang]/recruit-form/components/RepresentativeNameField'
import BusinessTypeField from '@/app/[lang]/recruit-form/components/BusinessTypeField'
import CompanyTypeField from '@/app/[lang]/recruit-form/components/CompanyTypeField'
import CompanyLogoImageField from '@/app/[lang]/recruit-form/components/CompanyLogoImageField'
import { Dispatch, SetStateAction } from 'react'

interface RecruitFormStep1Props {
  currentStep: 1 | 2 | 3
  setCompanyLogoFile: Dispatch<SetStateAction<File | null>>
}

export default function RecruitFormStep1({ currentStep, setCompanyLogoFile }: RecruitFormStep1Props) {
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
        <div className="flex flex-col gap-y-[12px]">
          <h2 className="title-md">회사정보</h2>
          <CompanyNameField />
          <CompanyLogoImageField setCompanyLogoFile={setCompanyLogoFile} />
          <CompanyAddressField />
          <CompanyEstablishedDateField />
          <RepresentativeNameField />
          <BusinessTypeField />
          <CompanyTypeField />
        </div>
      </div>
    </div>
  )
}
