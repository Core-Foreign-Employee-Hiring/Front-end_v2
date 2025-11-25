import MiddleModal from '@/components/common/MiddleModal'
import { Dispatch, SetStateAction, useCallback } from 'react'
import { ApplicationMethodType } from '@/types/recruit'
import Button from '@/components/common/Button'
import Link from 'next/link'
import useClipboard from '@/hooks/useClipboard'

interface ApplicationModalProps {
  isApplicationMethodModalOpen: true
  setIsApplicationMethodModalOpen: Dispatch<SetStateAction<boolean>>
  applicationMethod: ApplicationMethodType | undefined | null
  directInputApplicationMethod: string | undefined | null
}

export default function ApplicationModal({
  applicationMethod,
  isApplicationMethodModalOpen,
  setIsApplicationMethodModalOpen,
  directInputApplicationMethod,
}: ApplicationModalProps) {
  const { copyToClipboard, isLoading } = useClipboard()

  const renderApplicationMethod = (applicationMethod: ApplicationMethodType | undefined | null) => {
    switch (applicationMethod) {
      case 'EMAIL':
        return '‘이메일 지원’'
      case 'PHONE_SMS':
        return '‘전화 / 문자 지원’'
      default:
        return '‘웹사이트 지원‘'
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
            {isLoading ? '복사 중...' : '이메일 복사'}
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
            {isLoading ? '복사 중...' : '전화번호 복사'}
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
            웹페이지 이동
          </Link>
        )
    }
  }

  const onClose = () => {
    setIsApplicationMethodModalOpen(!isApplicationMethodModalOpen)
  }

  return (
    <MiddleModal modalType={'GENERAL'} isModalOpen={isApplicationMethodModalOpen} onClose={onClose}>
      <div className="flex flex-col gap-y-[40px]">
        <section className="flex flex-col items-center justify-center gap-y-4">
          <p className="subtitle-lg">
            해당 공고는 <span className="text-main">{renderApplicationMethod(applicationMethod)} </span>
            입니다.
          </p>
          <div className="flex w-full flex-col items-center justify-center py-3">
            <p className="body-md text-gray5">{directInputApplicationMethod}</p>
          </div>
        </section>
        <section className="flex gap-x-3">
          <Button
            onClick={() => {
              setIsApplicationMethodModalOpen(false)
            }}
            size={'lg'}
            type={'outline'}
            customClassName={'w-full bg-white'}
          >
            닫기
          </Button>
          {renderDirectInputApplicationMethodButton(applicationMethod)}
        </section>
      </div>
    </MiddleModal>
  )
}
