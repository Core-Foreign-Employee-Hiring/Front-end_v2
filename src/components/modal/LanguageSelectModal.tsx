import MiddleModal from '@/components/common/MiddleModal'
import Button from '@/components/common/Button'
import { CheckIcon, UnCheckIcon } from '@/assets/svgComponents'
import { useModalStore } from '@/store/modalStore'
import { useTranslation } from 'react-i18next'
import { Locale } from '@/lib/i18n.types'
import { usePathname, useRouter } from 'next/navigation'

interface TranslationModalProps {
  onLanguageChange?: (lng: string) => void
}

export default function LanguageSelectModal({ onLanguageChange }: TranslationModalProps) {
  const { i18n } = useTranslation()
  const router = useRouter()
  const pathname = usePathname()
  const isLanguageSelectModalOpen = useModalStore((state) => state.isLanguageSelectModalOpen)
  const setModalState = useModalStore((state) => state.setState)

  const onClose = () => {
    setModalState({ isLanguageSelectModalOpen: !isLanguageSelectModalOpen })
  }

  const changeLanguage = async (langCode: Locale) => {
    try {
      // i18n 언어 변경
      await i18n.changeLanguage(langCode)

      // localStorage에 저장 (선택사항)
      localStorage.setItem('i18nextLng', langCode)

      // 경로 변경 (언어 코드 포함)
      const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${langCode}`)
      router.push(newPathname)

      // 모달 닫기
      setModalState({ isLanguageSelectModalOpen: false })

      // 콜백 실행
      onLanguageChange?.(langCode)
    } catch (error) {
      console.error('언어 변경 실패:', error)
    }
  }

  const languageList = [
    { content: '한국어', type: 'ko' as Locale },
    { content: 'English', type: 'en' as Locale },
  ]

  const { t } = useTranslation()

  return (
    <MiddleModal onClose={onClose} isModalOpen={isLanguageSelectModalOpen} title={'언어 선택'}>
      <div className={'flex flex-col gap-y-6'}>
        <div className="flex flex-col gap-y-3">
          {languageList.map((language) => (
            <div
              key={language.type}
              onClick={() => changeLanguage(language.type)}
              className="bg-gray1 flex h-[52px] cursor-pointer items-center justify-between rounded-[16px] px-4 py-3"
            >
              {i18n.language === language.type ? (
                <CheckIcon width={24} height={24} />
              ) : (
                <UnCheckIcon width={24} height={24} />
              )}

              <p className="body-md text-gray5">{language.content}</p>
            </div>
          ))}
        </div>

        <Button
          onClick={() => {
            setModalState({ isLanguageSelectModalOpen: !isLanguageSelectModalOpen })
          }}
          type={'active'}
          size={'lg'}
        >
          {t('modal.language.done')}
        </Button>
      </div>
    </MiddleModal>
  )
}
