import { Dispatch, ReactNode, SetStateAction } from 'react'
import { CancelIcon } from '@/assets/svgComponents'
import Button from '@/components/common/Button'

type ModalType = 'TITLE' | 'GENERAL'

interface MiddleModalProps {
  modalType?: ModalType
  title?: string
  setIsModalOpen?: Dispatch<SetStateAction<boolean>>
  isModalOpen: boolean
  children: ReactNode
}
export default function MiddleModal({
  modalType = 'TITLE',
  title,
  setIsModalOpen,
  isModalOpen,
  children,
}: MiddleModalProps) {
  const renderModalType = (modalType: ModalType) => {
    switch (modalType) {
      case 'TITLE':
        return (
          <div
            onClick={(e) => e.stopPropagation()}
            className="mx-5 flex w-[375px] flex-col gap-y-[24px] rounded-[32px] bg-white p-6"
          >
            <section className="flex items-center justify-between">
              <h2 className="title-lg">{title}</h2>
              <CancelIcon
                onClick={() => {
                  if (setIsModalOpen) {
                    setIsModalOpen(!isModalOpen)
                  }
                }}
                width={32}
                height={32}
              />
            </section>
            {children}
          </div>
        )
      default:
        return (
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray1 mx-5 flex w-[375px] flex-col items-center justify-center rounded-[32px] p-6"
          >
            {children}
          </div>
        )
    }
  }

  return (
    <div
      onClick={() => {
        if (setIsModalOpen) {
          setIsModalOpen(!isModalOpen)
        }
      }}
      className="fixed inset-0 z-60 flex items-center justify-center bg-[rgba(0,0,0,0.3)]"
    >
      {renderModalType(modalType)}
    </div>
  )
}
