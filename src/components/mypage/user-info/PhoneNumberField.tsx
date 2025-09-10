import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { ChangeEvent, useState } from 'react'
import { postMemberVerificationPhoneCode, postMemberVerifyPhone } from '@/lib/auth'
import { useMyPageStore } from '@/store/mypageStore'

export default function PhoneNumberField() {
  const myPageInfo = useMyPageStore((state) => state.myPageInfo)
  const setState = useMyPageStore((state) => state.setState)

  const [isVerifyCodeFieldOpen, setIsVerifyCodeFieldOpen] = useState<boolean | undefined>()
  const [verifyCode, setVerifyCode] = useState<string>('')
  //이미 등록한 전화번호 에러 제어 state
  const isPhoneRegisteredError = useMyPageStore((state) => state.isPhoneRegisteredError)
  //연락처 인증코드
  const isPhoneVerified = useMyPageStore((state) => state.isPhoneVerified)

  // 로딩 상태 추가
  const [isPhoneNumberVerificationLoading, setIsPhoneNumberVerificationLoading] = useState<boolean>(false)

  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="subtitle-md">
        연락처 <span className="text-gray5">('-'제외)</span>
      </h3>
      <div className="flex gap-x-2">
        <Input
          value={myPageInfo?.phoneNumber ?? ''}
          setValue={(e: ChangeEvent<HTMLInputElement>) => {
            const onlyDigits = e.target.value.replace(/\D/g, '')
            if (myPageInfo !== undefined) {
              setState({
                ...myPageInfo,
                myPageInfo: { ...myPageInfo, phoneNumber: onlyDigits },
              })
            }
            //전화번호 변경되면 초기화
            setState({ isPhoneRegisteredError: undefined, isPhoneVerified: undefined })
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
          type={myPageInfo?.phoneNumber?.length === 11 ? 'active' : 'disabled'}
          onClick={async () => {
            if (myPageInfo?.phoneNumber && !isPhoneNumberVerificationLoading) {
              setIsPhoneNumberVerificationLoading(true) // 로딩 시작
              try {
                const result = await postMemberVerifyPhone(myPageInfo?.phoneNumber)
                console.log('result', result)
                if (result.success) {
                  setIsVerifyCodeFieldOpen(result.success)
                } else if (result.status === 400 && result.message === '이미 등록된 전화번호 입니다.') {
                  setState({ isPhoneRegisteredError: true })
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
        <p className="badge-md text-error">이미 등록된 전화번호입니다.</p>
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
            <Button
              size={'lg'}
              type={verifyCode.length !== 6 ? 'disabled' : 'active'}
              onClick={async () => {
                const result = await postMemberVerificationPhoneCode(verifyCode)
                console.log('result', result)
                if (result.success) {
                  setState({ isPhoneVerified: result.success })
                } else if (result.status === 400) {
                  setState({ isPhoneVerified: false })
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
    </div>
  )
}
