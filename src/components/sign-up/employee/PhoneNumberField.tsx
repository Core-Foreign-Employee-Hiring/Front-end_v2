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
  //이미 등록한 전화번호 에러 제어 state
  const [isPhoneRegisteredError, setIsPhoneRegisteredError] = useState<boolean | undefined>(undefined)

  // 로딩 상태 추가
  const [isPhoneNumberVerificationLoading, setIsPhoneNumberVerificationLoading] = useState<boolean>(false)

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
            setIsPhoneRegisteredError(undefined)
            setIsVerifyCodeFieldOpen(undefined)
            setVerifyCode('')
            setAuthStoreState({ isEmployeePhoneVerified: undefined })
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
            setAuthStoreState({ isEmployeePhoneVerified: undefined })
            if (employeeSignUp?.phoneNumber) {
              setIsPhoneNumberVerificationLoading(true) // 로딩 시작
              console.log('body', employeeSignUp?.phoneNumber)
              try {
                const result = await postMemberVerifyPhone(employeeSignUp.phoneNumber)
                console.log('result', result)
                if (result.success) {
                  setIsVerifyCodeFieldOpen(result.success)
                } else if (result.status === 400) {
                  console.log('통과')
                  setIsPhoneRegisteredError(true)
                }
              } catch (error) {
                console.error('연락처 인증 요청 실패:', error)
              } finally {
                setIsPhoneNumberVerificationLoading(false) // 로딩 종료
              }
            }
          }}
          customClassName={'w-[96px] h-[46px] whitespace-nowrap'}
        >
          {isPhoneNumberVerificationLoading ? (
            <div className="flex items-center gap-x-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              <span>전송 중...</span>
            </div>
          ) : (
            '인증번호'
          )}
        </Button>
      </div>

      {isPhoneRegisteredError === undefined ? null : isPhoneRegisteredError ? (
        <p className="badge-md text-error">이미 등록된 전화번호입니다.</p>
      ) : null}

      {isVerifyCodeFieldOpen ? (
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <Input
              value={verifyCode}
              setValue={(e) => {
                setVerifyCode(e.target.value)
                setAuthStoreState({ isEmployeePhoneVerified: undefined })
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
                if (result.success) {
                  setAuthStoreState({ isEmployeePhoneVerified: result.success })
                } else if (result.status === 400) {
                  setAuthStoreState({ isEmployeePhoneVerified: false })
                }
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
