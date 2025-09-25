import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import { EyeIcon, NonEyeIcon } from '@/assets/svgComponents'
import { useAuthStore } from '@/store/authStore'
import { postMemberPasswordResetModify } from '@/lib/auth'

interface PassWordResultProps {
  setStep: Dispatch<SetStateAction<number>>
  setFindAccountProcess: Dispatch<SetStateAction<boolean>>
}
export default function PassWordResult({ setStep, setFindAccountProcess }: PassWordResultProps) {
  const [newPassword, setNewPassword] = useState<string | undefined>(undefined)
  const [isPasswordMatch, setIsPasswordMatch] = useState<undefined | boolean>(undefined)
  const [isPasswordValid, setIsPasswordValid] = useState<undefined | boolean>(undefined)
  const [checkPassword, setCheckPassword] = useState<string | undefined>(undefined)

  const [showPassword, setShowPassword] = useState(false)
  const [showCheckPassword, setShowCheckPassword] = useState(false)

  const setState = useAuthStore((state) => state.setState)
  const modifyPWRequestData = useAuthStore((state) => state.modifyPWRequestData)

  useEffect(() => {
    if (modifyPWRequestData?.code && modifyPWRequestData.newPassword) {
      postMemberPasswordResetModify(modifyPWRequestData).then((result) => {
        if (result.success) {
          setStep(1)
          setFindAccountProcess(false)
        }
      })
    }
  }, [modifyPWRequestData])

  //비밀번호 문구
  useEffect(() => {
    if (newPassword) {
      // 정규식을 사용하여 대소문자, 숫자, 기호, 길이 검증
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/

      if (!passwordRegex.test(newPassword)) {
        setIsPasswordValid(false)
      } else {
        setIsPasswordValid(true)
      }
    } else {
      setIsPasswordValid(undefined)
      return
    }
  }, [newPassword])

  //비밀번호 확인 문구
  useEffect(() => {
    if (newPassword === undefined) {
      setIsPasswordMatch(undefined)
      return
    }
    if (checkPassword === newPassword) {
      setIsPasswordMatch(true)
    } else {
      setIsPasswordMatch(false)
    }
  }, [checkPassword])

  return (
    <div>
      <div className="flex flex-col gap-y-[32px] px-5">
        <section className="flex flex-col gap-y-2">
          <p className="subtitle-lg">
            새로운 비밀번호<span className="text-main">*</span>
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
            value={newPassword ?? ''}
            setValue={(e: ChangeEvent<HTMLInputElement>) => {
              setNewPassword(e.target.value)
            }}
            inputBoxStyle={isPasswordValid !== undefined ? (isPasswordValid ? 'default' : 'error') : 'default'}
            type={showPassword ? 'text' : 'password'}
            placeholder={'대소문자, 숫자, 기호 포함 8~15자'}
            customClassName={'w-full'}
          />
          {isPasswordValid !== undefined ? (
            <div className="badge-md">
              {isPasswordValid ? null : (
                <p className="text-error">비밀번호는 대소문자, 숫자, 기호 포함 8~15자를 만족해야 합니다.</p>
              )}
            </div>
          ) : null}
        </section>
        {isPasswordValid ? (
          <section className="flex flex-col gap-y-2">
            <p className="subtitle-lg">
              새로운 비밀번호 확인<span className="text-main">*</span>
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
              value={checkPassword ?? ''}
              setValue={(e: ChangeEvent<HTMLInputElement>) => {
                setCheckPassword(e.target.value)
              }}
              inputBoxStyle={isPasswordMatch !== undefined ? (isPasswordMatch ? 'default' : 'error') : 'default'}
              type={showCheckPassword ? 'text' : 'password'}
              placeholder={'대소문자, 숫자, 기호 포함 8~15자'}
              customClassName={'w-full'}
            />
            {isPasswordMatch !== undefined ? (
              <div className="badge-md">
                {isPasswordMatch ? null : <p className="text-error">비밀번호가 일치하지 않습니다.</p>}
              </div>
            ) : null}
          </section>
        ) : null}
      </div>

      <div className="fixed bottom-0 flex w-[375px] gap-x-3 bg-white px-5 pb-5">
        <Button
          onClick={async () => {
            setState({
              ...modifyPWRequestData,
              modifyPWRequestData: { ...modifyPWRequestData, newPassword: checkPassword },
            })
          }}
          buttonType={'submit'}
          disabled={!(newPassword && isPasswordMatch && isPasswordValid)}
          type={newPassword && isPasswordMatch && isPasswordValid ? 'active' : 'disabled'}
          size={'lg'}
          customClassName={'w-full'}
        >
          비밀번호 재설정
        </Button>
      </div>
    </div>
  )
}
