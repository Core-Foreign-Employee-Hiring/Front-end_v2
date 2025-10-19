'use client'

import {
  MobileArchiveIcon,
  MobileHomeIcon,
  MobileStudyIcon,
  SelectedMobileArchiveIcon,
  SelectedMobileHomeIcon,
  SelectedMobileStudyIcon,
} from '@/assets/svgComponents'
import Button from '@/components/common/Button'
import { usePathname, useRouter } from 'next/navigation'
import { UserDataType } from '@/types/common'
import { useCallback, useEffect, useRef, useState } from 'react'
import Cookies from 'js-cookie'
import { useModalStore } from '@/store/modalStore'

export default function Menu() {
  const pathname = usePathname()
  const router = useRouter()
  const [userData, setUserData] = useState<UserDataType | null>(null)
  const setModalState = useModalStore((state) => state.setState)
  const isHomeMenuOpen = useModalStore((state) => state.isHomeMenuOpen)
  const abortControllerRef = useRef<AbortController | null>(null)
  // 🔥 bfcache 진입/복원 처리
  useEffect(() => {
    const handlePagehide = () => {
      // 진행 중인 작업 취소
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }

    const handlePageshow = (event: Event) => {
      const e = event as any
      if (e.persisted) {
        // bfcache에서 복원되었을 때
        // 필요한 상태 재설정
        console.log('Menu: bfcache에서 복원됨')
      }
    }

    window.addEventListener('pagehide', handlePagehide)
    window.addEventListener('pageshow', handlePageshow)

    return () => {
      window.removeEventListener('pagehide', handlePagehide)
      window.removeEventListener('pageshow', handlePageshow)
    }
  }, [])

  // 🔥 클라이언트 사이드 데이터 로드 - 더 효율적으로
  useEffect(() => {
    // 첫 마운트 시에만 실행
    const controller = new AbortController()
    abortControllerRef.current = controller

    if (typeof window !== 'undefined') {
      try {
        const storedUserData = localStorage.getItem('userData')
        if (storedUserData && !controller.signal.aborted) {
          const parsedUserData: UserDataType = JSON.parse(storedUserData)
          setUserData(parsedUserData)
        }
      } catch (error) {
        console.error('Failed to parse user data from localStorage:', error)
        setUserData(null)
      }
    }

    return () => {
      controller.abort()
    }
  }, [])

  const handleNavigate = useCallback(
    (path: string) => {
      router.push(path)
      setModalState({ isHomeMenuOpen: false })
    },
    [router, setModalState]
  )

  const handleLogout = useCallback(() => {
    Cookies.remove('accessToken')
    Cookies.remove('refreshToken')
    if (typeof window !== 'undefined') {
      localStorage.removeItem('userData')
    }
    setUserData(null)
    setModalState({ isHomeMenuOpen: false })
  }, [setModalState])

  const navContents = [
    {
      title: '홈',
      router: '/',
      unSelectedIcon: <MobileHomeIcon width={23} height={24} />,
      selectedIcon: <SelectedMobileHomeIcon width={23} height={24} />,
    },
    {
      title: '합격 아카이브',
      router: '/archive',
      unSelectedIcon: <MobileArchiveIcon width={24} height={17} />,
      selectedIcon: <SelectedMobileArchiveIcon width={23} height={24} />,
    },
    {
      title: '스터디',
      router: '/study',
      unSelectedIcon: <MobileStudyIcon width={21} height={24} />,
      selectedIcon: <SelectedMobileStudyIcon width={23} height={24} />,
    },
  ]

  return (
    isHomeMenuOpen && (
      <div className="flex h-[calc(100vh-112px)] w-[375px] flex-col bg-white">
        <div className="flex flex-1 flex-col gap-y-[16px] p-5">
          {userData ? (
            <section className="border-gray2 bg-gray1 flex flex-col gap-y-4 rounded-[20px] border p-5">
              <div className="flex items-center gap-x-4">
                <div className="flex flex-col gap-y-1">
                  <p className="subtitle-md">{userData.name}님</p>
                  <p className="body-sm text-gray4">{userData.userId}</p>
                </div>
              </div>
              <Button
                onClick={() => handleNavigate('/mypage')}
                type={'outline'}
                customClassName={'w-full bg-white'}
                size={'lg'}
              >
                마이페이지
              </Button>
            </section>
          ) : (
            <section className="border-gray2 bg-gray1 flex flex-col gap-y-4 rounded-[20px] border p-5">
              <div className="flex items-center gap-x-4">
                <p className="subtitle-md">로그인이 필요해요</p>
              </div>
              <div className="flex gap-x-3">
                <Button
                  onClick={() => handleNavigate('/sign-up')}
                  type={'outline'}
                  customClassName={'w-full bg-white'}
                  size={'lg'}
                >
                  회원가입
                </Button>
                <Button onClick={() => handleNavigate('/login')} type={'active'} customClassName={'w-full'} size={'lg'}>
                  로그인
                </Button>
              </div>
            </section>
          )}
          <section className="flex flex-col">
            {navContents.map((content) => {
              return (
                <div
                  key={content.title}
                  onClick={() => handleNavigate(content.router)}
                  className="flex h-[52px] items-center gap-x-2 px-4"
                >
                  {pathname === content.router ? content.selectedIcon : content.unSelectedIcon}{' '}
                  <p className={`${pathname === content.router ? 'text-main' : 'text-gray5'} button`}>
                    {content.title}
                  </p>
                </div>
              )
            })}
          </section>
        </div>
        {userData && (
          <div className="w-full px-5">
            <Button type={'outline'} size={'lg'} onClick={handleLogout} customClassName={'w-full'}>
              로그아웃
            </Button>
          </div>
        )}
      </div>
    )
  )
}
