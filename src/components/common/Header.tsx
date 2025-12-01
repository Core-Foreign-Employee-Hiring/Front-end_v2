import Image from 'next/image'
import Link from 'next/link'
import { I18nParams } from '@/lib/i18n.types'
import HeaderClient from '@/components/common/HeaderClient'

interface HeaderProps {
  title?: string
  headerType?: 'default' | 'navbar' | 'dynamic'
  onBack?: () => void
  params: Promise<I18nParams>
}

const Header = async ({ title, headerType = 'default', onBack, params }: HeaderProps) => {
  const { lang } = await params

  const renderHeaderType = (headerType: 'default' | 'navbar' | 'dynamic') => {
    switch (headerType) {
      case 'default':
        return (
          <div className="border-gray2 flex h-[80px] items-center justify-between border-b bg-white px-[32px]">
            <Link href={`/${lang}`} className="text-gray-30 hover:text-conic-red-30">
              <div className="flex items-center gap-x-[55px]">
                <Image src={'/logo.svg'} width={102} height={32} alt="로고" />
              </div>
            </Link>
            <HeaderClient currentLng={lang} onBack={onBack} title={title} headerType={headerType} />
          </div>
        )
      case 'navbar':
        return (
          <div className="border-gray2 flex w-full gap-x-[52px] border-b bg-white py-[18px] md:px-5 lg:px-[200px] xl:px-[200px] 2xl:px-[200px]">
            <HeaderClient currentLng={lang} onBack={onBack} title={title} headerType={headerType} />
          </div>
        )
      case 'dynamic':
        return (
          <div className="relative flex w-full items-center bg-white px-5 py-[14px]">
            <HeaderClient currentLng={lang} onBack={onBack} title={title} headerType={headerType} />
          </div>
        )
    }
  }

  return (
    <header className="fixed left-1/2 z-[40] mx-auto w-[375px] -translate-x-1/2">{renderHeaderType(headerType)}</header>
  )
}
export default Header
