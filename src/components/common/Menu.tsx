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
import { useCallback, useState } from 'react'
import Cookies from 'js-cookie'
import { useModalStore } from '@/store/modalStore'
import { useTranslation } from 'react-i18next'

interface MenuProps {
  currentLng: string
}

export default function Menu({ currentLng }: MenuProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [userData, setUserData] = useState<UserDataType | null>(null)
  const setModalState = useModalStore((state) => state.setState)
  const isHomeMenuOpen = useModalStore((state) => state.isHomeMenuOpen)

  const { t } = useTranslation()

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
      title: t('navigation.home'),
      router: `/${currentLng}/`,
      unSelectedIcon: <MobileHomeIcon width={23} height={24} />,
      selectedIcon: <SelectedMobileHomeIcon width={23} height={24} />,
    },
    {
      title: t('navigation.archive'),
      router: `/${currentLng}/archive`,
      unSelectedIcon: <MobileArchiveIcon width={24} height={17} />,
      selectedIcon: <SelectedMobileArchiveIcon width={23} height={24} />,
    },
    {
      title: t('navigation.study'),
      router: `/${currentLng}/study`,
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
                <p className="subtitle-md">{t('navigation.loginRequiredMessage')}</p>
              </div>
              <div className="flex gap-x-3">
                <Button
                  onClick={() => handleNavigate(`/${currentLng}/sign-up`)}
                  type={'outline'}
                  customClassName={'w-full bg-white'}
                  size={'lg'}
                >
                  {t('navigation.signup')}
                </Button>
                <Button
                  onClick={() => handleNavigate(`/${currentLng}/login`)}
                  type={'active'}
                  customClassName={'w-full'}
                  size={'lg'}
                >
                  {t('navigation.login')}
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
              {t('navigation.logout')}
            </Button>
          </div>
        )}
      </div>
    )
  )
}
