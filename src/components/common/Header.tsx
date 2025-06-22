'use client'
import Image from 'next/image'
import { AlarmIcon, GlobalIcon, SearchIcon } from '@/assets/svgComponents'
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
          <div className="flex h-[100px] w-full items-center justify-between bg-white md:px-5 lg:px-[200px] xl:px-[200px] 2xl:px-[200px]">
            <Image
              onClick={() => {
                router.push('/')
              }}
              src={'/logo.svg'}
              width={216}
              height={55}
              alt="로고"
            />
            <section className="border-gray4 flex h-fit w-[500px] gap-x-2 rounded-full border px-4 py-3">
              <SearchIcon width={24} height={24} />
              <input placeholder={'어떤 직무와 키워드를 찾으시나요?'} className="w-full" />
            </section>
            <section className="flex items-center gap-x-5">
              <div className="flex gap-x-3">
                <GlobalIcon width={32} height={32} />
                <AlarmIcon width={32} height={32} />
              </div>
              <div className="flex items-center gap-x-2">
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

  return (
    <header className="fixed z-[100] w-full">
      {renderHeaderType('default')}
      {renderHeaderType('navbar')}
    </header>
  )
}
export default Header
