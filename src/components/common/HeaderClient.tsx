'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useModalStore } from '@/store/modalStore'
import { BackIcon, GlobalIcon, MenuCancelIcon, MenuIcon } from '@/assets/svgComponents'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import '@/lib/i18n-client'

interface HeaderClientProps {
  headerType?: 'default' | 'navbar' | 'dynamic'
  currentLng: string
  title: string | undefined
  onBack: (() => void) | undefined
}

export default function HeaderClient({ onBack, currentLng, title, headerType }: HeaderClientProps) {
  const pathname = usePathname()
  const router = useRouter()
  const isLanguageSelectModalOpen = useModalStore((state) => state.isLanguageSelectModalOpen)
  const isHomeMenuOpen = useModalStore((state) => state.isHomeMenuOpen)
  const [isClient, setIsClient] = useState(false)

  const setModalState = useModalStore((state) => state.setState)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    setIsClient(true)

    const savedLanguage = localStorage.getItem('language') || currentLng

    if (i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage)
    }
  }, [currentLng, i18n])

  const navContents = [
    { title: t('navigation.home'), router: `/${currentLng}` },
    { title: t('navigation.archive'), router: `/${currentLng}/archive` },
    { title: t('navigation.study'), router: `/${currentLng}/study` },
  ]

  const renderHeaderType = (headerType: 'default' | 'navbar' | 'dynamic' | undefined) => {
    switch (headerType) {
      case 'default':
        return (
          <section className="flex items-center">
            <div className="flex gap-x-2">
              <GlobalIcon
                onClick={() => {
                  setModalState({ isLanguageSelectModalOpen: !isLanguageSelectModalOpen })
                }}
                width={32}
                height={32}
              />
              {isHomeMenuOpen ? (
                <MenuCancelIcon
                  onClick={() => {
                    setModalState({ isHomeMenuOpen: false })
                  }}
                  width={32}
                  height={32}
                />
              ) : (
                <MenuIcon
                  onClick={() => {
                    setModalState({ isHomeMenuOpen: true })
                  }}
                  width={32}
                  height={32}
                />
              )}
            </div>
          </section>
        )
      case 'navbar':
        return (
          <>
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
          </>
        )
      case 'dynamic':
        return (
          <>
            <BackIcon
              onClick={() => {
                onBack ? onBack() : router.back()
              }}
              width={14}
              height={14}
            />
            <h1 className="subtitle-md absolute left-1/2 -translate-x-1/2 whitespace-nowrap">{title}</h1>
          </>
        )
      default:
        return <></>
    }
  }

  return <>{isClient && renderHeaderType(headerType)}</>
}
