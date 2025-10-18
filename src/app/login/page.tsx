'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { CheckIcon, EyeIcon, NonEyeIcon, UnCheckIcon } from '@/assets/svgComponents'
import { useAuthStore } from '@/store/authStore'
import { postMemberLogin } from '@/lib/auth'
import { UserDataType } from '@/types/common'
import FindAccountProcess from '@/components/login/FindAccountProcess'

const LoginPage = () => {
  const router = useRouter()
  const setAuthState = useAuthStore((state) => state.setState)
  const loginData = useAuthStore((state) => state.loginData)
  // 아이디 저장 체크박스 상태
  const [rememberMe, setRememberMe] = useState(false)
  // 로그인 에러 상태
  const [loginError, setLoginError] = useState(false)
  //비밀번호 공개, 비공개
  const [showPassword, setShowPassword] = useState(false)
  //아이디/비밀번호 찾기 페이지
  const [findAccountProcess, setFindAccountProcess] = useState(false)

  // 컴포넌트 마운트 시 저장된 아이디만 불러오기
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedUserId = localStorage.getItem('savedUserId')

      if (savedUserId) {
        setAuthState({
          loginData: {
            ...loginData,
            userId: savedUserId,
          },
        })
        setRememberMe(true)
      }
    }
  }, [setAuthState])

  // 아이디 저장 체크박스 토글
  const handleRememberMe = () => {
    setRememberMe(!rememberMe)
  }

  // 아이디만 저장/삭제
  const saveUserId = (save: boolean) => {
    if (typeof window !== 'undefined') {
      if (save && loginData?.userId) {
        localStorage.setItem('savedUserId', loginData.userId)
      } else {
        localStorage.removeItem('savedUserId')
      }
    }
  }

  // 로그인 처리
  const handleLogin = async () => {
    if (!loginData) return

    try {
      const result = await postMemberLogin(loginData)

      // 로그인 성공 확인
      if (result.data && result.data.accessToken) {
        // 로그인 성공 시 에러 상태 초기화
        setLoginError(false)

        // 아이디 저장 설정에 따라 아이디만 저장/삭제
        saveUserId(rememberMe)

        // 토큰 저장
        Cookies.set('accessToken', result.data.accessToken)
        Cookies.set('refreshToken', result.data.refreshToken)

        // 사용자 데이터 저장
        const userData: UserDataType = {
          name: result.data.name,
          userId: result.data.userId,
          role: result.data.role,
        }

        if (typeof window !== 'undefined') {
          localStorage.setItem('userData', JSON.stringify(userData))
        }

        // 로그인 성공 후 페이지 이동
        router.push('/')
      } else if (result.status === 400) {
        // result.data가 없거나 accessToken이 없는 경우 = 로그인 실패
        setLoginError(true)
      }
    } catch (error: any) {
      // 네트워크 에러나 예외 발생 시
      setLoginError(true)
    }
  }

  // 입력값 변경 시 에러 상태 초기화
  const handleInputChange = (field: 'userId' | 'password', value: string) => {
    setLoginError(false)
    setAuthState({
      loginData: {
        ...loginData,
        [field]: value,
      },
    })
  }

  return findAccountProcess ? (
    <FindAccountProcess setFindAccountProcess={setFindAccountProcess} />
  ) : (
    <div>
      <div className="flex h-[calc(100vh-112px)] flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="title-lg mt-[40px]">로그인</h1>
          <div className="mt-[40px] flex w-full flex-col items-center justify-center gap-y-[32px] px-5">
            <div className="w-full">
              <section className="flex w-full flex-col gap-y-2">
                <div className="subtitle-lg">아이디</div>
                <Input
                  value={loginData?.userId ?? ''}
                  setValue={(e) => handleInputChange('userId', e.target.value)}
                  customClassName={'w-full'}
                  inputBoxStyle={'default'}
                  type={'email'}
                  placeholder={'아이디를 입력해주세요.'}
                />
              </section>
              <section className="mt-8 flex w-full flex-col gap-y-2">
                <div className="subtitle-lg">비밀번호</div>
                <Input
                  rightIcon={
                    showPassword ? (
                      <NonEyeIcon
                        width={24}
                        height={24}
                        onClick={() => {
                          setShowPassword(!showPassword)
                        }}
                      />
                    ) : (
                      <EyeIcon
                        width={24}
                        height={24}
                        onClick={() => {
                          setShowPassword(!showPassword)
                        }}
                      />
                    )
                  }
                  value={loginData?.password ?? ''}
                  setValue={(e) => handleInputChange('password', e.target.value)}
                  inputBoxStyle={'default'}
                  type={showPassword ? 'text' : 'password'}
                  placeholder={'비밀번호를 입력해주세요.'}
                />
                {loginError && <p className="badge-md text-error">아이디 또는 비밀번호가 맞지 않아요</p>}
              </section>
              <section className="mt-5 flex w-full justify-between">
                <div className="flex cursor-pointer gap-x-2" onClick={handleRememberMe}>
                  {rememberMe ? <CheckIcon width={24} height={24} /> : <UnCheckIcon width={24} height={24} />}
                  <p className="subtitle-md text-gray5">아이디 저장</p>
                </div>
                <div
                  onClick={() => {
                    setFindAccountProcess(!findAccountProcess)
                  }}
                  className="flex items-center gap-x-2"
                >
                  <button className="text-gray5 button">아이디 찾기</button>
                  <div className="border-gray5 h-[14px] border-r-[1px]"></div>
                  <button className="text-gray5 button">비밀번호 찾기</button>
                </div>
              </section>
              <Button onClick={handleLogin} customClassName={'h-[52px] mt-[24px] w-full'} type={'active'} size={'lg'}>
                로그인
              </Button>
            </div>
            <div className="border-gray2 h-[1px] w-full border-b"></div>

            <div className="flex flex-col items-center justify-center gap-y-1">
              <p className="body-sm text-gray5">Korfit 회원이 되어 더 많은 서비스를 즐겨보세요!</p>
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
      </div>
    </div>
  )
}
export default LoginPage
