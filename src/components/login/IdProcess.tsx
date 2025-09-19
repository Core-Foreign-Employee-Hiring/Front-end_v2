import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { postMemberFindIdSendCode, postMemberFindIdVerifyCode, postMemberVerifyPhone } from '@/lib/auth'
import { useAuthStore } from '@/store/authStore'

interface IdProcessProps {
  setStep: Dispatch<SetStateAction<number>>
}
export default function IdProcess({ setStep }: IdProcessProps) {
  const [findIdRequestData, setFindIdRequestData] = useState<{
    name: string
    phoneNumber: string
  }>()

  const [isVerifyCodeFieldOpen, setIsVerifyCodeFieldOpen] = useState<boolean | undefined>()
  const [verifyCode, setVerifyCode] = useState<string>('')
  //이미 등록한 전화번호 에러 제어 state
  const [isPhoneRegisteredError, setIsPhoneRegisteredError] = useState<boolean | undefined>(undefined)
  //연락처 인증코드
  const [isPhoneVerified, setIsPhoneVerified] = useState<boolean | undefined>(undefined)

  // 로딩 상태 추가
  const [isPhoneNumberVerificationLoading, setIsPhoneNumberVerificationLoading] = useState<boolean>(false)

  //아이디 찾기 결과값 저장
  const setState = useAuthStore((state) => state.setState)

  return (
    <div className="">
      <div className="flex flex-col gap-y-[24px] px-5">
        <div className="flex flex-col gap-y-[32px]">
          {/* 이름 필드 */}
          <section className="flex flex-col gap-y-2">
            <p className="subtitle-lg">
              이름 <span className="text-main">*</span>
            </p>
            <Input
              value={findIdRequestData?.name ?? ''}
              setValue={(e) => {
                setFindIdRequestData((prevState) => ({ ...prevState!, name: e.target.value }))
              }}
              inputBoxStyle={'default'}
              type={'text'}
              placeholder={'이름을 입력해주세요.'}
            />
          </section>

          {/* 전화번호 인증 필드 */}
          <div className="flex flex-col gap-y-3">
            <h3 className="subtitle-md">
              연락처 <span className="text-gray5">('-'제외)</span>
            </h3>
            <div className="flex gap-x-2">
              <Input
                value={findIdRequestData?.phoneNumber ?? ''}
                setValue={(e: ChangeEvent<HTMLInputElement>) => {
                  const onlyDigits = e.target.value.replace(/\D/g, '')
                  if (findIdRequestData !== undefined) {
                    setFindIdRequestData((prevState) => ({ ...prevState!, phoneNumber: onlyDigits }))
                  }
                  //전화번호 변경되면 초기화
                  setIsPhoneVerified(undefined)
                  setIsPhoneRegisteredError(undefined)
                  setIsVerifyCodeFieldOpen(undefined)
                  setVerifyCode('')
                }}
                inputBoxStyle={'default'}
                type={'text'}
                placeholder={'‘-’ 제외하고 번호 입력'}
                customClassName={'w-full'}
              />
              <Button
                size={'lg'}
                type={findIdRequestData?.phoneNumber?.length === 11 ? 'active' : 'disabled'}
                onClick={async () => {
                  if (findIdRequestData?.phoneNumber && !isPhoneNumberVerificationLoading) {
                    setIsPhoneNumberVerificationLoading(true) // 로딩 시작
                    try {
                      const result = await postMemberFindIdSendCode(findIdRequestData)
                      console.log('result', result)
                      if (result.success) {
                        setIsVerifyCodeFieldOpen(result.success)
                      } else if (result.status === 404 && result.message === '해당 사용자를 찾을 수 없습니다.') {
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
                  '연락처 인증'
                )}
              </Button>
            </div>

            {isPhoneRegisteredError === undefined ? null : isPhoneRegisteredError ? (
              <p className="badge-md text-error">회원 정보를 찾을 수 없습니다.</p>
            ) : null}

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
                </div>
                {isPhoneVerified === undefined ? null : isPhoneVerified ? (
                  <p className="badge-md text-main">인증되었습니다.</p>
                ) : (
                  <p className="badge-md text-error">인증코드를 다시 확인해주세요</p>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full bg-white px-5 pb-5">
        <Button
          onClick={async () => {
            setStep(2)
            if (verifyCode) {
              const result = await postMemberFindIdVerifyCode(verifyCode)
              setState({ idResultData: result.data })
            }
          }}
          buttonType={'submit'}
          type={verifyCode ? 'active' : 'disabled'}
          size={'lg'}
          customClassName={'w-full'}
        >
          아이디 검색
        </Button>
      </div>
    </div>
  )
}
