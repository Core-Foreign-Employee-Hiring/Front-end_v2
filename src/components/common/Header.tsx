'use client'
import Image from 'next/image'
import { AlarmIcon, GlobalIcon, MenuIcon, SearchIcon } from '@/assets/svgComponents'
import { usePathname, useRouter } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const router = useRouter()

  const navContents = [
    { title: '홈', router: '/' },
    { title: '채용후기', router: '/review' },
    { title: '스터디 참여', router: '/study' },
  ]

  const renderHeaderType = (headerType: 'default' | 'navbar') => {
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
                <AlarmIcon width={32} height={32} />
                <MenuIcon width={32} height={32} className="desktop:hidden block" />
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
    }
  }

  return <header className="fixed z-[40] w-full">{renderHeaderType('default')}</header>
}
export default Header
