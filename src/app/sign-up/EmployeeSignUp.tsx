import ProcessBar from '@/components/common/ProcessBar'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import IdField from '@/app/sign-up/employee/IdField'
import PWField from '@/app/sign-up/employee/PWField'
import NameField from '@/app/sign-up/employee/NameField'
import PhoneNumberField from '@/app/sign-up/employee/PhoneNumberField'

const EmployeeSignUp = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-[20px]">
        <div className="title-lg">회원가입(피고용인)</div>
        <ProcessBar totalStep={2} currentStep={1} step1Content={'필수 정보'} step2Content={'추가 정보'} />
      </div>
      <div className="flex w-full flex-col gap-y-[32px]">
        <IdField />
        <PWField />
        <NameField />
        <PhoneNumberField />
      </div>
    </div>
  )
}
export default EmployeeSignUp
