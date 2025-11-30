import BirthDateField from '@/components/sign-up/employee/BirthDateField'
import GenderField from '@/components/sign-up/employee/GenderField'
import NationalityField from '@/components/sign-up/employee/NationalityField'
import EducationField from '@/components/sign-up/employee/EducationField'
import VisaField from '@/components/sign-up/employee/VisaField'
import TermsOfServiceField from '@/components/sign-up/employee/TermsOfServiceField'
import { Dispatch, SetStateAction, useEffect } from 'react'
import Button from '@/components/common/Button'
import { useAuthStore } from '@/store/authStore'
import { postMemberEmployeeRegister } from '@/lib/auth'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import JobRoleField from '@/components/sign-up/employee/JobRoleField'

interface SignUpAdditionalInfoFormProps {
  setCurrentStep: Dispatch<SetStateAction<1 | 2>>
}

export default function SignUpAdditionalInfoForm({ setCurrentStep }: SignUpAdditionalInfoFormProps) {
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp) ?? {}
  const router = useRouter()

  useEffect(() => {
    console.log('employeeSignUp', employeeSignUp)
  }, [employeeSignUp])

  const isFormValid =
    !!employeeSignUp.birthDate &&
    !!employeeSignUp.gender &&
    !!employeeSignUp.nationality &&
    !!employeeSignUp.education &&
    !!employeeSignUp.visa &&
    employeeSignUp.over15 === true &&
    employeeSignUp.termsOfServiceAgreement === true &&
    employeeSignUp.personalInfoAgreement === true

  return (
    <div className="flex w-full flex-col gap-y-[40px]">
      <section className="flex w-full flex-col gap-y-[32px]">
        <BirthDateField />
        <NationalityField />
        <VisaField />
        <JobRoleField />
        <EducationField />
        <GenderField />
        <TermsOfServiceField />
      </section>
      <div className="flex gap-x-2">
        <Button customClassName={'w-full'} onClick={() => setCurrentStep(1)} size={'lg'} type={'outline'}>
          이전
        </Button>
        <Button
          onClick={async () => {
            if (isFormValid) {
              setCurrentStep(2)
              const result = await postMemberEmployeeRegister(employeeSignUp)
              console.log('result', result)
              if (result.success) {
                if (result.data) {
                  Cookies.set('accessToken', result.data.accessToken)
                  Cookies.set('refreshToken', result.data.accessToken)
                }
                router.push('/')
              }
              console.log('회원가입 response', result)
            }
          }}
          size={'lg'}
          type={isFormValid ? 'active' : 'disabled'}
          customClassName={'w-full'}
        >
          완료
        </Button>
      </div>
    </div>
  )
}
