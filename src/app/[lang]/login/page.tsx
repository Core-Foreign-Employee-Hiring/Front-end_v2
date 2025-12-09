'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { CheckIcon, EyeIcon, NonEyeIcon, UnCheckIcon } from '@/assets/svgComponents'
import { useAuthStore } from '@/store/authStore'
import { UserDataType } from '@/types/common'
import { useTranslation } from 'react-i18next'
import { postAuth } from '@/lib/auth'

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

  const [lang, setLang] = useState<string | null>()

  const { t } = useTranslation()

  // 컴포넌트 마운트 시 저장된 아이디만 불러오기
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedUserId = localStorage.getItem('savedUserId')
      const lang = localStorage.getItem('i18nextLng')
      setLang(lang)
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
      const result = await postAuth(loginData)

      if (result.accessToken && result.refreshToken) {
        setLoginError(false)

        saveUserId(rememberMe)

        // 쿠키 설정 - Route Handler 호출
        await fetch(`${process.env.NEXT_PUBLIC_URL}/api/auth/cookies`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            accessToken: result.accessToken,
            refreshToken: result.refreshToken,
          }),
        })

        const userData: UserDataType = {
          name: result.name,
          userId: result.userId,
          role: result.role,
        }

        if (typeof window !== 'undefined') {
          localStorage.setItem('userData', JSON.stringify(userData))
        }

        router.push(`/${lang}`)
      } else if (!result.success) {
        setLoginError(true)
      }
    } catch (error: any) {
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

  return (
    <div>
      <div className="flex h-[calc(100vh-112px)] flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="title-lg mt-[40px]">{t('login.title')}</h1>
          <div className="mt-[40px] flex w-full flex-col items-center justify-center gap-y-[32px] px-5">
            <div className="w-full">
              <section className="flex w-full flex-col gap-y-2">
                <div className="subtitle-lg">{t('login.id.label')}</div>
                <Input
                  value={loginData?.userId ?? ''}
                  setValue={(e) => handleInputChange('userId', e.target.value)}
                  customClassName={'w-full'}
                  inputBoxStyle={'default'}
                  type={'email'}
                  placeholder={t('login.id.placeholder')}
                />
              </section>
              <section className="mt-8 flex w-full flex-col gap-y-2">
                <div className="subtitle-lg">{t('login.pw.label')}</div>
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
                  placeholder={t('login.pw.placeholder')}
                />
                {loginError && <p className="badge-md text-error">{t('login.pw.error')}</p>}
              </section>
              <section className="mt-5 flex w-full justify-between">
                <div className="flex cursor-pointer gap-x-2" onClick={handleRememberMe}>
                  {rememberMe ? <CheckIcon width={24} height={24} /> : <UnCheckIcon width={24} height={24} />}
                  <p className="subtitle-md text-gray5">{t('login.id.save')}</p>
                </div>
                <div
                  onClick={() => {
                    router.push(`/${lang}/login/find?type=id&step=1`)
                  }}
                  className="flex items-center gap-x-2"
                >
                  <button className="text-gray5 button">{t('login.id.searchId')}</button>
                  <div className="border-gray5 h-[14px] border-r-[1px]"></div>
                  <button className="text-gray5 button">{t('login.pw.searchPW')}</button>
                </div>
              </section>
              <Button onClick={handleLogin} customClassName={'h-[52px] mt-[24px] w-full'} type={'active'} size={'lg'}>
                {t('login.title')}
              </Button>
            </div>
            <div className="border-gray2 h-[1px] w-full border-b"></div>

            <div className="flex flex-col items-center justify-center gap-y-1">
              <p className="body-sm text-gray5">{t('login.description')}</p>
              <button
                onClick={() => {
                  router.push(`/${lang}/sign-up`)
                }}
                className="button text-main border-main border-b"
              >
                {t('signUp.title')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginPage
