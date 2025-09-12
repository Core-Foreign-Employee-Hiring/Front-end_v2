import { Dispatch, SetStateAction } from 'react'
import { CancelIcon } from '@/assets/svgComponents'

interface ErrorModalProps {
  content: string
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  isModalOpen: boolean
}
export default function ErrorModal({ content, setIsModalOpen, isModalOpen }: ErrorModalProps) {
  return (
    <div
      onClick={() => {
        setIsModalOpen(!isModalOpen)
      }}
      className="fixed inset-0 z-60 flex items-center justify-center bg-[rgba(0,0,0,0.3)]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mx-5 flex w-full flex-col gap-y-[24px] rounded-[32px] bg-white p-6"
      >
        <section className="flex items-end justify-end">
          <CancelIcon
            onClick={() => {
              setIsModalOpen(!isModalOpen)
            }}
            width={32}
            height={32}
          />
        </section>
        <p className="subtitle-md pb-[32px] text-center">{content}</p>
      </div>
    </div>
  )
}
