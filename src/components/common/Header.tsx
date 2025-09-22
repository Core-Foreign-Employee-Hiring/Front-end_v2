'use client'
import Image from 'next/image'
import { AlarmIcon, BackIcon, GlobalIcon, MenuCancelIcon, MenuIcon } from '@/assets/svgComponents'
import { usePathname, useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'

interface HeaderProps {
  setIsAlarmModalOpen?: Dispatch<SetStateAction<boolean>>
  isAlarmModalOpen?: boolean
  setIsLanguageSelectModalOpen?: Dispatch<SetStateAction<boolean>>
  isLanguageSelectModalOpen?: boolean
  isHomeMenuOpen?: boolean
  setIsHomeMenuOpen?: Dispatch<SetStateAction<boolean>>
  title?: string
  headerType?: 'default' | 'navbar' | 'dynamic'
  onBack?: () => void
}

const Header = ({
  isAlarmModalOpen,
  setIsAlarmModalOpen,
  setIsLanguageSelectModalOpen,
  isLanguageSelectModalOpen,
  isHomeMenuOpen,
  setIsHomeMenuOpen,
  title,
  headerType = 'default',
  onBack,
}: HeaderProps) => {
  const pathname = usePathname()
  const router = useRouter()

  const navContents = [
    { title: '홈', router: '/' },
    { title: '합격 아카이브', router: '/archive' },
    { title: '스터디', router: '/study' },
  ]

  const renderHeaderType = (headerType: 'default' | 'navbar' | 'dynamic') => {
    switch (headerType) {
      case 'default':
        return (
          <div className="border-gray2 flex h-[80px] items-center justify-between border-b bg-white px-[32px]">
            <div className="flex items-center gap-x-[55px]">
              <Image
                className=""
                onClick={() => {
                  router.push('/')
                }}
                src={'/logo.svg'}
                width={102}
                height={32}
                alt="로고"
              />
            </div>

            <section className="flex items-center">
              <div className="flex gap-x-2">
                <GlobalIcon
                  onClick={() => {
                    if (setIsLanguageSelectModalOpen && isLanguageSelectModalOpen !== undefined) {
                      setIsLanguageSelectModalOpen(!isLanguageSelectModalOpen)
                    }
                  }}
                  width={32}
                  height={32}
                />
                {isHomeMenuOpen ? (
                  <MenuCancelIcon
                    onClick={() => {
                      if (setIsHomeMenuOpen) {
                        setIsHomeMenuOpen(false)
                      }
                    }}
                    width={32}
                    height={32}
                  />
                ) : (
                  <MenuIcon
                    onClick={() => {
                      if (setIsHomeMenuOpen) {
                        setIsHomeMenuOpen(true)
                      }
                    }}
                    width={32}
                    height={32}
                  />
                )}
              </div>
            </section>
          </div>
        )
      case 'navbar':
        return (
          <div className="border-gray2 flex w-full gap-x-[52px] border-b bg-white py-[18px] md:px-5 lg:px-[200px] xl:px-[200px] 2xl:px-[200px]">
            {navContents.map((nav) => {
              return (
                <button
                  key={nav.title}
                  onClick={() => {
                    router.push(nav.router)
                  }}
                  className={`${pathname === nav.router ? 'text-main' : ''} title-sm`}
                >
                  {nav.title}
                </button>
              )
            })}
          </div>
        )
      case 'dynamic':
        return (
          <div className="relative flex w-full items-center bg-white px-5 py-[14px]">
            <BackIcon
              onClick={() => {
                onBack ? onBack() : router.back()
              }}
              width={6}
              height={12}
            />
            <h1 className="subtitle-md absolute left-1/2 -translate-x-1/2 whitespace-nowrap">{title}</h1>
          </div>
        )
    }
  }

  return (
    <header className="fixed left-1/2 z-[40] mx-auto w-[375px] -translate-x-1/2">{renderHeaderType(headerType)}</header>
  )
}
export default Header
