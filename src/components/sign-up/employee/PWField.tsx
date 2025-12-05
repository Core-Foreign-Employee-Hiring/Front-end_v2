import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { ChangeEvent, useEffect, useState } from 'react'
import { useAuthStore } from '@/store/authStore'
import { EyeIcon, NonEyeIcon } from '@/assets/svgComponents'
import { useTranslation } from 'react-i18next'

const PWField = () => {
  const setAuthStoreState = useAuthStore((state) => state.setState)
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)
  const isEmployeePasswordMatch = useAuthStore((state) => state.isEmployeePasswordMatch)
  const isEmployeePasswordValid = useAuthStore((state) => state.isEmployeePasswordValid)
  const checkPassWord = useAuthStore((state) => state.checkPassWord)
  const [showPassword, setShowPassword] = useState(false)
  const [showCheckPassword, setShowCheckPassword] = useState(false)

  const { t } = useTranslation()

  //비밀번호 문구
  useEffect(() => {
    if (employeeSignUp) {
      if (employeeSignUp.password === undefined) {
        setAuthStoreState({ isEmployeePasswordValid: undefined })
        return
      }
      // 정규식을 사용하여 대소문자, 숫자, 기호, 길이 검증
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_\-+=\[\]{};':"\\|,.<>/?]{8,15}$/

      if (!passwordRegex.test(employeeSignUp.password)) {
        setAuthStoreState({ isEmployeePasswordValid: false })
      } else {
        setAuthStoreState({ isEmployeePasswordValid: true })
      }
    }
  }, [employeeSignUp?.password])

  //비밀번호 확인 문구
  useEffect(() => {
    if (employeeSignUp === undefined) {
      setAuthStoreState({ isEmployeePasswordMatch: undefined })
      return
    }
    if (checkPassWord === employeeSignUp?.password) {
      setAuthStoreState({ isEmployeePasswordMatch: true })
    } else {
      setAuthStoreState({ isEmployeePasswordMatch: false })
    }
  }, [checkPassWord])

  return (
    <>
      <section className="flex flex-col gap-y-2">
        <p className="subtitle-lg">
          {t('signUp.pw.label')}
          <span className="text-main">*</span>
        </p>
        <Input
          rightIcon={
            <div
              onClick={() => {
                setShowPassword(!showPassword)
              }}
            >
              {showPassword ? <NonEyeIcon width={28} height={28} /> : <EyeIcon width={28} height={28} />}
            </div>
          }
          value={employeeSignUp?.password ?? ''}
          setValue={(e: ChangeEvent<HTMLInputElement>) => {
            setAuthStoreState({ ...employeeSignUp, employeeSignUp: { ...employeeSignUp, password: e.target.value } })
          }}
          inputBoxStyle={
            isEmployeePasswordValid !== undefined ? (isEmployeePasswordValid ? 'default' : 'error') : 'default'
          }
          type={showPassword ? 'text' : 'password'}
          placeholder={t('signUp.pw.placeholder')}
          customClassName={'w-full'}
        />
        {isEmployeePasswordValid !== undefined ? (
          <div className="badge-md">
            {isEmployeePasswordValid ? null : <p className="text-error">{t('signUp.pw.pwError')}</p>}
          </div>
        ) : null}
      </section>
      {isEmployeePasswordValid ? (
        <section className="flex flex-col gap-y-2">
          <p className="subtitle-lg">
            {t('signUp.pw.duplicationPWLabel')}
            <span className="text-main">*</span>
          </p>
          <Input
            rightIcon={
              <div
                onClick={() => {
                  setShowCheckPassword(!showCheckPassword)
                }}
              >
                {showCheckPassword ? <NonEyeIcon width={28} height={28} /> : <EyeIcon width={28} height={28} />}
              </div>
            }
            value={checkPassWord ?? ''}
            setValue={(e: ChangeEvent<HTMLInputElement>) => {
              setAuthStoreState({ checkPassWord: e.target.value })
            }}
            inputBoxStyle={
              isEmployeePasswordMatch !== undefined ? (isEmployeePasswordMatch ? 'default' : 'error') : 'default'
            }
            type={showCheckPassword ? 'text' : 'password'}
            placeholder={t('signUp.pw.duplicationPWPlaceholder')}
            customClassName={'w-full'}
          />
          {isEmployeePasswordMatch !== undefined ? (
            <div className="badge-md">
              {isEmployeePasswordMatch ? null : <p className="text-error">{t('signUp.pw.duplicationPWError')}</p>}
            </div>
          ) : null}
        </section>
      ) : null}
    </>
  )
}
export default PWField
