import IdField from '@/components/sign-up/employee/IdField'
import PWField from '@/components/sign-up/employee/PWField'
import NameField from '@/components/sign-up/employee/NameField'
import PhoneNumberField from '@/components/sign-up/employee/PhoneNumberField'
import EmailField from '@/components/sign-up/employee/EmailField'
import { useAuthStore } from '@/store/authStore'
import { Dispatch, SetStateAction } from 'react'
import Button from '@/components/common/Button'
import AddressField from '@/components/sign-up/employee/AddressField'
interface SignUpRequiredFormProps {
  setCurrentStep: Dispatch<SetStateAction<1 | 2>>
}

export default function SignUpRequiredForm({ setCurrentStep }: SignUpRequiredFormProps) {
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)
  const isEmployeeIdVerified = useAuthStore((state) => state.isEmployeeIdVerified) //id가 유효한지 확인하는 state
  const isEmployeePasswordMatch = useAuthStore((state) => state.isEmployeePasswordMatch) //비밀번호 확인과 일치하는지
  const isEmployeePasswordValid = useAuthStore((state) => state.isEmployeePasswordValid) //비밀번호가 유효한지 (8글자 이상 ~)
  const isEmployeePhoneVerified = useAuthStore((state) => state.isEmployeePhoneVerified) // 전화번호 인증
  const isEmployeeEmailVerified = useAuthStore((state) => state.isEmployeeEmailVerified) // 전화번호 인증

  const isFormValid =
    isEmployeeIdVerified &&
    isEmployeePasswordMatch &&
    isEmployeePasswordValid &&
    isEmployeePhoneVerified &&
    isEmployeeEmailVerified &&
    !!employeeSignUp?.name &&
    !!employeeSignUp.zipcode &&
    !!employeeSignUp.address1 &&
    !!employeeSignUp.address2 // name이 undefined, null, 빈 문자열이 아니어야 함

  return (
    <div className="flex w-full flex-col gap-y-[40px]">
      <section className="flex w-full flex-col gap-y-[32px]">
        <IdField />
        <PWField />
        <NameField />
        <PhoneNumberField />
        <EmailField />
        <AddressField />
      </section>
      <Button
        onClick={() => {
          if (isFormValid) {
            setCurrentStep(2)
          }
        }}
        size={'lg'}
        disabled={!isFormValid}
        type={isFormValid ? 'active' : 'disabled'}
        customClassName={'w-full'}
      >
        다음
      </Button>
    </div>
  )
}
