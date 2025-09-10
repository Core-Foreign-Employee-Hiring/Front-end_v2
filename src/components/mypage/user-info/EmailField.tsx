import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { useState } from 'react'
import { postMemberVerificationEmail, postMemberVerifyEmail } from '@/lib/auth'
import { useMyPageStore } from '@/store/mypageStore'

export default function EmailField() {
  const myPageInfo = useMyPageStore((state) => state.myPageInfo)
  const setState = useMyPageStore((state) => state.setState)

  // 이메일 정규식 검사 함수
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const isEmailValid = isValidEmail(myPageInfo?.email ?? '') // 이메일 정규식 검사 통과했는지
  const [isVerifyCodeFieldOpen, setIsVerifyCodeFieldOpen] = useState<boolean | undefined>(undefined)
  const [verifyCode, setVerifyCode] = useState<string>('')
  // 이메일 인증
  const isEmailRegisteredError = useMyPageStore((state) => state.isEmailRegisteredError)
  // 이메일 코드 인증
  const isEmailCodeVerified = useMyPageStore((state) => state.isEmailCodeVerified)

  // 로딩 상태 추가
  const [isEmailVerificationLoading, setIsEmailVerificationLoading] = useState<boolean>(false)

  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="subtitle-md">이메일</h3>
      <div className="flex gap-x-2">
        <Input
          inputBoxStyle={'default'}
          type={'text'}
          value={myPageInfo?.email ?? ''}
          setValue={(e) => {
            if (myPageInfo !== undefined) {
              setState({
                ...myPageInfo,
                myPageInfo: { ...myPageInfo, email: e.target.value },
              })
            }
            // 이메일 다시 입력할 경우 리셋
            setState({ isEmailRegisteredError: undefined, isEmailCodeVerified: undefined })
            setVerifyCode('')
            setIsVerifyCodeFieldOpen(undefined)
          }}
          customClassName={'w-full'}
        />
        <Button
          size={'lg'}
          type={isEmailValid ? 'active' : 'disabled'}
          onClick={async () => {
            if (myPageInfo?.email && !isEmailVerificationLoading) {
              setIsEmailVerificationLoading(true) // 로딩 시작
              try {
                const result = await postMemberVerifyEmail(myPageInfo?.email)
                console.log('result', result)
                setIsVerifyCodeFieldOpen(result.success)
                if (result.status === 400) {
                  setState({ isEmailRegisteredError: false })
                }
              } catch (error) {
                console.error('이메일 인증 요청 실패:', error)
              } finally {
                setIsEmailVerificationLoading(false) // 로딩 종료
              }
            }
          }}
          disabled={!isEmailValid || isEmailVerificationLoading}
          customClassName={'whitespace-nowrap flex items-center justify-center'}
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

      {isEmailRegisteredError === undefined ? null : <p className="badge-md text-error">이미 등록된 이메일입니다.</p>}

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
                const result = await postMemberVerificationEmail(verifyCode)
                console.log('result', result)
                if (result.success) {
                  setState({ isEmailCodeVerified: true })
                } else if (result.status === 400) {
                  setState({ isEmailCodeVerified: false })
                }
              }}
              customClassName={'w-[96px] h-[46px] whitespace-nowrap'}
            >
              인증하기
            </Button>
          </div>
          {isEmailCodeVerified === undefined ? null : isEmailCodeVerified ? (
            <p className="badge-md text-main">인증되었습니다.</p>
          ) : (
            <p className="badge-md text-error">인증코드를 다시 확인해주세요</p>
          )}
        </div>
      ) : null}
    </div>
  )
}
