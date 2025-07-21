'use client'

import Image from 'next/image'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { UnCheckIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/authStore'
import { postMemberLogin } from '@/lib/auth'
import Cookies from 'js-cookie'

const LoginPage = () => {
  const router = useRouter()
  const role = useAuthStore((state) => state.role)
  const setAuthState = useAuthStore((state) => state.setState)
  const loginData = useAuthStore((state) => state.loginData)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-[600px] flex-col items-center justify-center">
        <Image src={'/logo.svg'} width={266} height={68} alt="로고" />
        <h1 className="title-lg mt-[80px]">로그인</h1>
        <div className="bg-gray1 mt-3 flex gap-x-2 rounded-full p-1">
          <button
            onClick={() => {
              setAuthState({ role: 'Employer' })
            }}
            className={
              role === 'Employer'
                ? 'title-sm bg-main rounded-full px-[39px] py-[8px] text-white'
                : 'title-sm bg-gray1 text-gray5 rounded-full px-[39px] py-[8px]'
            }
          >
            고용인
          </button>
          <button
            onClick={() => {
              setAuthState({ role: 'Employee' })
            }}
            className={
              role === 'Employee'
                ? 'title-sm bg-main rounded-full px-[39px] py-[8px] text-white'
                : 'title-sm bg-gray1 text-gray5 rounded-full px-[39px] py-[8px]'
            }
          >
            피고용인
          </button>
        </div>
        <div className="mt-[40px] flex w-full flex-col items-center justify-center gap-y-[32px]">
          <div className="w-full">
            <section className="flex w-full flex-col gap-y-2">
              <div className="subtitle-lg">아이디</div>
              <Input
                value={loginData?.userId ?? ''}
                setValue={(e) => {
                  setAuthState({
                    loginData: {
                      ...loginData,
                      userId: e.target.value,
                    },
                  })
                }}
                inputBoxStyle={'default'}
                type={'email'}
                placeholder={'아이디를 입력해주세요.'}
              />
            </section>
            <section className="mt-8 flex w-full flex-col gap-y-2">
              <div className="subtitle-lg">비밀번호</div>
              <Input
                value={loginData?.password ?? ''}
                setValue={(e) => {
                  setAuthState({
                    loginData: {
                      ...loginData,
                      password: e.target.value,
                    },
                  })
                }}
                inputBoxStyle={'default'}
                type={'email'}
                placeholder={'아이디를 입력해주세요.'}
              />
              <p className="badge-md text-error">아이디 또는 비밀번호가 맞지 않아요</p>
            </section>
            <section className="mt-5 flex w-full justify-between">
              <div className="flex gap-x-2">
                <UnCheckIcon width={24} height={24} />
                <p className="subtitle-md text-gray5">아이디 저장</p>
              </div>
              <div className="flex items-center gap-x-2">
                <button className="text-gray5 button">아이디 찾기</button>
                <div className="border-gray5 h-[14px] border-r-[1px]"></div>
                <button className="text-gray5 button">비밀번호 찾기</button>
              </div>
            </section>
            <Button
              onClick={async () => {
                if (loginData) {
                  const result = await postMemberLogin(loginData)
                  if (result.data) {
                    Cookies.set('accessToken', result.data.accessToken)
                    Cookies.set('refreshToken', result.data.accessToken)
                  }
                }
              }}
              customClassName={'h-[52px] mt-[24px]'}
              type={'active'}
              size={'lg'}
            >
              로그인
            </Button>
          </div>
          <div className="border-gray2 h-[1px] w-full border-b"></div>

          <div className="flex flex-col items-center justify-center gap-y-1">
            <p className="body-sm text-gray5">FORWORK에 가입하면 채용과 관련된 정보를 쉽게 찾아볼 수 있어요!</p>
            <button
              onClick={() => {
                router.push('/sign-up')
              }}
              className="button text-main border-main border-b"
            >
              회원가입
            </button>
          </div>
        </div>
      </div>

      <div></div>
    </main>
  )
}
export default LoginPage
