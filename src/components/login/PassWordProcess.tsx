import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { Dispatch, SetStateAction, useState } from 'react'
import { FindPWRequestDataType } from '@/types/auth'
import { postMemberPasswordResetSendCode, postMemberPasswordResetVerifyCode, postMemberVerifyEmail } from '@/lib/auth'

interface PassWordProcessProps {
  setStep: Dispatch<SetStateAction<number>>
}

export default function PassWordProcess({}: PassWordProcessProps) {
  const [findPWRequestData, setFindPWRequestData] = useState<FindPWRequestDataType>()
  // 이메일 정규식 검사 함수
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  const isEmailValid = isValidEmail(findPWRequestData?.email ?? '') // 이메일 정규식 검사 통과했는지
  const [verifyCode, setVerifyCode] = useState<string>('')
  //이미 등록한 전화번호 에러 제어 state
  const [isError, setIsError] = useState<boolean | undefined>(undefined)
  //연락처 인증코드
  const [isVerified, setIsVerified] = useState<boolean | undefined>(undefined)

  // 로딩 상태 추가
  const [isEmailVerificationLoading, setIsEmailVerificationLoading] = useState<boolean>(false)

  return (
    <div className="flex flex-col gap-y-[24px]">
      <div className="flex flex-col gap-y-[32px] px-5">
        <section className="flex flex-col gap-y-2">
          <p className="subtitle-lg">
            아이디 <span className="text-main">*</span>
          </p>
          <Input
            value={findPWRequestData?.userId ?? ''}
            setValue={(e) => {
              setFindPWRequestData((prev) => ({ ...prev!, userId: e.target.value }))
            }}
            inputBoxStyle={'default'}
            type={'text'}
            placeholder={'아이디를 입력해주세요.'}
          />
        </section>
        <section className="flex flex-col gap-y-2">
          <p className="subtitle-lg">
            이름 <span className="text-main">*</span>
          </p>
          <Input
            value={findPWRequestData?.name ?? ''}
            setValue={(e) => {
              setFindPWRequestData((prev) => ({ ...prev!, name: e.target.value }))
            }}
            inputBoxStyle={'default'}
            type={'text'}
            placeholder={'이름을 입력해주세요.'}
          />
        </section>
        <section className="flex flex-col gap-y-2">
          <p className="subtitle-lg">
            이메일 <span className="text-main">*</span>
          </p>
          <div className="flex gap-x-2">
            <Input
              value={findPWRequestData?.email ?? ''}
              setValue={(e) => {
                setFindPWRequestData((prev) => ({ ...prev!, email: e.target.value }))
              }}
              inputBoxStyle={'default'}
              type={'text'}
              placeholder={'이메일을 입력해주세요.'}
              customClassName={'w-full'}
            />
            <Button
              size={'lg'}
              disabled={!isEmailValid || isEmailVerificationLoading}
              type={isEmailValid ? 'active' : 'disabled'}
              customClassName={'whitespace-nowrap'}
              onClick={async () => {
                setIsError(undefined)
                if (findPWRequestData?.email && !isEmailVerificationLoading) {
                  setIsEmailVerificationLoading(true) // 로딩 시작
                  try {
                    const result = await postMemberPasswordResetSendCode(findPWRequestData)
                    console.log('result', result)

                    if (result.success) {
                      setIsVerified(result.success)
                    }
                    if (result.status === 404 && result.message === '해당 사용자를 찾을 수 없습니다.') {
                      setIsError(true)
                    }
                  } catch (error) {
                    console.error('이메일 인증 요청 실패:', error)
                  } finally {
                    setIsEmailVerificationLoading(false) // 로딩 종료
                  }
                }
              }}
            >
              {isEmailVerificationLoading ? (
                <div className="flex items-center gap-x-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  <span>전송 중...</span>
                </div>
              ) : (
                '이메일 인증'
              )}
            </Button>
          </div>
          {isVerified ? (
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
          ) : null}
          {isError === undefined ? null : isError ? (
            <p className="badge-md text-error">해당 사용자를 찾을 수 없습니다.</p>
          ) : null}
        </section>
      </div>
      <div className="fixed bottom-0 w-full bg-white px-5 pb-5">
        <Button
          onClick={async () => {
            const result = await postMemberPasswordResetVerifyCode(verifyCode)
          }}
          buttonType={'submit'}
          type={verifyCode ? 'active' : 'disabled'}
          disabled={!verifyCode}
          size={'lg'}
          customClassName={'w-full'}
        >
          비밀번호 재설정
        </Button>
      </div>
    </div>
  )
}
