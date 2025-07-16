import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { useAuthStore } from '@/store/authStore'
import { ChangeEvent, useState } from 'react'
import { postMemberVerificationPhoneCode, postMemberVerifyPhone } from '@/lib/auth'

const PhoneNumberField = () => {
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)
  const setAuthStoreState = useAuthStore((state) => state.setState)
  const [isVerifyCodeFieldOpen, setIsVerifyCodeFieldOpen] = useState<boolean | undefined>()
  const [verifyCode, setVerifyCode] = useState<string>('')
  const isPhoneVerified = useAuthStore((state) => state.isEmployeePhoneVerified)

  return (
    <section className="flex flex-col gap-y-2">
      <p className="subtitle-lg">
        전화번호<span className="text-main">*</span>
      </p>
      <div className="flex items-center gap-x-2">
        <Input
          value={employeeSignUp?.phoneNumber ?? ''}
          setValue={(e: ChangeEvent<HTMLInputElement>) => {
            const onlyDigits = e.target.value.replace(/\D/g, '')
            setAuthStoreState({ ...employeeSignUp, employeeSignUp: { ...employeeSignUp, phoneNumber: onlyDigits } })
          }}
          inputBoxStyle={'default'}
          type={'text'}
          placeholder={'‘-’ 제외하고 번호 입력'}
          customClassName={'w-full'}
        />
        <Button
          size={'lg'}
          type={employeeSignUp?.phoneNumber?.length === 11 ? 'active' : 'disabled'}
          onClick={async () => {
            if (employeeSignUp?.phoneNumber) {
              console.log('body', employeeSignUp?.phoneNumber)
              const result = await postMemberVerifyPhone(employeeSignUp.phoneNumber)
              console.log('result', result)
              setIsVerifyCodeFieldOpen(result.success)
            }
          }}
          customClassName={'w-[96px] h-[46px] whitespace-nowrap'}
        >
          인증번호
        </Button>
      </div>

      {isVerifyCodeFieldOpen ? (
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <Input
              value={verifyCode}
              setValue={(e) => {
                setVerifyCode(e.target.value)
              }}
              inputBoxStyle={'default'}
              type={'text'}
              placeholder={'인증번호 입력'}
              customClassName={'w-full'}
            />
            <Button
              size={'lg'}
              type={verifyCode.length !== 6 ? 'disabled' : 'active'}
              onClick={async () => {
                const result = await postMemberVerificationPhoneCode(verifyCode)
                console.log('result', result)
                setAuthStoreState({ isEmployeePhoneVerified: result.success })
              }}
              customClassName={'w-[96px] h-[46px] whitespace-nowrap'}
            >
              인증하기
            </Button>
          </div>
          {isPhoneVerified === undefined ? null : isPhoneVerified ? (
            <p className="badge-md text-main">인증되었습니다.</p>
          ) : (
            <p className="badge-md text-error">인증코드를 다시 확인해주세요</p>
          )}
        </div>
      ) : null}
    </section>
  )
}
export default PhoneNumberField
