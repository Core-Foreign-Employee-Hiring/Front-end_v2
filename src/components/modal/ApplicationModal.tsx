import Link from 'next/link'

import { useTranslation } from 'react-i18next'
import useClipboard from '@/hooks/useClipboard'

import { ApplicationMethodType } from '@/types/recruit'

import MiddleModal from '@/components/common/MiddleModal'
import Button from '@/components/common/Button'

interface ApplicationModalProps {
  applicationMethod: ApplicationMethodType | undefined | null
  directInputApplicationMethod: string | undefined | null
  onClose: () => void
  isOpen: boolean
}

export default function ApplicationModal({
  applicationMethod,
  directInputApplicationMethod,
  onClose,
  isOpen,
}: ApplicationModalProps) {
  const { copyToClipboard, isLoading } = useClipboard()

  const lang = localStorage.getItem('i18nextLng')

  const { t } = useTranslation()

  const renderApplicationMethod = (applicationMethod: ApplicationMethodType | undefined | null) => {
    switch (applicationMethod) {
      case 'EMAIL':
        return 'recruitDetail.apply.applicationMethod.EMAIL'
      case 'PHONE_SMS':
        return 'recruitDetail.apply.applicationMethod.PHONE_SMS'
      default:
        return 'recruitDetail.apply.applicationMethod.WEBSITE'
    }
  }

  const renderDirectInputApplicationMethodButton = (applicationMethod: ApplicationMethodType | undefined | null) => {
    if (!directInputApplicationMethod) return

    switch (applicationMethod) {
      case 'EMAIL':
        return (
          <Button
            onClick={() => copyToClipboard(directInputApplicationMethod, 'email')}
            size={'lg'}
            type={'active'}
            disabled={isLoading}
            customClassName={'w-full'}
          >
            {isLoading
              ? t('recruitDetail.apply.InputApplicationMethodButton.copy')
              : t('recruitDetail.apply.InputApplicationMethodButton.EMAIL')}
          </Button>
        )
      case 'PHONE_SMS':
        return (
          <Button
            onClick={() => copyToClipboard(directInputApplicationMethod, 'phone')}
            size={'lg'}
            type={'active'}
            disabled={isLoading}
            customClassName={'w-full'}
          >
            {isLoading
              ? t('recruitDetail.apply.InputApplicationMethodButton.copy')
              : t('recruitDetail.apply.InputApplicationMethodButton.PHONE_SMS')}
          </Button>
        )
      default:
        return (
          <Link
            href={directInputApplicationMethod}
            className={
              'bg-main button flex w-full items-center justify-center gap-x-1 rounded-[16px] px-6 py-4 text-white'
            }
          >
            {t('recruitDetail.apply.InputApplicationMethodButton.WEBSITE')}
          </Link>
        )
    }
  }

  return (
    <MiddleModal modalType={'GENERAL'} isModalOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-y-[40px]">
        <section className="flex flex-col items-center justify-center gap-y-4">
          {lang === 'ko' ? (
            <p className="subtitle-lg">
              해당 공고는 <span className="text-main">{t(renderApplicationMethod(applicationMethod))} </span>
              입니다.
            </p>
          ) : (
            <p className="subtitle-lg">
              This job posting is <span className="text-main">{t(renderApplicationMethod(applicationMethod))}</span>.
            </p>
          )}

          <div className="flex w-full flex-col items-center justify-center py-3">
            <p className="body-md text-gray5">{directInputApplicationMethod}</p>
          </div>
        </section>
        <section className="flex gap-x-3">
          <Button onClick={onClose} size={'lg'} type={'outline'} customClassName={'w-full bg-white'}>
            {t('recruitDetail.apply.close')}
          </Button>
          {renderDirectInputApplicationMethodButton(applicationMethod)}
        </section>
      </div>
    </MiddleModal>
  )
}
