'use client'
import Image from 'next/image'
import { AlarmIcon, BackIcon, GlobalIcon, MenuCancelIcon, MenuIcon } from '@/assets/svgComponents'
import { usePathname, useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'

interface HeaderProps {
  setIsAlarmModalOpen?: Dispatch<SetStateAction<boolean>>
  isAlarmModalOpen?: boolean
  isHomeMenuOpen?: boolean
  setIsHomeMenuOpen?: Dispatch<SetStateAction<boolean>>
  title?: string
  headerType?: 'default' | 'navbar' | 'dynamic'
  onBack?: () => void
}

const Header = ({
  isAlarmModalOpen,
  setIsAlarmModalOpen,
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
          <div className="desktop:h-[100px] desktop:px-[200px] border-gray2 flex h-[80px] items-center justify-between border-b bg-white px-[32px]">
            <div className="flex items-center gap-x-[55px]">
              <Image
                className="desktop:hidden block"
                onClick={() => {
                  router.push('/')
                }}
                src={'/logo.svg'}
                width={102}
                height={32}
                alt="로고"
              />
              <Image
                className="desktop:block hidden"
                onClick={() => {
                  router.push('/')
                }}
                src={'/logo.svg'}
                width={154}
                height={48}
                alt="로고"
              />
              <div className="desktop:block desktop:gap-x-[52px] flex hidden">
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
            </div>

            <section className="desktop:gap-x-5 flex items-center">
              <div className="desktop:gap-x-3 flex gap-x-2">
                <GlobalIcon width={32} height={32} />
                <AlarmIcon
                  onClick={() => {
                    setIsAlarmModalOpen(!isAlarmModalOpen)
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
                    className="desktop:hidden block"
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
                    className="desktop:hidden block"
                  />
                )}
              </div>
              <div className="desktop:block flex hidden w-full items-center gap-x-2 whitespace-nowrap">
                <button
                  onClick={() => {
                    router.push('/login')
                  }}
                  className="text-gray4"
                >
                  로그인
                </button>
                <div className="border-gray4 h-[14px] border-r-[1px]"></div>
                <button
                  onClick={() => {
                    router.push('/sign-up')
                  }}
                  className="text-gray4"
                >
                  회원가입
                </button>
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

  return <header className="fixed z-[40] w-full">{renderHeaderType(headerType)}</header>
}
export default Header
