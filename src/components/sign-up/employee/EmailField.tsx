import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { useAuthStore } from '@/store/authStore'
import { postMemberVerificationEmail, postMemberVerifyEmail } from '@/lib/login'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const EmailField = () => {
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)
  const setAuthStoreState = useAuthStore((state) => state.setState)

  // 이메일 정규식 검사 함수
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const email = employeeSignUp?.email ?? ''
  const isEmailValid = isValidEmail(email) // 이메일 정규식 검사 통과했는지
  const [isVerifyCodeFieldOpen, setIsVerifyCodeFieldOpen] = useState<boolean | undefined>(undefined)
  const [verifyCode, setVerifyCode] = useState<string>('')
  const isEmailCodeVerified = useAuthStore((state) => state.isEmployeeEmailVerified) //코드 통과했는지

  //이미 이메일이 등록된 에러
  const [isEmailRegisteredError, setIsEmailRegisteredError] = useState<boolean | undefined>(undefined)
  const [emailRegisteredErrorMessage, setEmailRegisteredErrorMessage] = useState<string | undefined>(undefined)

  // 로딩 상태 추가
  const [isEmailVerificationLoading, setIsEmailVerificationLoading] = useState<boolean>(false)

  const { t } = useTranslation()

  return (
    <section className="flex flex-col gap-y-2">
      <p className="subtitle-lg">
        {t('signUp.email.label')}
        <span className="text-main">*</span>
      </p>
      <div className="flex items-center justify-center gap-x-2">
        <Input
          value={email}
          setValue={(e) => {
            setAuthStoreState({ ...employeeSignUp, employeeSignUp: { ...employeeSignUp, email: e.target.value } })
            setIsEmailRegisteredError(undefined)
            setIsVerifyCodeFieldOpen(undefined)
            setVerifyCode('')
            setAuthStoreState({ isEmployeeEmailVerified: undefined })
          }}
          inputBoxStyle={'default'}
          type={'email'}
          placeholder={t('signUp.email.placeholder')}
          customClassName={'w-full'}
        />
        <Button
          size={'lg'}
          type={isEmailValid ? 'active' : 'disabled'}
          onClick={async () => {
            setAuthStoreState({ isEmployeeEmailVerified: undefined })
            setIsEmailVerificationLoading(true)
            if (email) {
              try {
                const result = await postMemberVerifyEmail(email)
                if (result.success) {
                  console.log('result', result)
                  setIsVerifyCodeFieldOpen(result.success)
                } else if (result.status === 400) {
                  setIsEmailRegisteredError(false)
                  setEmailRegisteredErrorMessage(result.message)
                }
              } catch (error) {
                console.error('이메일 인증 요청 실패:', error)
              } finally {
                setIsEmailVerificationLoading(false) // 로딩 종료
              }
            }
          }}
          customClassName={'whitespace-nowrap'}
        >
          {isEmailVerificationLoading ? (
            <div className="flex items-center gap-x-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              <span>{t('signUp.email.sendingMessage')}</span>
            </div>
          ) : (
            t('signUp.email.verifyCode')
          )}
        </Button>
      </div>

      {isEmailRegisteredError === undefined ? null : (
        <p className="badge-md text-error">{emailRegisteredErrorMessage}</p>
      )}

      {isVerifyCodeFieldOpen ? (
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <Input
              value={verifyCode}
              setValue={(e) => {
                setVerifyCode(e.target.value)
                setAuthStoreState({ isEmployeeEmailVerified: undefined })
              }}
              inputBoxStyle={'default'}
              type={'text'}
              placeholder={t('signUp.email.verifyCodePlaceholder')}
              customClassName={'w-full'}
            />
            <Button
              size={'lg'}
              type={verifyCode.length !== 6 ? 'disabled' : 'active'}
              onClick={async () => {
                const result = await postMemberVerificationEmail(verifyCode)
                console.log('result', result)
                if (result.success) {
                  setAuthStoreState({ isEmployeeEmailVerified: true })
                } else if (result.status === 400) {
                  setAuthStoreState({ isEmployeeEmailVerified: false })
                }
              }}
              customClassName={'w-[96px] h-[46px] whitespace-nowrap'}
            >
              {t('signUp.email.verifiedButton')}
            </Button>
          </div>
          {isEmailCodeVerified === undefined ? null : isEmailCodeVerified ? (
            <p className="badge-md text-main">{t('signUp.email.verifiedSuccess')}</p>
          ) : (
            <p className="badge-md text-error">{t('signUp.email.verifiedError')}</p>
          )}
        </div>
      ) : null}
    </section>
  )
}
export default EmailField
