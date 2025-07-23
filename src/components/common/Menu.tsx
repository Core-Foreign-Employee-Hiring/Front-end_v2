import {
  MobileArchiveIcon,
  MobileHomeIcon,
  MobileStudyIcon,
  PersonIcon,
  SelectedMobileArchiveIcon,
  SelectedMobileHomeIcon,
  SelectedMobileStudyIcon,
} from '@/assets/svgComponents'
import Button from '@/components/common/Button'
import { usePathname, useRouter } from 'next/navigation'
import { UserDataType } from '@/types/common'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Cookies, { set } from 'js-cookie'

interface MenuProps {
  setIsHomeMenuOpen: Dispatch<SetStateAction<boolean>>
}

export default function Menu({ setIsHomeMenuOpen }: MenuProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [userData, setUserData] = useState<UserDataType | null>(null)

  useEffect(() => {
    // 클라이언트 사이드에서만 localStorage 접근
    if (typeof window !== 'undefined') {
      const storedUserData = localStorage.getItem('userData')
      if (storedUserData) {
        try {
          const parsedUserData: UserDataType = JSON.parse(storedUserData)
          setUserData(parsedUserData)
        } catch (error) {
          console.error('Failed to parse user data from localStorage:', error)
          setUserData(null)
        }
      }
    }
  }, [])

  const navContents = [
    {
      title: '홈',
      router: '/',
      unSelectedIcon: <MobileHomeIcon width={23} height={24} />,
      selectedIcon: <SelectedMobileHomeIcon width={23} height={24} />,
    },
    {
      title: '합격 아카이브',
      router: '/review',
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
    <>
      <div className="flex flex-col gap-y-[16px] p-5">
        {userData ? (
          <section className="border-gray2 bg-gray1 flex flex-col gap-y-4 rounded-[20px] border p-5">
            <div className="flex items-center gap-x-4">
              <div className="flex flex-col gap-y-1">
                <p className="subtitle-md">{userData.name}님</p>
                <p className="body-sm text-gray4">{userData.userId}</p>
              </div>
            </div>
            <Button
              onClick={() => {
                router.push('/mypage')
                setIsHomeMenuOpen(false)
              }}
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
                onClick={() => {
                  router.push('/sign-up')
                  setIsHomeMenuOpen(false)
                }}
                type={'outline'}
                customClassName={'w-full bg-white'}
                size={'lg'}
              >
                회원가입
              </Button>
              <Button
                onClick={() => {
                  router.push('/login')
                  setIsHomeMenuOpen(false)
                }}
                type={'active'}
                customClassName={'w-full'}
                size={'lg'}
              >
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
                onClick={() => {
                  router.push(content.router)
                  setIsHomeMenuOpen(false)
                }}
                className="flex h-[52px] items-center gap-x-2 px-4"
              >
                {pathname === content.router ? content.selectedIcon : content.unSelectedIcon}{' '}
                <p className={`${pathname === content.router ? 'text-main' : 'text-gray5'} button`}>{content.title}</p>
              </div>
            )
          })}
        </section>
      </div>
      {userData && (
        <div className="fixed bottom-5 w-full px-5">
          <Button
            type={'outline'}
            size={'lg'}
            onClick={() => {
              Cookies.remove('accessToken')
              Cookies.remove('refreshToken')
              if (typeof window !== 'undefined') {
                localStorage.removeItem('userData')
              }
              setIsHomeMenuOpen(false)
            }}
            customClassName={'w-full'}
          >
            로그아웃
          </Button>
        </div>
      )}
    </>
  )
}
