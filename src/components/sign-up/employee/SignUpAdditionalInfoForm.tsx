import AddressField from '@/components/sign-up/employee/AddressField'
import BirthDateField from '@/components/sign-up/employee/BirthDateField'
import GenderField from '@/components/sign-up/employee/GenderField'
import NationalityField from '@/components/sign-up/employee/NationalityField'
import EducationField from '@/components/sign-up/employee/EducationField'
import VisaField from '@/components/sign-up/employee/VisaField'
import TermsOfServiceField from '@/components/sign-up/employee/TermsOfServiceField'
import { Dispatch, SetStateAction } from 'react'
import Button from '@/components/common/Button'
import { useAuthStore } from '@/store/authStore'
import { postMemberEmployeeRegister } from '@/lib/auth'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

interface SignUpAdditionalInfoFormProps {
  setCurrentStep: Dispatch<SetStateAction<1 | 2>>
}

export default function SignUpAdditionalInfoForm({ setCurrentStep }: SignUpAdditionalInfoFormProps) {
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp) ?? {}
  const router = useRouter()

  const isFormValid =
    !!employeeSignUp.zipcode &&
    !!employeeSignUp.address1 &&
    !!employeeSignUp.address2 &&
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
        <AddressField />
        <BirthDateField />
        <NationalityField />
        <VisaField />
        <EducationField />
        <GenderField />
        <TermsOfServiceField />
      </section>
      <Button onClick={() => setCurrentStep(1)} size={'lg'} type={'outline'}>
        이전
      </Button>
      <Button
        onClick={async () => {
          setCurrentStep(2)
          const result = await postMemberEmployeeRegister(employeeSignUp)
          if (result.data) {
            Cookies.set('accessToken', result.data.accessToken)
            Cookies.set('refreshToken', result.data.accessToken)
          }
          console.log('회원가입 response', result)
          router.back()
        }}
        size={'lg'}
        // type={'active'}
        type={isFormValid ? 'active' : 'disabled'}
        customClassName={'w-full'}
      >
        다음
      </Button>
    </div>
  )
}
